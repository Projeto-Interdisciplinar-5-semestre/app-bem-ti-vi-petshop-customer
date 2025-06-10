import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, TextInput, Alert } from 'react-native';

import { NavigationBar } from '../../components/NavigationBar';

import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../routes/AppRoute';
import { Service } from '../../utils/Types';
import { search } from '../../api/service/search/search';
import { PaginationControls } from '../../components/PaginationControls';

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
  const { navigate } = useNavigation<NavigationProps>();
  const [pageIndex, setPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [servicos, setServicos] = useState<Service[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const buscarCategorias = async () => {
      try {
        const data = await search(searchText,pageIndex);
        if (!data) {
          throw new Error("Erro ao buscar dados dos serviços");
        }
        setServicos(data.content)
        setTotalPages(data.totalPages)
      } catch (erro) {
        console.error("Erro ao buscar serviços:", erro);
        Alert.alert("Erro", "Não foi possível carregar os dados dos serviços.");
      }
    };

    buscarCategorias();
  }, [searchText,pageIndex]);

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
    servico.name.toLowerCase().includes(searchText.toLowerCase())
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
                  source={{uri:servico.pathImage}} 
                  style={styles.servicoImage}
                />
                <View style={styles.servicoInfo}>
                  <Text style={styles.servicoNome} numberOfLines={2}>{servico.name}</Text>
                  <View style={styles.precoContainer}>
                    <Text style={styles.precoLabel}>A partir de</Text>
                    <Text style={styles.servicoPreco}>R$ {servico.price}</Text>
                  </View>
                </View>
                <Text style={styles.commentText}>{servico.description}</Text>
                <Text style={styles.commentDate}>{new Date(servico.activationStatus.creationDate).toLocaleDateString('pt-BR')}</Text>
                <TouchableOpacity 
                onPress={()=> navigate('DetailsService',{id:servico.id})}
                >
                <Image 
                  source={require('../../assets/images/olhos.png')} 
                />
                </TouchableOpacity>
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
        
        <PaginationControls 
            pageIndex={pageIndex}
            totalPages={totalPages}
            onNext={()=>setPageIndex(prev => prev + 1)}
            onPrev={()=>setPageIndex(prev => prev - 1)}
        />
      </ScrollView>

      {/* Navegação Inferior */}
     <NavigationBar initialTab='servicos'/>
    </SafeAreaView>
  );
};