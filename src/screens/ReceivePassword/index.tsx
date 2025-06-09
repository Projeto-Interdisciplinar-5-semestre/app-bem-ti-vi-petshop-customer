import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

export const ReceivePassword = ({ navigation }: { navigation: any }) => {
  const [code, setCode] = useState('');
  const [codeParts, setCodeParts] = useState(['', '', '', '', '', '']);

  const handleCodeChange = (text: string, index: number) => {
    const newCodeParts = [...codeParts];
    newCodeParts[index] = text;
    setCodeParts(newCodeParts);
    
    // Juntar todas as partes para formar o código completo
    setCode(newCodeParts.join(''));
    
    // Focar no próximo input se houver texto
    if (text && index < 5) {
      // Você precisará adicionar refs para os inputs para implementar isso
    }
  };

  const handleSubmit = () => {
    // Lógica para verificar o código
    console.log('Código enviado:', code);
    // Navegar para a tela de redefinição de senha
    // navigation.navigate('NewPassword');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />


      <Text style={styles.instructionText}>
        Informe o código que chegou ao seu e-mail para redefinir a senha
      </Text>

      <View style={styles.codeContainer}>
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
            value={codeParts[index]}
            onChangeText={(text) => handleCodeChange(text, index)}
            selectTextOnFocus
          />
        ))}
      </View>

      <TouchableOpacity 
        style={styles.continueButton}
        onPress={handleSubmit}
      >
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resendCodeButton}>
        <Text style={styles.resendCodeText}>Reenviar código</Text>
      </TouchableOpacity>
    </View>
  );
};