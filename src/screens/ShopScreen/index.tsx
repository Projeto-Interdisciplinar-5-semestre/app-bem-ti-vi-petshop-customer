import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { styles } from './style';
import { NavigationBar } from '../../components/NavigationBar'; ;

const IMAGES = {
  CART: require('../../assets/images/carrinho-branco.png'),
  PRODUCT: require('../../assets/images/produto1.png'),
  TRASH: require('../../assets/images/lixeira.png'),
  PIX: require('../../assets/images/pix.png'),
  CARTAO: require('../../assets/images/cartaooo.png')
};

export const ShopScreen = () => {
  const [items, setItems] = useState([
    { 
      id: 1, 
      name: 'Cama Decorada Para\nGatos', 
      price: 109.99, 
      quantity: 1, 
      checked: true,
      image: IMAGES.PRODUCT
    },
    { 
      id: 2, 
      name: 'Ração Para Cães\nAdultos', 
      price: 79.50, 
      quantity: 1, 
      checked: true,
      image: IMAGES.PRODUCT
    }
  ]);
  
  const [deliveryType, setDeliveryType] = useState({
    address: false,
    pickup: false
  });
  
  const [paymentMethods, setPaymentMethods] = useState({
    pix: true,
    card: false
  });

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        if (newQuantity < 1) {
          removeItem(id);
          return item;
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const toggleItemCheck = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + (item.checked ? item.price * item.quantity : 0), 0);

  const handleDeliveryTypeChange = (type: 'address' | 'pickup') => {
    if (type === 'address') {
      setDeliveryType({
        address: true,
        pickup: false
      });
    } else {
      setDeliveryType({
        pickup: true,
        address: false
      });
    }
  };

  const handlePaymentMethodChange = (method: 'pix' | 'card') => {
    setPaymentMethods({
      pix: method === 'pix',
      card: method === 'card'
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Continue Shopping Button */}
        <View style={styles.continueShoppingContainer}>
          <TouchableOpacity style={styles.continueShoppingButton}>
            <Image 
              source={IMAGES.CART} 
              style={styles.cartIcon}
            />
            <Text style={styles.continueText}>Continuar Comprando</Text>
          </TouchableOpacity>
        </View>

        {/* Items List */}
        {items.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Image 
              source={item.image} 
              style={styles.productImage}
            />
            
            <View style={styles.productInfoContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
              
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
              <Image 
                source={IMAGES.TRASH} 
                style={styles.trashIcon}
              />
            </TouchableOpacity>
          </View>
        ))}

        {/* Total Card */}
        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
        </View>

        {/* Delivery Options - Redesign */}
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
              {deliveryType.address && (
                <Text style={styles.deliveryAddressText}>
                  Rua Exemplo, 123 - Bairro, Cidade/Estado
                </Text>
              )}
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

        {/* Payment Methods - Redesign */}
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
                <Image 
                  source={IMAGES.PIX} 
                  style={[
                    styles.paymentMethodImage,
                    styles.pixImage
                  ]} 
                />
                <View>
                  <Text style={styles.paymentMethodText}>Pix</Text>
                  <Text style={styles.paymentMethodSubtext}>Pagamento instantâneo</Text>
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.paymentMethodCard, 
                paymentMethods.card && styles.paymentMethodCardActive,
                { marginTop: 12 }
              ]}
              onPress={() => handlePaymentMethodChange('card')}
            >
              <View style={styles.paymentMethodContent}>
                <Image 
                  source={IMAGES.CARTAO} 
                  style={[
                    styles.paymentMethodImage,
                    styles.cardImage
                  ]} 
                />
                <View>
                  <Text style={styles.paymentMethodText}>Cartão</Text>
                  <Text style={styles.paymentMethodSubtext}>Crédito ou Débito</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Button */}
        <View style={styles.confirmButtonContainer}>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>CONFIRMAR PEDIDO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Navigation Bar */}
      <NavigationBar />
    </SafeAreaView>
  );
};