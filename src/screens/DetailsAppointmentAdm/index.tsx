import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from './style';

const statusOptions = ['Confirmado', 'Pendente', 'Adiado', 'Concluído'];

export default function DetailsAppointment() {
  const [status, setStatus] = useState('Confirmado');
  const [showOptions, setShowOptions] = useState(false);

  const handleUpdateStatus = () => {
    if (status === 'Cancelado') {
      Alert.alert('Aviso', 'Não é possível atualizar um agendamento cancelado.');
      return;
    }
    const nextIndex = (statusOptions.indexOf(status) + 1) % statusOptions.length;
    setStatus(statusOptions[nextIndex]);
    setShowOptions(false);
  };

  const handleCancel = () => {
    Alert.alert('Cancelar Agendamento', 'Deseja realmente cancelar?', [
      { text: 'Não' },
      {
        text: 'Sim',
        onPress: () => {
          setStatus('Cancelado');
          setShowOptions(false);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Detalhes</Text>
      </View>

      <Text style={styles.productTitle}>Detalhes do Agendamento</Text>

      <View style={styles.productCard}>
        <Image
          source={{ uri: 'https://foxvet.com.br/wp-content/uploads/2022/07/banner-banho-tosa-perguntas-frequentes-1200x675.jpg' }}
          style={styles.productImage}
        />
        <View style={{
          backgroundColor: status === 'Cancelado' ? '#ff4d4d' : '#41FF47',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 20,
          marginBottom: 10
        }}>
          <Text style={{ color: '#fff', fontFamily: 'Montserrat-Medium' }}>{status}</Text>
        </View>

        <Text style={styles.cardTitle}>Banho e Tosa</Text>
        <Text style={styles.description}>🐾 Pet Neymar</Text>
        <Text style={styles.description}>📅 Sex 26 de Abril de 2024 - 14:00</Text>
        <Text style={styles.description}>📍 Endereço: av tal tal tal</Text>
        <Text style={styles.description}>👤 Profissional: Matheus</Text>
      </View>

      {status !== 'Cancelado' && (
        <>
          <TouchableOpacity style={styles.addButton} onPress={handleUpdateStatus}>
            <Text style={styles.addButtonText}>Atualizar Status</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: '#C10000' }]}
            onPress={handleCancel}
          >
            <Text style={[styles.addButtonText, { color: '#fff' }]}>Cancelar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
