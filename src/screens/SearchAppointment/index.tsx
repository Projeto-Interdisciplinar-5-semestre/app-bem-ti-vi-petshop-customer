import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, TextInput, ImageBackground } from 'react-native';

import { NavigationBar } from '../../components/NavigationBar';

import { styles } from './style';


type AgendamentoType = {
  id: number;
  servico: string;
  valor: string;
  horario: string;
  data: string;
  imagem: any;
};

export const SearchAppointment = () => {
  const [searchText, setSearchText] = useState('');
  const [agendamentos] = useState<AgendamentoType[]>([
    { 
      id: 1, 
      servico: 'Banho e Tosa', 
      valor: 'R$ 25,50', 
      horario: '14:00',
      data: '08/04/2025',
      imagem: require('../../assets/images/tosa.png')
    },
    { 
      id: 2, 
      servico: 'Corte de Unhas', 
      valor: 'R$ 35,00', 
      horario: '10:30',
      data: '15/04/2025',
      imagem: require('../../assets/images/corte.jpg')
    },
    { 
      id: 3, 
      servico: 'Vacinação', 
      valor: 'R$ 120,00', 
      horario: '16:45',
      data: '30/04/2025',
      imagem: require('../../assets/images/vacinacao.jpg')
    },
  ]);

  const filteredAgendamentos = agendamentos.filter(agendamento =>
    agendamento.servico.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Olá, Ana!</Text>
          <Text style={styles.subtitle}>Seus agendamentos</Text>
        </View>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Image 
            source={require('../../assets/images/busca.png')} 
            style={styles.searchIcon} 
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar agendamento"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Lista de Agendamentos */}
        <View style={styles.agendamentosContainer}>
          {filteredAgendamentos.map((agendamento) => (
            <View key={agendamento.id} style={styles.agendamentoCard}>
              <View style={styles.agendamentoContent}>
                <ImageBackground 
                  source={agendamento.imagem} 
                  style={styles.agendamentoImage}
                  imageStyle={styles.agendamentoImageStyle}
                >
                  <View style={styles.imageOverlay} />
                </ImageBackground>
                
                <View style={styles.agendamentoInfo}>
                  <Text style={styles.agendamentoLabel}>Serviço</Text>
                  <Text style={styles.agendamentoValue}>{agendamento.servico}</Text>
                  
                  <Text style={styles.agendamentoLabel}>Data</Text>
                  <Text style={styles.agendamentoValue}>{agendamento.data}</Text>
                  
                  <Text style={styles.agendamentoLabel}>Horário</Text>
                  <Text style={styles.agendamentoValue}>{agendamento.horario}</Text>
                  
                  <Text style={styles.agendamentoLabel}>Valor</Text>
                  <Text style={styles.agendamentoValue}>{agendamento.valor}</Text>
                </View>
              </View>
              
              <View style={styles.agendamentoActions}>
                <TouchableOpacity>
                  <Image 
                    source={require('../../assets/images/olhos.png')} 
                    style={styles.actionIcon} 
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Navegação Inferior */}
      <NavigationBar />
      </SafeAreaView>
  );
};
