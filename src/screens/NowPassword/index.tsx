import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { styles } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps } from '../../routes/AppRoute';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { retrievePassword } from '../../api/customer/update/retrievePassword';

export const NowPassword = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { email: emailUser } = route.params as { email: string };

    const [email, setEmail] = useState(emailUser);
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [code, setCode] = useState<string>('');
    const [codeParts, setCodeParts] = useState(['', '', '', '', '', '']);

    const codeInputRefs = useRef<(TextInput | null)[]>([]);

    hardwareBackPress(navigate, 'ClientLogin');

    const handleCodeChange = (text: string, index: number) => {
        const newCodeParts = [...codeParts];
        newCodeParts[index] = text;
        setCodeParts(newCodeParts);
        setCode(newCodeParts.join(''));

        if (text.length === 1 && index < codeParts.length - 1) {
            codeInputRefs.current[index + 1]?.focus();
        }

        if (text.length === 0 && index > 0) {
            codeInputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async () => {
        if (!newPassword || !confirmPassword || code.length < 6) {
            ToastAndroid.show('Por favor, preencha todos os campos!', ToastAndroid.SHORT);
            return;
        }

        if (newPassword !== confirmPassword) {
            ToastAndroid.show('As senhas não coincidem!', ToastAndroid.SHORT);
            return;
        }

        try {
            const success = await retrievePassword(email, code, newPassword);
            if (typeof success === 'boolean') {
                ToastAndroid.show('Senha trocada com sucesso!', ToastAndroid.SHORT);
                navigate('ClientLogin');
            } else {
                setError(success.message || 'Erro desconhecido.');
                setFields(success.errorFields?.map(field => field.description) || []);
            }
        } catch (error) {
            setError('Não foi possível realizar esta solicitação. Verifique sua conexão.');
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
                Informe o código que chegou ao seu e-mail para redefinir a senha
            </Text>

            <View style={styles.codeContainer}>
                {[0, 1, 2, 3, 4, 5].map((index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => { codeInputRefs.current[index] = ref; }}
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
                style={styles.resendCodeButton}
                onPress={() => navigate('ResetPassword', { email: emailUser })}
            >
                <Text style={styles.resendCodeText}>Reenviar código</Text>
            </TouchableOpacity>

            <Text style={styles.instructionText}>
                Defina sua nova senha.
            </Text>

            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowNewPassword(!showNewPassword)}
                >
                    <Image
                        source={
                            showNewPassword
                                ? require('../../assets/images/eye_off.png')
                                : require('../../assets/images/eye.png')
                        }
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
                        source={
                            showConfirmPassword
                                ? require('../../assets/images/eye_off.png')
                                : require('../../assets/images/eye.png')
                        }
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

            {error ? (
                <View style={{ marginVertical: 10, alignSelf: 'center' }}>
                    <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
                    {fields.map((field, index) => (
                        <Text key={index} style={{ color: 'red', textAlign: 'center' }}>• {field}</Text>
                    ))}
                </View>
            ) : null}

            <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleSubmit}
            >
                <Text style={styles.confirmButtonText}>Confirmar</Text>
            </TouchableOpacity>
        </View>
    );
};
