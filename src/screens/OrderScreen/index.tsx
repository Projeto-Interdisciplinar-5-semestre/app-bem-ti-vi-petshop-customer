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

import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { findById } from '../../api/order/search/findById'; 

import { Order } from '../../utils/Types';

import { styles } from './style';

export default function OrderScreen() {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { id: orderId } = route.params as { id: string };

    const [order, setOrder] = useState<Order>({} as Order);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    hardwareBackPress(navigate, "SearchOrder");

    const loadData = async () => {
        setLoading(true);
        try {
            const orderResult = await findById(orderId);
            if ('code' in orderResult) {
                setError(orderResult.message);
                return;
            }
            setOrder(orderResult);
        } catch (error) {
            setError('Erro ao carregar pedido. Verifique a conexão.');
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

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Informações do Pedido</Text>
                    </View>

                    <View style={styles.fieldContainer}>
                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Data do Pedido</Text>
                            <Text style={styles.value}>{new Date(order.moment).toLocaleString('pt-BR')}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Status do Pagamento</Text>
                            <Text style={styles.value}>{order.paymentStatus}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Total</Text>
                            <Text style={styles.value}>R$ {order.totalPrice.toFixed(2)}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Cliente</Text>
                            <Text style={styles.value}>{order.customer.name}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>E-mail</Text>
                            <Text style={styles.value}>{order.customer.email}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Telefone</Text>
                            <Text style={styles.value}>{order.customer.telephones.phoneOne}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Entrega</Text>
                            <Text style={styles.value}>{order.deliverToAddress ? "Sim" : "Não"}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Forma de Pagamento</Text>
                            <Text style={styles.value}>{order.methodPaymentByPix ? "PIX" : "Dinheiro"}</Text>
                        </View>

                        {(order.methodPaymentByPix && order.paymentStatus === "WAITING_PAYMENT" && order.pix) && (
                            <View style={{ alignItems: 'center', marginVertical: 20 }}>
                                <Text style={styles.label}>QR Code para Pagamento</Text>
                                <Image
                                    source={{ uri: `data:image/png;base64,${order.pix.qrCodeBase64}` }}
                                    style={{ width: 200, height: 200, marginTop: 10 }}
                                />
                            </View>
                        )}

                        {error ? (
                            <View style={{ marginVertical: 10, alignSelf: 'center' }}>
                                <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
                            </View>
                        ) : null}
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Itens do Pedido</Text>
                    </View>

                    <View style={styles.fieldContainer}>
                        {order.orderItems.map((item, index) => (
                            <View key={index} style={{ marginBottom: 12 }}>
                                <Text style={styles.label}>Produto: <Text style={styles.value}>{item.product.name}</Text></Text>
                                <Text style={styles.label}>Quantidade: <Text style={styles.value}>{item.quantity}</Text></Text>
                                <Text style={styles.label}>Preço Unitário: <Text style={styles.value}>R$ {item.price.toFixed(2)}</Text></Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <NavigationBar initialTab='perfil' />
        </View>
    );
}
