import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import { styles } from './style';
import { FaEnvelope, FaLock } from 'react-icons/fa'; 
import { login, Token, UserAuth } from '../../api/auth/login/login';
import { GLOBAL_VAR } from '../../api/config/globalVar';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../routes/AppRoute';

const ClientLogin = () => {
  const { navigate } = useNavigation<NavigationProps>()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const sendRequestLogin = async () =>{
      const userAuth: UserAuth={
          email:userEmail,
          password:userPassword
      }

      try{
          const token: Token = await login(userAuth)
          if(token){
              GLOBAL_VAR.TOKEN_JWT = token.token
              Alert.alert('Sucesso!', 'O login foi realizado.')
              console.log(`1 token foi criado e salvo: ${GLOBAL_VAR.TOKEN_JWT}`)
              navigate('Home')
          }
      } catch(error){
          console.error('POST request failed:', error);
          Alert.alert('Erro', 'Não foi possível fazer o login.');
      }
  }
  
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
            onChangeText={text=> setUserEmail(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            onChangeText={text=> setUserPassword(text)}
            style={styles.input}
          />
        </View>

        <TouchableOpacity onPress={()=>navigate('ResetPassword')}>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={sendRequestLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigate('ClientRegister')}>
          <Text style={styles.registerText}>
            Não possui conta? <Text style={styles.registerLink}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ClientLogin;
