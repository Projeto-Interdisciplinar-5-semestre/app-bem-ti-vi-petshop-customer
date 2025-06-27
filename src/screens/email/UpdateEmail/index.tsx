import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Alert,
    ScrollView,
    SafeAreaView,
    Text,
    TouchableOpacity,
    ToastAndroid,
    TextInput,
    BackHandler,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Title } from '../../../components/Title';
import { NavigationProps } from '../../../routes/AppRoute';
import { ButtonLarge } from '../../../components/ButtonLarge';
import { Input } from '../../../components/Input';

import hardwareBackPress from '../../../utils/hardwareBackPress/hardwareBackPress';
import { CustomerId, validateTokenCustomer } from '../../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { Error } from '../../../utils/Types';
import { updateEmail } from '../../../api/customer/update/updateEmail';

import { styles } from './style';
import { ErrorModal } from '../../../components/ErrorModal';

export default function UpdateEmail() {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { email: emailUser } = route.params as { email: string };

    const [newEmail, setNewEmail] = useState<string>(emailUser);

    const [codeParts, setCodeParts] = useState(['', '', '', '', '', '']);
    const codeInputRefs = useRef<(TextInput | null)[]>([]);

    const [code, setCode] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [customerId, setCustomerId] = useState<string>('');

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            navigate("SendRequestChangeEmail", { email: newEmail });
            return true;
        });

        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        async function loadCustomerId() {
            try {
                const customerId: CustomerId | Error = await validateTokenCustomer();
                if ('code' in customerId) {
                    ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                    navigate('ClientLogin');
                } else {
                    setCustomerId(customerId.id);
                }
            } catch {
                ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                navigate('ClientLogin');
            }
        }
        loadCustomerId();
    }, [navigate]);

    const sendRequestEmail = async () => {
        try {
            const success = await updateEmail(customerId, code);
            if (typeof success === 'boolean') {
                if (success) {
                    setCode('');
                    setError('');
                    setFields([]);
                    Alert.alert('Sucesso!', 'O email foi atualizado.');
                    navigate('ClientLogin');
                }
            } else {
                setError(success.message || 'Erro desconhecido.');
                setFields(success.errorFields?.map(field => field.description) || []);
                setErrorModalVisible(true);
            }
        } catch {
            setError('Não foi possível atualizar. Verifique sua conexão.');
            setErrorModalVisible(true);
        }
    };

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

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <Title text="Trocar e-mail" />

                <View style={styles.card}>
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

                    <ErrorModal
                        visible={errorModalVisible}
                        error={error}
                        fields={fields}
                        onClose={() => setErrorModalVisible(false)}
                    />

                    <View style={styles.buttonsContainer}>
                        <ButtonLarge
                            icon={require('../../../assets/icons/edit.png')}
                            text="ATUALIZAR E-MAIL"
                            color="#006316"
                            action={sendRequestEmail}
                            disabled={code.trim().length !== 6}
                            width="100%"
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => navigate('SendRequestChangeEmail', { email: newEmail })}
                        style={styles.resendContainer}
                    >
                        <Text style={styles.resendText}>Não recebi o código</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
