import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Share, ToastAndroid } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Order } from '../../utils/Types';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { NavigationProps } from '../../routes/AppRoute';
import { styles } from './style';
import { useValidateToken } from '../../utils/UseValidateToken/UseValidateToken';

export const OrderPayment = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { order } = route.params as { order: Order };

    useValidateToken();
    hardwareBackPress(navigate, "Home");

    const handleShare = async () => {
        if (order.pix) {
            try {
                await Share.share({
                    message: order.pix.qrCode,
                });
            } catch (error) {
                ToastAndroid.show('Erro ao compartilhar o QR Code!', ToastAndroid.SHORT);
            }
        }
    };

    const handleReloadStatus = () => {
        ToastAndroid.show('Função de recarregar o status ainda não implementada.', ToastAndroid.SHORT);
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.pageTitle}>💳 Detalhes do pagamento</Text>

                {/* Detalhes gerais do pedido */}
                <View style={styles.sectionBox}>
                    <Text style={styles.sectionTitle}>🛒 Pedido realizado em:</Text>
                    <Text style={styles.text}>{new Date(order.moment).toLocaleString('pt-BR')}</Text>

                    <Text style={styles.sectionTitle}>💰 Valor Total:</Text>
                    <Text style={styles.price}>{formatCurrency(order.totalPrice)}</Text>

                    {order.deliverToAddress ? (
                        <>
                            <Text style={styles.sectionTitle}>📦 Entrega:</Text>
                            <Text style={styles.text}>Endereço de entrega informado pelo cliente.</Text>
                            <Text style={styles.text}>{order.customer.address.street}, Nº {order.customer.address.number}</Text>
                        </>
                    ) : (
                    <>
                        <Text style={styles.sectionTitle}>📦 Retirada na loja:</Text>
                        <Text style={styles.text}>O produto será retirado na loja.</Text>
                    </>
                    )}

                    <Text style={styles.sectionTitle}>🧾 Forma de Pagamento:</Text>
                    <Text style={styles.text}>
                        {order.methodPaymentByPix ? 'Pix' : 'Dinheiro'}
                    </Text>
                </View>

                {/* Itens do pedido */}
                <View style={styles.sectionBox}>
                    <Text style={styles.sectionTitle}>📋 Itens do Pedido:</Text>
                    {order.orderItems.map((item) => (
                        <View key={item.id} style={styles.itemBox}>
                            <Image source={{ uri: item.product.pathImage }} style={styles.productImage} />
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemName}>{item.product.name}</Text>
                                <Text style={styles.itemPrice}>{formatCurrency(item.product.price)}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* QR Code Pix */}
                {order.pix ? (
                    <View style={styles.qrContainer}>
                        <Text style={styles.sectionTitle}>📱 Pagamento via Pix:</Text>
                        <Image
                            source={{ uri: `data:image/png;base64,${order.pix.qrCodeBase64}` }}
                            style={styles.qrImage}
                        />
                        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
                            <Icon name="share-variant" size={20} color="#fff" />
                            <Text style={styles.shareButtonText}>Compartilhar QR Code</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.infoBox}>
                        <Text style={styles.text}>Pagamento no dinheiro, realize o pagamento na entrega ou na loja.</Text>
                    </View>
                )}

                {/* Status do pagamento */}
                <View style={styles.statusBox}>
                    <Text style={styles.sectionTitle}>📍 Status do Pagamento:</Text>
                    <Text
                        style={[
                            styles.paymentStatus,
                            order.paymentStatus.toLowerCase() === 'aprovado' ? styles.statusApproved :
                                styles.statusPending
                        ]}
                    >
                        {order.paymentStatus}
                    </Text>
                </View>

                {/* Botão Voltar */}
                <TouchableOpacity style={styles.confirmButton} onPress={() => navigate('Home')}>
                    <Text style={styles.confirmButtonText}>🏠 Voltar para o Início</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};