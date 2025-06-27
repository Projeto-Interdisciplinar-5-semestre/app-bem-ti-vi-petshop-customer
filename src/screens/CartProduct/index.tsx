import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image, ToastAndroid, Alert, BackHandler } from 'react-native';
import { styles } from './style';
import { NavigationBar } from '../../components/NavigationBar';
import { Customer, Error, Order, OrderItem, OrderItemForCar, Product } from '../../utils/Types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getCartItems, saveItemToCart, removeItemFromCart, updateCart, clearCart } from '../../utils/asyncStorage/asyncStorageManager';
import { NavigationProps } from '../../routes/AppRoute';
import { validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { create } from '../../api/order/create/create';
import { useValidateToken } from '../../utils/UseValidateToken/UseValidateToken';
import { GLOBAL_VAR } from '../../api/config/globalVar';
import { ErrorModal } from '../../components/ErrorModal';

export const CartProduct = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { orderItemForCar: initialItem } = route.params as { orderItemForCar?: OrderItemForCar };

    const [items, setItems] = useState<OrderItemForCar[]>([]);
    const [deliveryType, setDeliveryType] = useState({ address: true, pickup: false });
    const [paymentMethods, setPaymentMethods] = useState({ pix: true, cash: false });

    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [errorModalVisible, setErrorModalVisible] = useState(false);

    useValidateToken();
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (initialItem?.id != undefined) {
                navigate("DetailsProduct", { id: initialItem.id });
            } else {
                navigate("ShopScreen");
            }
            return true;
        });

        return () => backHandler.remove();
    }, []);

    const loadCart = async () => {
        const cartItems = await getCartItems();
        setItems(cartItems);
    };

    useEffect(() => {
        const processCart = async () => {
            if (initialItem) {
                await saveItemToCart(initialItem);
            }
            await loadCart();
        };

        processCart();
    }, [initialItem]);

    const updateQuantity = async (id: string, change: number) => {
        GLOBAL_VAR.CART_ITEMS += change;
        const updatedItems = items.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + change;
                if (newQuantity < 1) {
                    removeItem(id);
                    return item;
                }
                return { ...item, quantity: newQuantity };
            }
            return item;
        });

        setItems(updatedItems);
        await updateCart(updatedItems);
    };

    const removeItem = async (id: string) => {
        await removeItemFromCart(id);
        await loadCart();
    };

    const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    const handleDeliveryTypeChange = (type: 'address' | 'pickup') => {
        setDeliveryType({
            address: type === 'address',
            pickup: type === 'pickup'
        });
    };

    const handlePaymentMethodChange = (method: 'pix' | 'cash') => {
        setPaymentMethods({
            pix: method === 'pix',
            cash: method === 'cash'
        });
    };

    const handleSendOrder = () => {
        Alert.alert(
            "Atenção!",
            `Deseja realizar o pedido?`,
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Realizar pedido", onPress: () => sendOrder() }
            ]
        );
    };

    const sendOrder = async () => {
        try {
            const customerId = await validateTokenCustomer();
            if ('code' in customerId) {
                navigate('ClientLogin');
                return;
            }

            const orderItems: OrderItem[] = [];

            items.map(item => {
                const product = { id: item.id } as Product;
                const orderItem = { quantity: item.quantity, product: product } as OrderItem;
                orderItems.push(orderItem);
            });

            const customer = { id: customerId.id } as Customer;

            let deliverToAddress: boolean = true;
            if (deliveryType.address) {
                deliverToAddress = true;
            } else if (deliveryType.pickup) {
                deliverToAddress = false;
            }

            let methodPaymentByPix: boolean = true;
            if (paymentMethods.pix) {
                methodPaymentByPix = true;
            } else if (paymentMethods.cash) {
                methodPaymentByPix = false;
            }

            const order = {
                customer: customer,
                orderItems: orderItems,
                deliverToAddress: deliverToAddress,
                methodPaymentByPix: methodPaymentByPix
            } as Order;

            const result: Order | Error = await create(order);

            if ('code' in result) {
                setError(result.message);
                setErrorModalVisible(true);
                return;
            }

            ToastAndroid.show('Pedido enviado!', ToastAndroid.SHORT);
            clearCart();
            GLOBAL_VAR.CART_ITEMS = 0;
            navigate("OrderPayment", { order: result });
        } catch (error) {
            setError('Erro ao carregar serviço. Verifique a conexão.');
            setErrorModalVisible(true);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                <View style={styles.continueShoppingContainer}>
                    <TouchableOpacity style={styles.continueShoppingButton} onPress={() => navigate("ShopScreen")}>
                        <Image source={require('../../assets/images/carrinho-branco.png')} style={styles.cartIcon} />
                        <Text style={styles.continueText}>Continuar Comprando</Text>
                    </TouchableOpacity>
                </View>

                {items.map((item) => (
                    <View key={item.id} style={styles.itemCard}>
                        <Image
                            source={{ uri: item.product.pathImage }}
                            style={styles.productImage}
                        />

                        <View style={styles.productInfoContainer}>
                            <Text style={styles.itemName}>{item.product.name}</Text>
                            <Text style={styles.itemPrice}>R$ {item.product.price.toFixed(2)}</Text>

                            <View style={styles.quantityContainer}>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => updateQuantity(item.id, -1)}
                                >
                                    <Text style={styles.quantityText}>-</Text>
                                </TouchableOpacity>

                                <Text style={styles.quantity}>{item.quantity}</Text>

                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => updateQuantity(item.id, 1)}
                                >
                                    <Text style={styles.quantityText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.trashButton}
                            onPress={() => removeItem(item.id)}
                        >
                            <Image source={require('../../assets/images/lixeira.png')} style={styles.trashIcon} />
                        </TouchableOpacity>
                    </View>
                ))}

                <View style={styles.totalCard}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tipo de Entrega</Text>

                    <View style={styles.deliveryOptionsContainer}>
                        <TouchableOpacity
                            style={[
                                styles.deliveryOptionCard,
                                deliveryType.address && styles.deliveryOptionCardActive
                            ]}
                            onPress={() => handleDeliveryTypeChange('address')}
                        >
                            <View style={styles.deliveryOptionContent}>
                                <View style={styles.deliveryRadio}>
                                    {deliveryType.address && <View style={styles.deliveryRadioSelected} />}
                                </View>
                                <Text style={styles.deliveryOptionText}>Entregar no Endereço</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.deliveryOptionCard,
                                deliveryType.pickup && styles.deliveryOptionCardActive,
                                { marginTop: 12 }
                            ]}
                            onPress={() => handleDeliveryTypeChange('pickup')}
                        >
                            <View style={styles.deliveryOptionContent}>
                                <View style={styles.deliveryRadio}>
                                    {deliveryType.pickup && <View style={styles.deliveryRadioSelected} />}
                                </View>
                                <Text style={styles.deliveryOptionText}>Retirar na Loja</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Forma de Pagamento</Text>

                    <View style={styles.paymentMethodsContainer}>
                        <TouchableOpacity
                            style={[
                                styles.paymentMethodCard,
                                paymentMethods.pix && styles.paymentMethodCardActive
                            ]}
                            onPress={() => handlePaymentMethodChange('pix')}
                        >
                            <View style={styles.paymentMethodContent}>
                                <Image source={require('../../assets/images/pix.png')} style={styles.paymentMethodImage} />
                                <View>
                                    <Text style={styles.paymentMethodText}>Pix</Text>
                                    <Text style={styles.paymentMethodSubtext}>Pagamento instantâneo</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.paymentMethodCard,
                                paymentMethods.cash && styles.paymentMethodCardActive,
                                { marginTop: 12 }
                            ]}
                            onPress={() => handlePaymentMethodChange('cash')}
                        >
                            <View style={styles.paymentMethodContent}>
                                <Image source={require('../../assets/icons/dinheiro.webp')} style={styles.paymentMethodImage} />
                                <View>
                                    <Text style={styles.paymentMethodText}>Dinheiro</Text>
                                    <Text style={styles.paymentMethodSubtext}>Pagamento na entrega</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


                <ErrorModal
                    visible={errorModalVisible}
                    error={error}
                    fields={fields}
                    onClose={() => setErrorModalVisible(false)}
                />

                <View style={styles.confirmButtonContainer}>
                    <TouchableOpacity style={styles.confirmButton} onPress={handleSendOrder}>
                        <Text style={styles.confirmButtonText}>CONFIRMAR PEDIDO</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <NavigationBar />
        </SafeAreaView>
    );
};
