import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, Alert, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationBar } from '../../components/NavigationBar';
import { CustomerId, validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { GLOBAL_VAR } from '../../api/config/globalVar';
import { findById } from '../../api/customer/search/findById';

import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { Customer, Error } from '../../utils/Types';
import { NavigationProps } from "../../routes/AppRoute";

import { styles } from './style';

const logoutRequest = (navigate: any) => {
    Alert.alert(
        'Confirmação',
        'Tem certeza que deseja sair?',
        [
            { text: 'Cancelar', style: 'cancel' },
            {
                text: 'Sair',
                style: 'destructive',
                onPress: () => {
                    GLOBAL_VAR.TOKEN_JWT = "";
                    navigate("ClientLogin");
                },
            },
        ]
    );
};

export const ShowProfile = () => {
    const { navigate } = useNavigation<NavigationProps>();

    const [customerId, setCustomerId] = useState('');
    const [name, setName] = useState<string>('');
    const [photoProfile, setPhotoProfile] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [emailIsActive, setEmailIsActive] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    hardwareBackPress(navigate, "Home");

    useEffect(() => {
        const loadCustomerData = async () => {
            try {
                const customerIdResult: CustomerId | Error = await validateTokenCustomer();

                if ('code' in customerIdResult) {
                    ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                    navigate("ClientLogin");
                    return;
                }
                setCustomerId(customerIdResult.id);

                const customer: Customer | Error = await findById(customerIdResult.id);

                if ('code' in customer) {
                    ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                    navigate("ClientLogin");
                    return;
                }

                setName(customer.name);
                setPhotoProfile(customer.pathImage);
                setEmail(customer.email);
                setEmailIsActive(customer.isEmailActive);
            } catch {
                ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                navigate("ClientLogin");
            }
        };

        loadCustomerData();
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <View style={styles.profileSection}>
                    {photoProfile ? (
                        <Image source={{ uri: photoProfile }} style={styles.profileImage} />
                    ) : (
                        <View style={styles.profileImagePlaceholder}>
                            <Text>Sem Foto</Text>
                        </View>
                    )}
                    <Text style={styles.profileLabel}>{name}</Text>
                    {emailIsActive ? (
                        <Text style={styles.confirmText}>Seu e-mail está confirmado!</Text>
                    ) : (
                        <Text style={styles.warningText}>Você ainda não confirmou o e-mail!</Text>
                    )}
                </View>

                <View style={styles.profileCard}>
                    <View style={styles.menuContainer}>
                        {!emailIsActive && (
                            <ItemProfile
                                label="Confirmar e-mail"
                                icon="email-check-outline"
                                onPress={() => navigate("SendRequestConfirmationEmail", { email })}
                            />
                        )}

                        <ItemProfile
                            icon="eye"
                            label="Ver Meus Dados"
                            onPress={() => navigate("CustomerScreen", { id: customerId })}
                        />

                        <ItemProfile
                            icon="account-edit"
                            label="Editar Perfil"
                            onPress={() => navigate('UpdateProfile')}
                        />

                        <ItemProfile
                            label="Alterar senha"
                            icon="lock-reset"
                            onPress={() => navigate("UpdatePassword")}
                        />

                        <ItemProfile
                            label="Alterar e-mail"
                            icon="email-edit-outline"
                            onPress={() => navigate("SendRequestChangeEmail", { email })}
                        />

                        <ItemProfile
                            icon="dog"
                            label="Pets Cadastrados"
                            onPress={() => navigate('SearchPet')}
                        />

                        <ItemProfile
                            icon="clipboard-list"
                            label="Ver meus pedidos"
                            onPress={() => navigate('SearchOrder')}
                        />

                        <ItemProfile
                            icon="calendar-check"
                            label="Ver meus agendamentos"
                            onPress={() => navigate('SearchAppointment')}
                        />

                        <ItemProfile
                            label="Excluir conta"
                            icon="account-remove-outline"
                            onPress={() => navigate("DeleteProfile")}
                        />

                        <ItemProfile
                            label="Chat"
                            icon="account-remove-outline"
                            onPress={() => navigate("ChatCustomer", {id: customerId, name: name})}
                        />
                    </View>

                    <TouchableOpacity style={styles.logoutButton} onPress={() => logoutRequest(navigate)}>
                        <Icon name="logout" size={24} color="#fff" style={styles.logoutIcon} />
                        <Text style={styles.logoutText}>Deslogar Perfil</Text>
                    </TouchableOpacity>
                </View>

                {error.length > 0 && (
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{error}</Text>
                )}
            </ScrollView>

            <NavigationBar initialTab='perfil' />
        </SafeAreaView>
    );
};

type ItemProfileProps = {
    icon: string;
    label: string;
    onPress: () => void;
};

const ItemProfile = ({ label, icon, onPress }: ItemProfileProps) => (
    <TouchableOpacity
        style={styles.menuItem}
        activeOpacity={0.7}
        onPress={onPress}
    >
        <Icon name={icon} size={24} color="#256489" style={styles.menuItemIcon} />
        <Text style={styles.menuItemText}>{label}</Text>
    </TouchableOpacity>
);
