import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { Order, Error, Paginacao } from '../../utils/Types';

import { PaginationControls } from '../../components/PaginationControls';
import { NavigationBar } from '../../components/NavigationBar';
import { InputPaymentStatus } from '../../components/InputPaymentStatus';

import { validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';

import { NavigationProps } from '../../routes/AppRoute';
import { styles } from './style';
import { search } from '../../api/order/search/search';
import { ErrorModal } from '../../components/ErrorModal';

export function SearchOrder() {
    const { navigate } = useNavigation<NavigationProps>();

    const [paymentStatus, setPaymentStatus] = useState<string>('');
    const [orders, setOrders] = useState<Order[]>([]);
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
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
        async function loadOrders() {
            setLoading(true);
            try {
                const customerId = await validateTokenCustomer();
                if ('code' in customerId) {
                    navigate('ClientLogin');
                    return;
                }

                const data: Paginacao<Order> | Error = await search(pageIndex, customerId.id, paymentStatus);

                if ('content' in data && 'totalPages' in data) {
                    setOrders(data.content);
                    setTotalPages(data.totalPages);
                    setError('');
                    setFields([]);
                } else {
                    setOrders([]);
                    setError(data.message || 'Erro desconhecido.');
                    setFields(data.errorFields?.map(field => field.description) || []);
                    setErrorModalVisible(true);
                }
            } catch {
                setOrders([]);
                setError('Não foi possível carregar os agendamentos. Verifique sua conexão.');
                setErrorModalVisible(true);
            } finally {
                setLoading(false);
            }
        }

        loadOrders();
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
                    ) : orders.length > 0 ? (
                        orders.map(order => (
                            <TouchableOpacity key={order.id} style={styles.card} onPress={() => navigate("OrderScreen", {id: order.id})}>
                                <Text style={styles.cardTitle}>Pedido #{order.id.slice(-5)}</Text>

                                <View style={styles.cardSection}>
                                    <Text style={styles.cardSubtitle}>Cliente: <Text style={styles.cardText}>{order.customer.name}</Text></Text>
                                    <Text style={styles.cardSubtitle}>Email: <Text style={styles.cardText}>{order.customer.email}</Text></Text>
                                    <Text style={styles.cardSubtitle}>Data/Hora: <Text style={styles.cardText}>{formatDateTime(new Date(order.moment))}</Text></Text>
                                    <Text style={styles.cardSubtitle}>Preço Total: <Text style={styles.cardText}>R$ {order.totalPrice.toFixed(2)}</Text></Text>
                                    <Text style={styles.cardSubtitle}>Status Pagamento: <Text style={styles.cardText}>{order.paymentStatus}</Text></Text>
                                    <Text style={styles.cardSubtitle}>Pagamento por Pix: <Text style={styles.cardText}>{order.methodPaymentByPix ? 'Sim' : 'Não'}</Text></Text>
                                    <Text style={styles.cardSubtitle}>Entregar em domicílio: <Text style={styles.cardText}>{order.deliverToAddress ? 'Sim' : 'Não'}</Text></Text>
                                </View>

                                <View style={styles.cardSection}>
                                    <Text style={[styles.cardSubtitle, { marginBottom: 5 }]}>Itens do Pedido:</Text>
                                    {Array.isArray(order.orderItems) && order.orderItems.length > 0 ? (
                                        order.orderItems.map(item => (
                                            <View key={item.id} style={styles.itemRow}>
                                                <Text style={styles.cardText}>• {item.product.name} - {item.quantity}x R$ {item.price.toFixed(2)}</Text>
                                            </View>
                                        ))
                                    ) : (
                                        <Text style={styles.cardText}>Nenhum item.</Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum pedido encontrado.</Text>
                    )}
                </View>

                <ErrorModal
                    visible={errorModalVisible}
                    error={error}
                    fields={fields}
                    onClose={() => setErrorModalVisible(false)}
                />
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
