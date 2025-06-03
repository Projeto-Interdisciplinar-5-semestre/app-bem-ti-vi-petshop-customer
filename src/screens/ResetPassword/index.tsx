import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export const ResetPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoSubText}>REDEFINIR SENHA</Text>
      </View>

      {/* Instruction Text */}
      <Text style={styles.instructionText}>
        Informe o e-mail para o qual deseja redefinir sua senha
      </Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Image 
          source={require('../../assets/images/e-mail.png')}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#256489"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Continuar</Text>
      </TouchableOpacity>

      {/* Back to Login Link */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar ao Login</Text>
      </TouchableOpacity>
    </View>
  );
};