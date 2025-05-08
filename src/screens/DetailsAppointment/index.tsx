import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './style';

export default function DetailsAppointment() {

  return (
    <ScrollView style={styles.container}>

      <View style={styles.card}>
        <View style={styles.imagens}>
          <View style={styles.imagemPlaceholder} />
          <View style={styles.imagemPlaceholder} />
          <View style={styles.imagemPlaceholder} />
        </View>

        <Text style={styles.servico}>Banho e Tosa</Text>
        <Text style={styles.preco}>R$ 25,50</Text>
        <Text style={styles.descricao}>
          Agende já um serviço de banho e tosa para seu pet! Vamos dar banho e deixar seu cachorro na régua.
        </Text>
        <Text style={styles.data}>
          SERVIÇO AGENDADO PARA DIA 31/03/2025
        </Text>

        <TouchableOpacity style={styles.botaoCancelar}>
          <Text style={styles.textoCancelar}>Pedir cancelamento do serviço</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
