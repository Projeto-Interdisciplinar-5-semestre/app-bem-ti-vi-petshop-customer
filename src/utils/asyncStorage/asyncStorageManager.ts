import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';
import { OrderItemForCar } from '../Types';

const CART_KEY = 'cart';

export const saveItemToCart = async (newItem: OrderItemForCar): Promise<void> => {
    try {
        const existingData = await AsyncStorage.getItem(CART_KEY);
        let cartItems: OrderItemForCar[] = existingData ? JSON.parse(existingData) : [];

        const existingItemIndex = cartItems.findIndex(item => item.id === newItem.id);

        if (existingItemIndex >= 0) {
            cartItems[existingItemIndex].quantity += newItem.quantity;
        } else {
            cartItems.push(newItem);
        }

        await AsyncStorage.setItem(CART_KEY, JSON.stringify(cartItems));
        ToastAndroid.show('Produto adicionado ao carrinho!', ToastAndroid.SHORT);
    } catch (error) {
        ToastAndroid.show('Erro ao adicionar ao carrinho!', ToastAndroid.SHORT);
    }
};

export const getCartItems = async (): Promise<OrderItemForCar[]> => {
    try {
        const data = await AsyncStorage.getItem(CART_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        ToastAndroid.show('Erro ao recuperar o carrinho!', ToastAndroid.SHORT);
        return [];
    }
};

export const updateCart = async (items: OrderItemForCar[]): Promise<void> => {
    try {
        await AsyncStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (error) {
        ToastAndroid.show('Erro ao atualizar o carrinho!', ToastAndroid.SHORT);
    }
};

export const removeItemFromCart = async (id: string): Promise<void> => {
    try {
        const data = await AsyncStorage.getItem(CART_KEY);
        let cartItems: OrderItemForCar[] = data ? JSON.parse(data) : [];

        cartItems = cartItems.filter(item => item.id !== id);

        await AsyncStorage.setItem(CART_KEY, JSON.stringify(cartItems));
    } catch (error) {
        ToastAndroid.show('Erro ao remover o item!', ToastAndroid.SHORT);
    }
};

export const clearCart = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(CART_KEY);
    } catch (error) {
        ToastAndroid.show('Erro ao limpar o carrinho!', ToastAndroid.SHORT);
    }
};
