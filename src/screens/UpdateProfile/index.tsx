import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView, Alert, ScrollView, FlatList } from 'react-native';
import ImagePicker from 'expo-image-picker';
import { styles } from './style';
import { NavigationBar } from '../../components/NavigationBar';

type EstadoType = {
  label: string;
  value: string;
};

const estados: EstadoType[] = [
  { label: 'Acre', value: 'AC' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Amapá', value: 'AP' },
  { label: 'Amazonas', value: 'AM' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Distrito Federal', value: 'DF' },
  { label: 'Espírito Santo', value: 'ES' },
  { label: 'Goiás', value: 'GO' },
  { label: 'Maranhão', value: 'MA' },
  { label: 'Mato Grosso', value: 'MT' },
  { label: 'Mato Grosso do Sul', value: 'MS' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Pará', value: 'PA' },
  { label: 'Paraíba', value: 'PB' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Piauí', value: 'PI' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Rio Grande do Norte', value: 'RN' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Rondônia', value: 'RO' },
  { label: 'Roraima', value: 'RR' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'São Paulo', value: 'SP' },
  { label: 'Sergipe', value: 'SE' },
  { label: 'Tocantins', value: 'TO' },
];

export const UpdateProfile = () => {
  const [nomeCliente, setNomeCliente] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [dataNascimento, setDataNascimento] = useState<string>('');
  const [imagemPerfil, setImagemPerfil] = useState<string | null>(null);
  const [cep, setCep] = useState<string>('');
  const [endereco, setEndereco] = useState<string>('');
  const [bairro, setBairro] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [estado, setEstado] = useState<string>('');
  const [mostrarEstados, setMostrarEstados] = useState<boolean>(false);

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
      setImagemPerfil(result.assets[0].uri);
    }
  };

  const selecionarEstado = (estadoSelecionado: string) => {
    setEstado(estadoSelecionado);
    setMostrarEstados(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >

        {/* Divisor de Informações */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Informações do Perfil</Text>
          <View style={styles.divider} />
        </View>

        {/* Formulário */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#999"
            value={nomeCliente}
            onChangeText={setNomeCliente}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu telefone"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Data de nascimento</Text>
          <TextInput
            style={styles.inputField}
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#999"
            keyboardType="default"
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Foto de perfil</Text>
          <TouchableOpacity 
            style={[
              styles.imagePicker, 
              imagemPerfil ? styles.imagePickerActive : null
            ]} 
            onPress={selecionarImagem}
          >
            <Text style={[
              styles.imagePickerText,
              imagemPerfil ? styles.imagePickerTextActive : null
            ]}>
              {imagemPerfil ? 'Imagem selecionada (clique para alterar)' : 'Selecione uma foto de perfil'}
            </Text>
          </TouchableOpacity>
          
          {imagemPerfil && (
            <View style={styles.imagePreviewContainer}>
              <Image 
                source={{ uri: imagemPerfil }} 
                style={styles.imagePreview} 
              />
            </View>
          )}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>CEP</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu CEP"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={cep}
            onChangeText={setCep}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Endereço</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu endereço completo"
            placeholderTextColor="#999"
            value={endereco}
            onChangeText={setEndereco}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Bairro</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu bairro"
            placeholderTextColor="#999"
            value={bairro}
            onChangeText={setBairro}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Cidade</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite sua cidade"
            placeholderTextColor="#999"
            value={cidade}
            onChangeText={setCidade}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Estado</Text>
          <TouchableOpacity 
            style={styles.estadoSelector}
            onPress={() => setMostrarEstados(!mostrarEstados)}
          >
            <Text style={estado ? styles.estadoSelecionado : styles.estadoPlaceholder}>
              {estado || 'Selecione seu estado'}
            </Text>
          </TouchableOpacity>

          {mostrarEstados && (
            <View style={styles.estadosListaContainer}>
              <FlatList
                data={estados}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.estadoItem}
                    onPress={() => selecionarEstado(item.label)}
                  >
                    <Text style={styles.estadoItemText}>{item.label}</Text>
                  </TouchableOpacity>
                )}
                style={styles.estadosLista}
                nestedScrollEnabled
              />
            </View>
          )}
        </View>

        {/* Submit Button */}
        <View style={styles.submitButtonWrapper}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>SALVAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <NavigationBar />
    </SafeAreaView>
  );
};
