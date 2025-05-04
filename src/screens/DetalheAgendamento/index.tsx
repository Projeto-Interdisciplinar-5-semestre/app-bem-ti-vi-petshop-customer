import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';

export default function DetalheAgendamento() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
        <FontAwesome name="arrow-left" size={20} color="#000" />
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>

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
