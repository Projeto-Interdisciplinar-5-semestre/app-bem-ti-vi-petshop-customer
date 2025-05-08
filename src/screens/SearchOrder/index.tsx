import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import { NavigationBar } from '../../components/NavigationBar';

const pedidos = [
  {
    produto: 'Shampoo para cachorro',
    unidades: 3,
    valorUnitario: 25.5,
    data: '17/02/2025',
  },
  {
    produto: 'Shampoo para cachorro',
    unidades: 3,
    valorUnitario: 25.5,
    data: '17/02/2025',
  },
  {
    produto: 'Shampoo para cachorro',
    unidades: 3,
    valorUnitario: 25.5,
    data: '17/02/2025',
  },
];

export default function SearchOrder() {

  return (
    <View style={styles.container}>

      <Text style={styles.subTitle}>Histórico de pedidos</Text>

      <ScrollView style={styles.scroll}>
        {pedidos.map((pedido, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{pedido.produto}</Text>
            <Text>{`${pedido.unidades}x unidades`}</Text>
            <Text>{`Valor unitário: R$ ${pedido.valorUnitario.toFixed(2)}`}</Text>
            <Text>{`Total: R$ ${(pedido.valorUnitario * pedido.unidades).toFixed(2)}`}</Text>
            <Text>{`Compra realizada em: ${pedido.data}`}</Text>

            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkText}>Ver item</Text>
              <AntDesign name="arrowright" size={16} color="#007b83" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <NavigationBar />
    </View>
  );
}