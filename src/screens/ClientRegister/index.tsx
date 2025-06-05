import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { styles } from './style';

import { FontAwesome5, MaterialIcons, Entypo, Feather, Ionicons } from '@expo/vector-icons';

export default function Cadastro() {
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
        <TextInput placeholder="Digite seu nome" style={styles.input} placeholderTextColor="#256489" />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="alternate-email" size={18} color="#256489" />
        <TextInput placeholder="Digite seu e-mail" style={styles.input} placeholderTextColor="#256489" keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <Entypo name="lock" size={18} color="#256489" />
        <TextInput placeholder="Digite sua senha" style={styles.input} placeholderTextColor="#256489" secureTextEntry />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="pin" size={18} color="#256489" />
        <TextInput placeholder="Digite seu CEP" style={styles.input} placeholderTextColor="#256489" keyboardType="numeric" />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="map-pin" size={18} color="#256489" />
        <TextInput placeholder="Digite seu Endereço" style={styles.input} placeholderTextColor="#256489" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="home-outline" size={18} color="#256489" />
        <TextInput placeholder="Digite seu Bairro" style={styles.input} placeholderTextColor="#256489" />
      </View>

      <View style={styles.inputContainer}>
        <Entypo name="globe" size={18} color="#256489" />
        <TextInput placeholder="Digite seu Estado" style={styles.input} placeholderTextColor="#256489" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome5 name="city" size={18} color="#256489" />
        <TextInput placeholder="Digite sua Cidade" style={styles.input} placeholderTextColor="#256489" />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="pin" size={18} color="#256489" />
        <TextInput placeholder="Digite seu Número" style={styles.input} placeholderTextColor="#256489" keyboardType="numeric" />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>

      <Text style={styles.loginRedirect}>
        Já possui conta? <Text style={styles.loginLink}>Faça Login</Text>
      </Text>
    </ScrollView>
  );
}
