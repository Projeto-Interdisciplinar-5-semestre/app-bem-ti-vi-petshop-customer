import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, BackHandler, ToastAndroid, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GLOBAL_VAR } from '../../api/config/globalVar';
import { login, UserAuth } from '../../api/auth/login/login';

import { NavigationProps } from '../../routes/AppRoute';

import { styles } from './style';
import { ErrorModal } from '../../components/ErrorModal';

export const ClientLogin = () => {
    const { replace, navigate } = useNavigation<NavigationProps>();

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [counter, setCounter] = useState<number>(0);
    const [errorModalVisible, setErrorModalVisible] = useState(false);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            setCounter(prev => {
                const newCount = prev + 1;
                if (newCount >= 2) {
                    BackHandler.exitApp();
                    return 0;
                } else {
                    ToastAndroid.show('Pressione novamente para sair', ToastAndroid.SHORT);
                }
                return newCount;
            });
            return true;
        });

        return () => backHandler.remove();
    }, []);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const sendRequestLogin = async () => {
        const userAuth: UserAuth = {
            email: userEmail,
            password: userPassword,
        };

        try {
            const response = await login(userAuth);

            if ('token' in response) {
                GLOBAL_VAR.TOKEN_JWT = response.token;
                setUserEmail('');
                setUserPassword('');
                setError('');
                replace('Home');
            } else {
                setError(response.message);
                setErrorModalVisible(true);
            }
        } catch (error) {
            setError('Erro ao tentar logar. Verifique sua conexão.');
            setErrorModalVisible(true);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.loginTitle}>LOGIN</Text>

                <View style={styles.inputContainer}>
                    <Image
                        source={require('../../assets/icons/email.png')}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Insira seu e-mail"
                        placeholderTextColor="#1B3B6F"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={userEmail}
                        onChangeText={setUserEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={toggleShowPassword}>
                        <Image
                            source={showPassword
                                ? require('../../assets/icons/open_eye.png')
                                : require('../../assets/icons/close_eye.png')}
                            style={styles.inputIcon}
                        />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira sua senha"
                        placeholderTextColor="#1B3B6F"
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                        value={userPassword}
                        onChangeText={setUserPassword}
                    />
                </View>

                <ErrorModal
                    visible={errorModalVisible}
                    error={error}
                    onClose={() => setErrorModalVisible(false)}
                />

                <TouchableOpacity onPress={() => navigate('ResetPassword', {email: userEmail})}>
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={sendRequestLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('ClientRegister')}>
                    <Text style={styles.registerText}>
                        Não possui conta? <Text style={styles.registerLink}>Cadastre-se</Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
