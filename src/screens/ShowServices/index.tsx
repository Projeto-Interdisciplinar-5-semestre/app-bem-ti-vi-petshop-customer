import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, TextInput, Alert } from 'react-native';

import { NavigationBar } from '../../components/NavigationBar';

import { styles } from './style';

const servicos = [
  { 
    id: 1, 
    nome: 'Vacinação em Cães e Gatos', 
    preco: '29,99',
    imagem: require('../../assets/images/vacinacao.jpg')
  },
  { 
    id: 2, 
    nome: 'Banho e Tosa', 
    preco: '49,99',
    imagem: require('../../assets/images/tosa.png')
  },
  { 
    id: 3, 
    nome: 'Corte de Unhas', 
    preco: '19,99',
    imagem: require('../../assets/images/corte.jpg')
  },
  { 
    id: 4, 
    nome: 'Banho Completo', 
    preco: '39,99',
    imagem: require('../../assets/images/banho-tosa.jpg')
  },
]

export const ShowServices = () => {
  const [searchText, setSearchText] = useState('');

  const handleAgendar = () => {
    Alert.alert(
      "Agendar Serviço",
      "Deseja agendar o serviço de Banho e Tosa?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Agendar", 
          onPress: () => console.log("Serviço agendado") 
        }
      ]
    );
  };

  const filteredServicos = servicos.filter(servico =>
    servico.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >

        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Nossos Serviços</Text>
        </View>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Image 
            source={require('../../assets/images/busca.png')} 
            style={styles.searchIcon} 
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar serviço"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Lista de Serviços */}
        <View style={styles.servicosContainer}>
          {filteredServicos.map((servico) => (
            <View key={servico.id} style={styles.servicoCard}>
              <View style={styles.cardContent}>
                <Image 
                  source={servico.imagem} 
                  style={styles.servicoImage}
                />
                <View style={styles.servicoInfo}>
                  <Text style={styles.servicoNome} numberOfLines={2}>{servico.nome}</Text>
                  <View style={styles.precoContainer}>
                    <Text style={styles.precoLabel}>A partir de</Text>
                    <Text style={styles.servicoPreco}>R$ {servico.preco}</Text>
                  </View>
                </View>
                <Text style={styles.commentText}>
                  O serviço de banho e tosa simples foi excelente! Meu pet ficou muito mais limpo e confortável, e a tosa higiênica foi feita com cuidado. Ele está muito mais feliz e cheiroso agora!
                </Text>
                <Text style={styles.commentDate}>12/05/2023</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Botão Agendar Serviço */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.agendarButton} 
            onPress={handleAgendar}
          >
            <Text style={styles.agendarButtonText}>AGENDAR SERVIÇO</Text>
            <Image 
              source={require('../../assets/images/check.png')} 
              style={styles.checkIcon} 
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Navegação Inferior */}
     <NavigationBar />
    </SafeAreaView>
  );
};