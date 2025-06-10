import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import { NavigationBar } from '../../components/NavigationBar';
import { NavigationProps } from '../../routes/AppRoute';
import { useNavigation, useRoute } from '@react-navigation/native';
import { findByCustomer } from '../../api/order/search/findByCustomer';
import { Order } from '../../utils/Types';

export default function SearchOrder() {
  const { navigate } = useNavigation<NavigationProps>();
  const route = useRoute();
  const { id: customerId } = route.params as { id: string };
  const [pedidos, setPedidos] = useState<Order[]>([])
  
  useEffect(() => {
    const buscarPedidos = async () => {
      if(!customerId) return
      try {
        const data = await findByCustomer(customerId);
        if (!data) {
          throw new Error("Erro ao buscar dados dos pedidos");
        }
        setPedidos(data)
      } catch (erro) {
        console.error("Erro ao buscar pedidos:", erro);
        Alert.alert("Erro", "Não foi possível carregar os dados dos pedidos.");
      }
    };

    buscarPedidos();
  }, [customerId]);

  return (
    <View style={styles.container}>

      <Text style={styles.subTitle}>Histórico de pedidos</Text>

      <ScrollView style={styles.scroll}>
        {pedidos.map((pedido, index) => (
          <View key={pedido.id || index} style={styles.card}>
            <Text style={styles.title}>Pedido #{index + 1}</Text>
            {pedido.orderItems.map((item, i) => (
              <View key={item.id || i}>
                <Text style={styles.title}>{item.product.name}</Text>
                <Text>{`${item.quantity}x unidades`}</Text>
                <Text>{`Valor unitário: R$ ${item.price.toFixed(2)}`}</Text>
              </View>
            ))}
            <Text>{`Total: R$ ${pedido.totalPrice.toFixed(2)}`}</Text>
            <Text>{`Compra realizada em: ${new Date(pedido.moment).toLocaleString()}`}</Text>

            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkText}>Ver item</Text>
              <AntDesign name="arrowright" size={16} color="#007b83" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <NavigationBar initialTab='perfil'/>
    </View>
  );
}