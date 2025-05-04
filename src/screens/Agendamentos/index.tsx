import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';


type RootStackParamList = {
  Agendamentos: undefined;
  DetalheAgendamento: undefined;
};

export default function Agendamentos() {
  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar}>
        <FontAwesome name="arrow-left" size={20} color="#000" />
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Meus Agendamentos</Text>
      <Text style={styles.subtitulo}>Histórico de agendamentos</Text>

      <View style={styles.card}>
        <Text style={styles.servico}>Banho e Tosa</Text>
        <Text>Pet: Pipoca</Text>
        <Text>Total: R$ 25,50</Text>
        <Text style={styles.data}>Serviço agendado para: 31/03/2025</Text>
        <TouchableOpacity
          style={styles.verItem}
        >
          <Text style={styles.verItemTexto}>Ver item</Text>
          <FontAwesome name="arrow-right" size={16} color="#1985A1" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.servico}>Vacinação</Text>
        <Text>Pet: Amora</Text>
        <Text>Total: R$ 50,00</Text>
        <Text style={styles.data}>Serviço realizado em: 30/01/2025</Text>
        <TouchableOpacity style={styles.verItem}>
          <Text style={styles.verItemTexto}>Ver item</Text>
          <FontAwesome name="arrow-right" size={16} color="#1985A1" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
