import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Alert, TextInput, ImageBackground } from 'react-native';

import { NavigationBar } from '../../components/NavigationBar';

import { styles } from './style';
import { NavigationProps } from '../../routes/AppRoute';
import { useNavigation, useRoute } from '@react-navigation/native';
import { findByCustomer } from '../../api/pet/search/search';
import { Pet } from '../../utils/Types';

export const SearchPet = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const route = useRoute();
  const { id: customerId } = route.params as { id: string };
  const [searchText, setSearchText] = useState('');
  const [pets,setPets] = useState<Pet[]>()

  useEffect(() => {
    const buscarPets = async () => {
      if(!customerId) return
      try {
        const data = await findByCustomer(customerId);
        if (!data) {
          throw new Error("Erro ao buscar dados dos pets");
        }
        setPets(data.pets)
      } catch (erro) {
        console.error("Erro ao buscar pets:", erro);
        Alert.alert("Erro", "Não foi possível carregar os dados dos pets.");
      }
    };

    buscarPets();
  }, [customerId]);

  const filteredPets = pets?.filter(pet =>
    pet.name.toLowerCase().includes(searchText.toLowerCase()) ||
    pet.race.toLowerCase().includes(searchText.toLowerCase())
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
        <TouchableOpacity style={styles.cadastrarButton} onPress={()=> navigate('CreatePet', {id:customerId})}>
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
          {filteredPets?.map((pet) => (
            <View key={pet.id} style={styles.petCard}>
              <View style={styles.petContent}>
                <ImageBackground 
                  source={{uri:pet.pathImage}} 
                  style={styles.petImage}
                  imageStyle={styles.petImageStyle}
                >
                  <View style={styles.imageOverlay} />
                </ImageBackground>
                
                <View style={styles.petInfo}>
                  <Text style={styles.petLabel}>Nome</Text>
                  <Text style={styles.petValue} numberOfLines={1} ellipsizeMode="tail">{pet.name}</Text>
                  
                  <Text style={styles.petLabel}>Raça</Text>
                  <Text style={styles.petValue} numberOfLines={1} ellipsizeMode="tail">{pet.race}</Text>
                  
                  <Text style={styles.petLabel}>Telefone</Text>
                  <Text style={styles.petValue} numberOfLines={1} ellipsizeMode="tail">telefone??</Text>
                </View>
              </View>
              
              <View style={styles.petActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Image 
                    source={require('../../assets/images/olhos.png')} 
                    style={styles.actionIcon} 
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={()=> navigate('ManagePet', {id:pet.id})}>
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
      <NavigationBar initialTab='perfil'/>
    </SafeAreaView>
  );
};
