import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { styles } from './style';
import { FaEnvelope, FaLock } from 'react-icons/fa'; 

const ClientLogin = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
           resizeMode="contain"
          />



        <Text style={styles.loginTitle}>LOGIN</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Não possui conta? <Text style={styles.registerLink}>Cadastre-se</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ClientLogin;
