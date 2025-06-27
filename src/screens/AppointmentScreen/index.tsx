import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { NavigationBar } from '../../components/NavigationBar';
import { NavigationProps } from '../../routes/AppRoute';

import { Appointment } from '../../utils/Types';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { findById } from '../../api/appointment/search/findById';

import { styles } from './style';
import { ErrorModal } from '../../components/ErrorModal';

export default function AppointmentScreen() {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { id: appointmentId } = route.params as { id: string };

    const [appointment, setAppointment] = useState<Appointment>({} as Appointment);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [errorModalVisible, setErrorModalVisible] = useState(false);

    hardwareBackPress(navigate, "SearchAppointment");

    const loadData = async () => {
        setLoading(true);
        try {
            const appointmentResult = await findById(appointmentId);
            if ('code' in appointmentResult) {
                setError(appointmentResult.message);
                setErrorModalVisible(true);
                return;
            }
            setAppointment(appointmentResult);
        } catch (error) {
            setError('Erro ao carregar serviço. Verifique a conexão.');
            setErrorModalVisible(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    if (loading) {
        return (
            <View style={[styles.safeArea, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    return (
        <View style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.profileSection}>
                    <Image source={{ uri: appointment.service.pathImage }} style={styles.profileImage} />
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Informações do Agendamento</Text>
                    </View>

                    <View style={styles.fieldContainer}>
                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Data e Horário</Text>
                            <Text style={styles.value}>{new Date(appointment.dateTime).toLocaleString('pt-BR')}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Serviço escolhido</Text>
                            <Text style={styles.value}>{appointment.service.name}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Cliente</Text>
                            <Text style={styles.value}>{appointment.customer.name}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>E-mail do Cliente</Text>
                            <Text style={styles.value}>{appointment.customer.email}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Telefone</Text>
                            <Text style={styles.value}>{appointment.customer.telephones.phoneOne}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Pet</Text>
                            <Text style={styles.value}>{appointment.pet.name}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Raça</Text>
                            <Text style={styles.value}>{appointment.pet.race}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Status</Text>
                            <Text style={styles.value}>{appointment.paymentStatus}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Forma de Pagamento</Text>
                            <Text style={styles.value}>{appointment.methodPaymentByPix ? "PIX" : "Dinheiro"}</Text>
                        </View>

                        {(appointment.methodPaymentByPix && appointment.paymentStatus == "WAITING_PAYMENT" && appointment.pix) && (
                            <View style={{ alignItems: 'center', marginVertical: 20 }}>
                                <Text style={styles.label}>QR Code para Pagamento</Text>
                                <Image
                                    source={{ uri: `data:image/png;base64,${appointment.pix.qrCodeBase64}` }}
                                    style={{ width: 200, height: 200, marginTop: 10 }}
                                />
                            </View>
                        )}

                        <ErrorModal
                            visible={errorModalVisible}
                            error={error}
                            onClose={() => setErrorModalVisible(false)}
                        />
                    </View>
                </View>
            </ScrollView>

            <NavigationBar initialTab='perfil' />
        </View>
    );
}
