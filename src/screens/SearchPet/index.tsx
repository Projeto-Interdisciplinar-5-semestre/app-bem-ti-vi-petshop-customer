import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Alert, TextInput, ImageBackground } from 'react-native';

import { NavigationBar } from '../../components/NavigationBar';

import { styles } from './style';

type PetType = {
  id: number;
  nome: string;
  raca: string;
  telefone: string;
  imagem: any;
};

export const SearchPet = () => {
  const [searchText, setSearchText] = useState('');
  const [pets] = useState<PetType[]>([
    { 
      id: 1, 
      nome: 'Bolinha', 
      raca: 'Siamês', 
      telefone: '(11) 9999-8888',
      imagem: require('../../assets/images/gato.jpg')
    },
    { 
      id: 2, 
      nome: 'Thor', 
      raca: 'Husky Siberiano', 
      telefone: '(11) 9876-5432',
      imagem: require('../../assets/images/husky.jpg')
    },
    { 
      id: 3, 
      nome: 'Minnie', 
      raca: 'Sírio', 
      telefone: '(11) 9123-4567',
      imagem: require('../../assets/images/hamster.jpg')
    },
  ]);

  const filteredPets = pets.filter(pet =>
    pet.nome.toLowerCase().includes(searchText.toLowerCase()) ||
    pet.raca.toLowerCase().includes(searchText.toLowerCase())
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
          <Text style={styles.greetingText}>Olá, Ana!</Text>
          <Text style={styles.subtitle}>Seus Pets Cadastrados</Text>
        </View>

        {/* Botão Cadastrar */}
        <TouchableOpacity style={styles.cadastrarButton}>
          <Image 
            source={require('../../assets/images/adicionar.png')} 
            style={styles.cadastrarButtonIcon} 
          />
          <Text style={styles.cadastrarButtonText}>CADASTRAR</Text>
        </TouchableOpacity>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Image 
            source={require('../../assets/images/busca.png')} 
            style={styles.searchIcon} 
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar pet"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Lista de Pets */}
        <View style={styles.petsContainer}>
          {filteredPets.map((pet) => (
            <View key={pet.id} style={styles.petCard}>
              <View style={styles.petContent}>
                <ImageBackground 
                  source={pet.imagem} 
                  style={styles.petImage}
                  imageStyle={styles.petImageStyle}
                >
                  <View style={styles.imageOverlay} />
                </ImageBackground>
                
                <View style={styles.petInfo}>
                  <Text style={styles.petLabel}>Nome</Text>
                  <Text style={styles.petValue} numberOfLines={1} ellipsizeMode="tail">{pet.nome}</Text>
                  
                  <Text style={styles.petLabel}>Raça</Text>
                  <Text style={styles.petValue} numberOfLines={1} ellipsizeMode="tail">{pet.raca}</Text>
                  
                  <Text style={styles.petLabel}>Telefone</Text>
                  <Text style={styles.petValue} numberOfLines={1} ellipsizeMode="tail">{pet.telefone}</Text>
                </View>
              </View>
              
              <View style={styles.petActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Image 
                    source={require('../../assets/images/olhos.png')} 
                    style={styles.actionIcon} 
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Image 
                    source={require('../../assets/images/configuracao.png')} 
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
