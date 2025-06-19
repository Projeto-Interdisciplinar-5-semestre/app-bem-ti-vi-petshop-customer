import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import { styles } from './style';

import { FontAwesome5, MaterialIcons, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../routes/AppRoute';
import { create } from '../../api/customer/create/create';
import { selectImageFromGalery } from '../../utils/selectImageFromGalery/selectImageFromGalery';

export default function Cadastro() {
  const { goBack, navigate } = useNavigation<NavigationProps>()
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [phoneOne, setPhoneOne] = useState('');
  const [phoneTwo, setPhoneTwo] = useState('');
  const [imagem, setImagem] = useState('');

  const selecionarImagem = async () => {
    const imageSelected = await selectImageFromGalery();
    if (imageSelected) {
      setImagem(imageSelected);
    }
  };

  const sendRequestRegister = async () =>{
    const user = {
      name: nome,
      email: email,
      password: senha,
      birthDate:dataNascimento,
      telephones: {
        phoneOne,
        phoneTwo,
      },
      address: {
        state: estado,
        city: cidade,
        neighborhood: bairro,
        street: endereco,
        number: numero,
        complement: complemento,
        postalCode: cep,
      },
    }

    try{
        const success = await create(user, imagem);
            if (success) {
              Alert.alert('Sua conta foi cadastrada', 'Faça login para acessar o aplicativo.');
              navigate('ClientLogin')
            }
        
    } catch(error){
        console.error('POST request failed:', error);
        Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>CADASTRO</Text>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="user" size={16} color="#256489" />
        <TextInput placeholder="Digite seu nome" style={styles.input} placeholderTextColor="#256489" value={nome} onChangeText={setNome} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="alternate-email" size={18} color="#256489" />
        <TextInput placeholder="Digite seu e-mail" style={styles.input} placeholderTextColor="#256489" keyboardType="email-address" value={email} onChangeText={setEmail} />
      </View>

      <View style={styles.inputContainer}>
        <Entypo name="lock" size={18} color="#256489" />
        <TextInput placeholder="Digite sua senha" style={styles.input} placeholderTextColor="#256489" secureTextEntry  value={senha} onChangeText={setSenha} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="pin" size={18} color="#256489" />
        <TextInput placeholder="Digite seu CEP" style={styles.input} placeholderTextColor="#256489" keyboardType="numeric" value={cep} onChangeText={setCep}  />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="map-pin" size={18} color="#256489" />
        <TextInput placeholder="Digite seu Endereço" style={styles.input} placeholderTextColor="#256489"  value={endereco} onChangeText={setEndereco} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="home-outline" size={18} color="#256489" />
        <TextInput placeholder="Digite seu Bairro" style={styles.input} placeholderTextColor="#256489"  value={bairro} onChangeText={setBairro} />
      </View>

      <View style={styles.inputContainer}>
        <Entypo name="globe" size={18} color="#256489" />
        <TextInput placeholder="Digite seu Estado" style={styles.input} placeholderTextColor="#256489" value={estado} onChangeText={setEstado}  />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="city" size={18} color="#256489" />
        <TextInput placeholder="Digite sua Cidade" style={styles.input} placeholderTextColor="#256489" value={cidade} onChangeText={setCidade}  />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="pin" size={18} color="#256489" />
        <TextInput placeholder="Digite seu Número" style={styles.input} placeholderTextColor="#256489" keyboardType="numeric"  value={numero} onChangeText={setNumero} />
      </View>
      
      <View style={styles.inputContainer}>
        <Feather name="calendar" size={18} color="#256489" />
        <TextInput placeholder="Data de nascimento (YYYY-MM-DD)" style={styles.input} placeholderTextColor="#256489" value={dataNascimento} onChangeText={setDataNascimento} />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="phone" size={18} color="#256489" />
        <TextInput placeholder="Telefone principal" style={styles.input} placeholderTextColor="#256489" keyboardType="phone-pad" value={phoneOne} onChangeText={setPhoneOne} />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="phone-call" size={18} color="#256489" />
        <TextInput placeholder="Telefone secundário (opcional)" style={styles.input} placeholderTextColor="#256489" keyboardType="phone-pad" value={phoneTwo} onChangeText={setPhoneTwo} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="business" size={18} color="#256489" />
        <TextInput placeholder="Complemento" style={styles.input} placeholderTextColor="#256489" value={complemento} onChangeText={setComplemento} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Imagem do perfil</Text>

        <TouchableOpacity 
          style={[
            styles.imagePicker, 
            imagem ? styles.imagePickerActive : null
          ]} 
          onPress={selecionarImagem}
        >
          <Text style={[
            styles.imagePickerText,
            imagem ? styles.imagePickerTextActive : null
          ]}>
            {imagem ? 'Imagem selecionada (clique para alterar)' : 'Selecione uma imagem para o seu perfil'}
          </Text>
        </TouchableOpacity>
        
        {imagem && (
          <View style={styles.imagePreviewContainer}>
            <Image 
              source={{ uri: imagem }} 
              style={styles.imagePreview} 
            />
          </View>
        )}
      </View>


      <TouchableOpacity style={styles.button} onPress={sendRequestRegister}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> goBack()}>
        <Text style={styles.loginRedirect}>
          Já possui conta? <Text style={styles.loginLink}>Faça Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
