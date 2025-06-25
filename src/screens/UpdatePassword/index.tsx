import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
    View,
    Alert,
    ScrollView,
    SafeAreaView,
    Text,
    ToastAndroid,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Title } from '../../components/Title';
import { NavigationProps } from '../../routes/AppRoute';

import { styles } from './style';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { CustomerId, validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { Error, Passwords } from '../../utils/Types';
import { updatePassword } from '../../api/customer/update/updatePassword';
import { ButtonLarge } from '../../components/ButtonLarge';

export default function UpdatePassword() {
    const { navigate } = useNavigation<NavigationProps>();

    const [passwordOld, setPasswordOld] = useState<string>('');
    const [passwordNew, setPasswordNew] = useState<string>('');
    const [showPasswordOld, setShowPasswordOld] = useState(false);
    const [showPasswordNew, setShowPasswordNew] = useState(false);
    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [customerId, setCustomerId] = useState<string>('');

    hardwareBackPress(navigate, 'ShowProfile');

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
            } catch (error) {
                ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                navigate('ClientLogin');
            }
        }
        loadCustomerId();
    }, []);

    const toggleShowPasswordOld = () => setShowPasswordOld(!showPasswordOld);
    const toggleShowPasswordNew = () => setShowPasswordNew(!showPasswordNew);

    const sendRequestCreate = async () => {
        if (!customerId) {
            Alert.alert('Erro', 'Administrador não carregado ainda.');
            return;
        }

        const passwords: Passwords = {
            passwordOld,
            passwordNew,
        };

        try {
            const result = await updatePassword(customerId, passwords);

            if (typeof result === 'boolean') {
                if (result) {
                    setPasswordOld('');
                    setPasswordNew('');
                    setError('');
                    setFields([]);
                    Alert.alert('Sucesso!', 'A senha foi atualizada.');
                    navigate('ShowProfile');
                }
            } else {
                setError(result.message || 'Erro desconhecido.');
                setFields(result.errorFields?.map(field => field.description) || []);
            }
        } catch (error) {
            setError('Não foi possível atualizar. Verifique sua conexão.');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <Title text="Atualizar senha" />

                <View style={styles.formContainer}>
                    <InputPassword
                        placeholder="Digite sua senha atual"
                        toggleShowPassword={toggleShowPasswordOld}
                        showPassword={showPasswordOld}
                        password={passwordOld}
                        setPassword={setPasswordOld}
                    />

                    <InputPassword
                        placeholder="Digite sua nova senha"
                        toggleShowPassword={toggleShowPasswordNew}
                        showPassword={showPasswordNew}
                        password={passwordNew}
                        setPassword={setPasswordNew}
                    />
                </View>

                <View style={styles.buttonsContainer}>
                    <ButtonLarge
                        icon={require('../../assets/icons/edit.png')}
                        text="ATUALIZAR SENHA"
                        color="#256489"
                        width="70%"
                        action={sendRequestCreate}
                        disabled={!customerId}
                    />
                </View>

                {error ? (
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <Text style={{ color: 'red', fontSize: 14, marginBottom: 4, textAlign: 'center' }}>
                            {error}
                        </Text>
                        {fields.map((field, index) => (
                            <Text
                                key={index}
                                style={{
                                    color: 'red',
                                    fontSize: 13,
                                    textAlign: 'center',
                                }}
                            >
                                • {field}
                            </Text>
                        ))}
                    </View>
                ) : null}
            </ScrollView>
        </SafeAreaView>
    );
}

type InputPasswordProps = {
    showPassword: boolean;
    toggleShowPassword: () => void;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    placeholder: string;
};

const InputPassword = ({
    showPassword,
    toggleShowPassword,
    password,
    setPassword,
    placeholder,
}: InputPasswordProps) => {
    return (
        <View style={{
            ...styles.inputContainer,
            backgroundColor: '#f2f2f2',
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            paddingHorizontal: 10,
        }}>
            <TextInput
                style={{
                    flex: 1,
                    fontSize: 16,
                    paddingVertical: 10,
                    color: '#333',
                }}
                placeholder={placeholder}
                placeholderTextColor="#999"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={toggleShowPassword} style={{ marginLeft: 10 }}>
                <Image
                    source={
                        showPassword
                            ? require('../../assets/icons/open_eye.png')
                            : require('../../assets/icons/close_eye.png')
                    }
                    style={{ width: 22, height: 22, tintColor: '#256489' }}
                />
            </TouchableOpacity>
        </View>
    );
};
