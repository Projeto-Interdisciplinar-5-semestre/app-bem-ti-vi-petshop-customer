import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView, SafeAreaView, Text, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavigationProps } from '../../routes/AppRoute';
import { Title } from '../../components/Title';
import { ButtonLarge } from '../../components/ButtonLarge';
import { styles } from './style';

import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { Error } from '../../utils/Types';
import { CustomerId, validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { deleteById } from '../../api/customer/delete/deleteById';
import { InputPassword } from '../../components/InputPassword';

export default function DeleteProfile() {
    const { navigate } = useNavigation<NavigationProps>();

    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [customerId, setCustomerId] = useState<string>('');

    hardwareBackPress(navigate, "ShowProfile");

    useEffect(() => {
        async function loadCustomerId() {
            try {
                const customerId: CustomerId | Error = await validateTokenCustomer();
                if ("code" in customerId) {
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

    const toggleShowPassword = () => setShowPassword(!showPassword);

    const confirmDelete = async () => {
        try {
            const success: boolean | Error = await deleteById(customerId, password);

            if (typeof success === "boolean") {
                if (success) {
                    Alert.alert('Sucesso!', 'A sua conta foi excluída.');
                    navigate('ClientLogin');
                }
            } else {
                setError(success.message || "Erro desconhecido.");
                setFields(success.errorFields?.map(field => field.description) || []);
            }
        } catch (error) {
            ToastAndroid.show('Não foi possível deletar. Verifique sua conexão.', ToastAndroid.SHORT);
        }
    };

    const sendRequestDelete = async () => {
        Alert.alert(
            'Atenção!',
            'Tem certeza que deseja excluir sua conta?\n\nEssa ação não poderá ser desfeita.',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    style: 'destructive',
                    onPress: confirmDelete,
                },
            ]
        );
    };
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Title text="Excluir Conta" />

                <View style={styles.card}>
                    <Text style={styles.description}>
                        Digite sua senha para confirmar a exclusão da sua conta. Essa ação é irreversível.
                    </Text>

                    <InputPassword
                        placeholder="Digite sua senha"
                        toggleShowPassword={toggleShowPassword}
                        showPassword={showPassword}
                        password={password}
                        setPassword={setPassword}
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
                            icon={require('../../assets/icons/delete.png')}
                            text="DELETAR CONTA"
                            color="#eb1717"
                            width="100%"
                            action={sendRequestDelete}
                            disabled={!customerId}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}
