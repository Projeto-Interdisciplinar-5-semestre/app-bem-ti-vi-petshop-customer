import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { Appointment, Error, Paginacao } from '../../utils/Types';

import { PaginationControls } from '../../components/PaginationControls';
import { NavigationBar } from '../../components/NavigationBar';
import { InputPaymentStatus } from '../../components/InputPaymentStatus';

import { validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { search } from '../../api/appointment/search/search';

import { NavigationProps } from '../../routes/AppRoute';
import { styles } from './style';

export function SearchAppointment() {
    const { navigate } = useNavigation<NavigationProps>();

    const [paymentStatus, setPaymentStatus] = useState<string>('');
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    hardwareBackPress(navigate, 'ShowProfile');

    const formatDateTime = (date: Date) =>
        date.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });

    useEffect(() => {
        const debounceTimeout = setTimeout(() => setPageIndex(0), 600);
        return () => clearTimeout(debounceTimeout);
    }, [paymentStatus]);

    useEffect(() => {
        async function loadAppointments() {
            setLoading(true);
            try {
                const customerId = await validateTokenCustomer();
                if ('code' in customerId) {
                    navigate('ClientLogin');
                    return;
                }

                const data: Paginacao<Appointment> | Error = await search(pageIndex, customerId.id, paymentStatus);

                if ('content' in data && 'totalPages' in data) {
                    setAppointments(data.content);
                    setTotalPages(data.totalPages);
                    setError('');
                    setFields([]);
                } else {
                    setAppointments([]);
                    setError(data.message || 'Erro desconhecido.');
                    setFields(data.errorFields?.map(field => field.description) || []);
                }
            } catch {
                setAppointments([]);
                setError('Não foi possível carregar os agendamentos. Verifique sua conexão.');
            } finally {
                setLoading(false);
            }
        }

        loadAppointments();
    }, [pageIndex, paymentStatus, navigate]);

    const handleNextPage = () => {
        if (pageIndex + 1 < totalPages) setPageIndex(prev => prev + 1);
    };

    const handlePrevPage = () => {
        if (pageIndex > 0) setPageIndex(prev => prev - 1);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>

                <InputPaymentStatus
                    label='Status de pagamento'
                    paymentStatus={paymentStatus}
                    setPaymentStatus={setPaymentStatus}
                />

                <View style={styles.itemContainer}>
                    {loading ? (
                        <ActivityIndicator size="large" color="#256489" style={{ marginTop: 20 }} />
                    ) : appointments.length > 0 ? (
                        appointments.map(appointment => (
                            <View key={appointment.id} style={styles.card}>
                                <Text style={styles.cardTitle}>Cliente: {appointment.customer.name}</Text>
                                <Text style={styles.cardSubtitle}>Email: {appointment.customer.email}</Text>
                                <Text style={styles.cardSubtitle}>Serviço: {appointment.service.name}</Text>
                                <Text style={styles.cardSubtitle}>Descrição: {appointment.service.description}</Text>
                                <Text style={styles.cardSubtitle}>
                                    Data/Hora: {formatDateTime(new Date(appointment.dateTime))}
                                </Text>
                                <Text style={styles.cardSubtitle}>Preço: R$ {appointment.price.toFixed(2)}</Text>
                                <Text style={styles.cardSubtitle}>
                                    Status de Pagamento: {appointment.paymentStatus}
                                </Text>
                            </View>
                        ))
                    ) : (
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>
                            Nenhum agendamento encontrado.
                        </Text>
                    )}
                </View>

                {error ? (
                    <View style={{ marginVertical: 10, alignSelf: 'center' }}>
                        <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
                        {fields.map((field, index) => (
                            <Text key={index} style={{ color: 'red', textAlign: 'center' }}>• {field}</Text>
                        ))}
                    </View>
                ) : null}
            </ScrollView>

            <PaginationControls
                pageIndex={pageIndex}
                totalPages={totalPages}
                onNext={handleNextPage}
                onPrev={handlePrevPage}
            />

            <NavigationBar initialTab="home" />
        </SafeAreaView>
    );
}
