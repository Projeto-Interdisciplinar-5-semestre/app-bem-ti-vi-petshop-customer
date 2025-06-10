import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView, Alert, ScrollView } from 'react-native';
import ImagePicker from 'expo-image-picker';

import { NavigationBar } from '../../components/NavigationBar';

import { styles } from './style';
import { NavigationProps } from '../../routes/AppRoute';
import { useNavigation, useRoute } from '@react-navigation/native';
import { selectImageFromGalery } from '../../utils/selectImageFromGalery/selectImageFromGalery';
import { Pet } from '../../utils/Types';
import { create } from '../../api/pet/create/create';


type PorteType = {
  label: string;
  value: string;
};

type GeneroType = {
  label: string;
  value: string;
};

const portes: PorteType[] = [
  { label: 'Pequeno', value: 'SMALL' },
  { label: 'Médio', value: 'MEDIUM' },
  { label: 'Grande', value: 'LARGE' },
];

const generos: GeneroType[] = [
  { label: 'Macho', value: 'MASCULINE' },
  { label: 'Fêmea', value: 'FEMININE' },
];

export const CreatePet = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const route = useRoute();
  const { id: customerId } = route.params as { id: string };
  const [nomePet, setNomePet] = useState<string>('');
  const [racaPet, setRacaPet] = useState<string>('');
  const [idadePet, setIdadePet] = useState<string>('');
  const [portePet, setPortePet] = useState<string>('');
  const [generoPet, setGeneroPet] = useState<string>('');
  const [notasPet, setNotasPet] = useState<string>('');
  const [especiePet, setEspeciePet] = useState<string>('');
  const [imagemPet, setImagemPet] = useState<string>('');

    const selecionarImagem = async () => {
      const imageSelected = await selectImageFromGalery();
      if (imageSelected) {
        setImagemPet(imageSelected);
      }
    };

	const sendRequestCreate = async () => {
		const pet: Pet = {
			name: nomePet,
			race:racaPet,
			owner: {id:customerId},
      birthDate:idadePet,
      gender:generoPet,
      note:notasPet,
      size: portePet,
      species:especiePet,
		};

		try {
			const success = await create(pet, imagemPet);
			if (success) {
        setNomePet('')
        setRacaPet('')
        setIdadePet('')
        setPortePet('')
        setGeneroPet('')
        setNotasPet('')
        setEspeciePet('')
        setImagemPet('')

				Alert.alert('Sucesso!', 'O pet foi cadastrado.');
			}
		} catch (error) {
			console.error('POST request failed:', error);
			Alert.alert('Erro', 'Não foi possível cadastrar o pet.');
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

        {/* Image Picker - Movido para depois da idade */}
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
          <Text style={styles.label}>Sexo do pet</Text>
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

        <View style={styles.submitButtonWrapper}>
          <TouchableOpacity style={styles.submitButton} onPress={sendRequestCreate}>
            <Text style={styles.submitButtonText}>SALVAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <NavigationBar initialTab='perfil'/>
    </SafeAreaView>
  );
};
