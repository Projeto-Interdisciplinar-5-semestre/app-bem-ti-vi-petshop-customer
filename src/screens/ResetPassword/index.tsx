import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ToastAndroid } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';

import { sendRequestRetrievePassword } from '../../api/customer/update/sendRequestRetrievePassword';

import { NavigationProps } from '../../routes/AppRoute';

import { styles } from './styles';
import { ErrorModal } from '../../components/ErrorModal';

export const ResetPassword = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { email: emailUser } = route.params as { email: string };

    const [email, setEmail] = useState(emailUser);
    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [errorModalVisible, setErrorModalVisible] = useState(false);

    hardwareBackPress(navigate, 'ClientLogin');

    const sendRequestCreate = async () => {
        try {
            const success = await sendRequestRetrievePassword(email);
            if (typeof success === "boolean") {
                if (success) {
                    setError('');
                    setFields([]);
                    ToastAndroid.show('O código enviado no e-mail!', ToastAndroid.SHORT);
                    navigate("NowPassword", {email: email});
                }
            } else {
                setError(success.message || "Erro desconhecido.");

                setFields(success.errorFields?.map(field => field.description) || []);
                setErrorModalVisible(true);
            }
        } catch (error) {
            setError('Não foi possível realizar está solicitação. Verifique sua conexão.');
            setErrorModalVisible(true);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.instructionText}>
                Informe o e-mail para o qual deseja redefinir sua senha
            </Text>

            <View style={styles.inputContainer}>
                <Image
                    source={require('../../assets/icons/email.png')}
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

            <ErrorModal
                visible={errorModalVisible}
                error={error}
                fields={fields}
                onClose={() => setErrorModalVisible(false)}
            />

            <TouchableOpacity style={styles.loginButton} onPress={sendRequestCreate} >
                <Text style={styles.loginButtonText}>Continuar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={() => navigate("ClientLogin")}>
                <Text style={styles.backButtonText}>Voltar ao Login</Text>
            </TouchableOpacity>
        </View>
    );
};