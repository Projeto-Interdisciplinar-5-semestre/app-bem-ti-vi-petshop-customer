import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList
} from 'react-native';
import styles from './style';

interface Agendamento {
  id: number;
  servico: string;
  data: string;
  hora: string;
  status: 'Agendado' | 'Confirmado';
}

const agendamentosFake: Agendamento[] = [
  { id: 1, servico: 'Banho e Tosa', data: '2025-04-24', hora: '14:00', status: 'Agendado' },
  { id: 2, servico: 'Consulta', data: '2025-04-30', hora: '10:00', status: 'Agendado' },
  { id: 3, servico: 'Banho', data: '2025-05-11', hora: '10:00', status: 'Confirmado' },
  { id: 4, servico: 'Banho', data: '2025-05-11', hora: '10:00', status: 'Confirmado' },
  { id: 5, servico: 'Banho', data: '2025-05-11', hora: '10:00', status: 'Confirmado' }
];

export default function DetailsAdm() {
  const [dataFiltro, setDataFiltro] = useState('');
  const [selecionado, setSelecionado] = useState<number | null>(null);

  const filtrarAgendamentos = () => {
    const dataLimpa = dataFiltro.trim();

    if (!dataLimpa) return agendamentosFake;

    const regexData = /^\d{4}-\d{2}-\d{2}$/;
    if (!regexData.test(dataLimpa)) {
      return [];
    }

    return agendamentosFake.filter((ag) => ag.data === dataLimpa);
  };

  const cancelarAgendamento = (id: number) => {
    Alert.alert(`Agendamento ID ${id} cancelado.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Agendamentos 📅</Text>
        <TextInput
          style={styles.inputData}
          placeholder="YYYY-MM-DD"
          value={dataFiltro}
          onChangeText={setDataFiltro}
        />
      </View>

      <FlatList
        data={filtrarAgendamentos()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => setSelecionado(item.id)}
          >
            <View style={styles.conteudoCard}>
              <Text style={styles.servico}>{item.servico}</Text>
              <Text style={styles.dataHora}>
                {new Date(item.data).toLocaleDateString('pt-BR')} às {item.hora}
              </Text>
            </View>
            <Text
              style={[
                styles.status,
                item.status === 'Agendado'
                  ? styles.statusAgendado
                  : styles.statusConfirmado
              ]}
            >
              {item.status}
            </Text>
          </TouchableOpacity>
        )}
      />

      {filtrarAgendamentos().length === 0 && (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          Nenhum agendamento encontrado para essa data.
        </Text>
      )}

      {selecionado !== null && (
        <View style={styles.botoesArea}>
          <TouchableOpacity
            style={styles.botaoVer}
            onPress={() => Alert.alert('Ir para detalhes do agendamento')}
          >
            <Text style={styles.textoVer}>Detalhes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoCancelar}
            onPress={() => cancelarAgendamento(selecionado)}
          >
            <Text style={styles.textoCancelar}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
