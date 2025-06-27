import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView, SafeAreaView, Text, TouchableOpacity, ToastAndroid } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Title } from '../../../components/Title';

import { NavigationProps } from '../../../routes/AppRoute';

import { styles } from './style';
import { ButtonLarge } from '../../../components/ButtonLarge';
import hardwareBackPress from '../../../utils/hardwareBackPress/hardwareBackPress';
import { CustomerId, validateTokenCustomer } from '../../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { Error } from '../../../utils/Types';
import { updateConfirmationEmail } from '../../../api/customer/update/updateConfirmation';
import { Input } from '../../../components/Input';
import { ErrorModal } from '../../../components/ErrorModal';

export default function ConfirmationEmail() {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { email: emailUser } = route.params as { email: string };

    const [code, setCode] = useState<string>('');

    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [customerId, setCustomerId] = useState<string>('');

    hardwareBackPress(navigate, "SendRequestConfirmationEmail");

    useEffect(() => {
        async function loadCustomerId() {
            try {
                const customerId: CustomerId | Error = await validateTokenCustomer();
                if ('code' in customerId) {
                    ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                    navigate("ClientLogin");
                } else {
                    setCustomerId(customerId.id);
                }
            } catch (error) {
                ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                navigate("ClientLogin");
            }
        }
        loadCustomerId();
    }, []);

    const sendRequestEmail = async () => {
        try {
            const success = await updateConfirmationEmail(customerId, code);
            if (typeof success === "boolean") {
                if (success) {
                    setCode('');
                    setError('');
                    setFields([]);
                    Alert.alert('Sucesso!', 'O email foi confirmado!.');
                    navigate('ShowProfile');
                }
            } else {
                setError(success.message || "Erro desconhecido.");

                setFields(success.errorFields?.map(field => field.description) || []);
                setErrorModalVisible(true);
            }
        } catch (error) {
            setError('Não foi possível atualizar. Verifique sua conexão.');
            setErrorModalVisible(true);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <Title text="Confirmar e-mail" />

                <View style={styles.formContainer}>

                    <Input
                        label="Insira o código"
                        placeholder="Ex: 123456"
                        keyboardType="numeric"
                        value={code}
                        onChangeText={setCode}
                    />

                </View>

                <View style={styles.buttonsContainer}>
                    <ButtonLarge
                        icon={require('../../../assets/icons/add.png')}
                        text="CONFIRMAR E-MAIL"
                        color="#006316"
                        action={sendRequestEmail}
                    />
                </View>
                <TouchableOpacity onPress={() => navigate("SendRequestConfirmationEmail", { email: emailUser})}>
                    <Text style={styles.confirmText}>Não recebi o código</Text>
                </TouchableOpacity>
                <ErrorModal
                    visible={errorModalVisible}
                    error={error}
                    fields={fields}
                    onClose={() => setErrorModalVisible(false)}
                />
            </ScrollView>
        </SafeAreaView>
    );
}