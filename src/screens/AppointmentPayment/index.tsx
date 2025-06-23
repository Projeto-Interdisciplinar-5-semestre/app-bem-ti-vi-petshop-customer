import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Share, ToastAndroid } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Appointment } from '../../utils/Types';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { NavigationProps } from '../../routes/AppRoute';
import { styles } from './style';

export const AppointmentPayment = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { appointment } = route.params as { appointment: Appointment };

    hardwareBackPress(navigate, "Home");

    const handleShare = async () => {
        if (appointment.pix) {
            try {
                await Share.share({
                    message: `${appointment.pix.qrCode}`,
                });
            } catch (error) {
                ToastAndroid.show('Erro ao compartilhar o QR Code!', ToastAndroid.SHORT);
            }
        }
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.pageTitle}>🗓️ Seu horário foi marcado</Text>

                {/* Detalhes do serviço */}
                <View style={styles.sectionBox}>
                    <Text style={styles.sectionTitle}>📌 Serviço:</Text>
                    <Image source={{ uri: appointment.service.pathImage }} style={styles.serviceImage} />
                    <Text style={styles.serviceName}>{appointment.service.name}</Text>
                    <Text style={styles.serviceDescription}>{appointment.service.description}</Text>
                    <Text style={styles.price}>{formatCurrency(appointment.service.price)}</Text>
                </View>

                {/* Informações do Pet */}
                <View style={styles.sectionBox}>
                    <Text style={styles.sectionTitle}>🐾 Pet:</Text>
                    <Text style={styles.text}>{appointment.pet.name}</Text>
                    <Text style={styles.sectionTitle}>🕒 Data e Hora:</Text>
                    <Text style={styles.text}>{new Date(appointment.dateTime).toLocaleString('pt-BR')}</Text>
                    <Text style={styles.sectionTitle}>💳 Forma de Pagamento:</Text>
                    <Text style={styles.text}>
                        {appointment.methodPaymentByPix ? 'Pix' : 'Dinheiro'}
                    </Text>
                </View>

                {/* QR Code Pix */}
                {appointment.pix ? (
                    <View style={styles.qrContainer}>
                        <Text style={styles.sectionTitle}>📱 Pagamento via Pix:</Text>
                        <Image
                            source={{ uri: `data:image/png;base64,${appointment.pix.qrCodeBase64}` }}
                            style={styles.qrImage}
                        />
                        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
                            <Icon name="share-variant" size={20} color="#fff" />
                            <Text style={styles.shareButtonText}>Compartilhar QR Code</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.infoBox}>
                        <Text style={styles.text}>Pagamento no dinheiro! Realize no dia do atendimento.</Text>
                    </View>
                )}

                <View style={styles.statusBox}>
                    <Text style={styles.sectionTitle}>📍 Status do Pagamento:</Text>
                    <Text
                        style={[
                            styles.paymentStatus,
                            appointment.paymentStatus.toLowerCase() === 'aprovado' ? styles.statusApproved :
                                styles.statusPending
                        ]}
                    >
                        {appointment.paymentStatus}
                    </Text>
                </View>

                <TouchableOpacity style={styles.confirmButton} onPress={() => navigate('Home')}>
                    <Text style={styles.confirmButtonText}>🏠 Voltar para o Início</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
