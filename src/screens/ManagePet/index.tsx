import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView, Alert, ScrollView } from 'react-native';
import ImagePicker from 'expo-image-picker';

import { NavigationBar } from '../../components/NavigationBar';

import styles from './style';

type PorteType = {
  label: string;
  value: string;
};

type GeneroType = {
  label: string;
  value: string;
};

export const ManagePet = () => {
  const [nomePet, setNomePet] = useState<string>('');
  const [racaPet, setRacaPet] = useState<string>('');
  const [idadePet, setIdadePet] = useState<string>('');
  const [portePet, setPortePet] = useState<string>('');
  const [generoPet, setGeneroPet] = useState<string>('');
  const [notasPet, setNotasPet] = useState<string>('');
  const [imagemPet, setImagemPet] = useState<string | null>(null);

  const portes: PorteType[] = [
    { label: 'Pequeno', value: 'pequeno' },
    { label: 'Médio', value: 'medio' },
    { label: 'Grande', value: 'grande' },
  ];

  const generos: GeneroType[] = [
    { label: 'Macho', value: 'macho' },
    { label: 'Fêmea', value: 'femea' },
  ];

  const selecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos da permissão para acessar suas fotos!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImagemPet(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Pet Info Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Informações do pet</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome do pet</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite o nome do pet"
            placeholderTextColor="#999"
            value={nomePet}
            onChangeText={setNomePet}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Raça do pet</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite a raça do pet"
            placeholderTextColor="#999"
            value={racaPet}
            onChangeText={setRacaPet}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Idade do Pet</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite a idade do pet"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={idadePet}
            onChangeText={setIdadePet}
          />
        </View>

        {/* Image Picker */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Imagem do pet</Text>
          <TouchableOpacity 
            style={[
              styles.imagePicker, 
              imagemPet ? styles.imagePickerActive : null
            ]} 
            onPress={selecionarImagem}
          >
            <Text style={[
              styles.imagePickerText,
              imagemPet ? styles.imagePickerTextActive : null
            ]}>
              {imagemPet ? 'Imagem selecionada (clique para alterar)' : 'Selecione uma imagem do pet'}
            </Text>
          </TouchableOpacity>
          
          {imagemPet && (
            <View style={styles.imagePreviewContainer}>
              <Image 
                source={{ uri: imagemPet }} 
                style={styles.imagePreview} 
              />
            </View>
          )}
        </View>

        <View style={styles.porteGroup}>
          <Text style={styles.label}>Porte do pet</Text>
          <View style={styles.porteContainer}>
            {portes.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={[
                  styles.porteButton,
                  portePet === item.value && styles.porteButtonActive
                ]}
                onPress={() => setPortePet(item.value)}
              >
                <View style={styles.porteRadio}>
                  {portePet === item.value && <View style={styles.porteRadioSelected} />}
                </View>
                <Text style={styles.porteLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Gênero - Ajustado para ficar mais compacto */}
        <View style={styles.generoGroup}>
          <Text style={styles.label}>Gênero do pet</Text>
          <View style={styles.generoContainer}>
            {generos.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={[
                  styles.generoButton,
                  generoPet === item.value && styles.generoButtonActive
                ]}
                onPress={() => setGeneroPet(item.value)}
              >
                <View style={styles.generoRadio}>
                  {generoPet === item.value && <View style={styles.generoRadioSelected} />}
                </View>
                <Text style={styles.generoLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Notas/Observações</Text>
          <TextInput
            style={[styles.inputField, styles.multilineInput]}
            placeholder="Digite alguma observação sobre o pet"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            value={notasPet}
            onChangeText={setNotasPet}
          />
        </View>

        {/* Submit Buttons */}
        <View style={styles.submitButtonsContainer}>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.submitButtonText}>DELETAR</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>ATUALIZAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <NavigationBar />
    </SafeAreaView>
  );
};
