import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './style';

export const NowPassword = ({ navigation }: { navigation: any }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }

    // Lógica para redefinir a senha
    console.log('Nova senha definida:', newPassword);
    Alert.alert('Sucesso', 'Senha redefinida com sucesso!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.instructionText}>
        Quase lá! Defina uma nova senha e volte a acessar sua conta.
      </Text>

      <View style={styles.inputContainer}>
        <TouchableOpacity 
          style={styles.eyeIcon}
          onPress={() => setShowNewPassword(!showNewPassword)}
        >
          <Image 
            source={showNewPassword 
              ? require('../../assets/images/eye_off.png') 
              : require('../../assets/images/eye.png')}
            style={styles.eyeIconImage}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Redefina sua senha"
          placeholderTextColor="#256489"
          secureTextEntry={!showNewPassword}
          value={newPassword}
          onChangeText={setNewPassword}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity 
          style={styles.eyeIcon}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Image 
            source={showConfirmPassword 
              ? require('../../assets/images/eye_off.png') 
              : require('../../assets/images/eye.png')}
            style={styles.eyeIconImage}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          placeholderTextColor="#256489"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity 
        style={styles.confirmButton}
        onPress={handleSubmit}
      >
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('ReceivePassword')}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};