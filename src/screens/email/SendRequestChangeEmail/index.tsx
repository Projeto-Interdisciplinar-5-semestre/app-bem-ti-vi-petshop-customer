import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, ToastAndroid } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Title } from '../../../components/Title';
import { NavigationProps } from '../../../routes/AppRoute';
import { ButtonLarge } from '../../../components/ButtonLarge';
import { Input } from '../../../components/Input';

import hardwareBackPress from '../../../utils/hardwareBackPress/hardwareBackPress';

import { styles } from './style';
import { CustomerId, validateTokenCustomer } from '../../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { Error } from '../../../utils/Types';
import { sendRequestEmail } from '../../../api/customer/update/sendRequestEmail';

export default function SendRequestChangeEmail() {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { email: emailUser } = route.params as { email: string };

    const [newEmail, setNewEmail] = useState<string>("");

    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [customerId, setCustomerId] = useState<string>('');

    hardwareBackPress(navigate, "ShowProfile");

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
            } catch {
                ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                navigate("ClientLogin");
            }
        }
        loadCustomerId();
    }, [navigate]);

    const sendRequestCreate = async () => {
        try {
            const success = await sendRequestEmail(customerId, newEmail);
            if (typeof success === "boolean") {
                if (success) {
                    setNewEmail(emailUser);
                    setError('');
                    setFields([]);
                    navigate("UpdateEmail", { email: newEmail });
                }
            } else {
                setError(success.message || "Erro desconhecido.");
                setFields(success.errorFields?.map(field => field.description) || []);
            }
        } catch {
            setError('Não foi possível atualizar. Verifique sua conexão.');
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
                    <Input
                        label="Novo e-mail"
                        placeholder="Insira o novo e-mail"
                        keyboardType="email-address"
                        value={newEmail}
                        onChangeText={setNewEmail}
                    />

                    {error ? (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>{error}</Text>
                            {fields.map((field, index) => (
                                <Text key={index} style={styles.errorText}>• {field}</Text>
                            ))}
                        </View>
                    ) : null}

                    <View style={styles.buttonsContainer}>
                        <ButtonLarge
                            icon={require('../../../assets/icons/send.png')}
                            text="ENVIAR SOLICITAÇÃO"
                            color="#256489"
                            width="100%"
                            action={sendRequestCreate}
                            disabled={!newEmail.trim()}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
