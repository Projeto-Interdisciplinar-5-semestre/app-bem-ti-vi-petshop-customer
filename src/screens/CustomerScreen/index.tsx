import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { useNavigation, useRoute } from '@react-navigation/native';

import { NavigationBar } from '../../components/NavigationBar';

import { NavigationProps } from '../../routes/AppRoute';

import { Customer } from '../../utils/Types';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';

import { findById } from '../../api/customer/search/findById';

import { styles } from './style';

export default function CustomerScreen() {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { id: customerId } = route.params as { id: string };

    const [client, setClient] = useState<Customer>({} as Customer);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    hardwareBackPress(navigate, "ShowProfile");
    

    const loadData = async () => {
        setLoading(true);
        try {
            const clientResult = await findById(customerId);
            if ('code' in clientResult) {
                setError(clientResult.message);
                return;
            }
            setClient(clientResult);
        } catch (error) {
            setError('Erro ao carregar serviço. Verifique a conexão.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    if (loading) {
        return (
            <View style={[styles.safeArea, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    return (
        <View style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.profileSection}>
                    <Image
                        source={{uri: client.pathImage}}
                        style={styles.profileImage}
                    />
                    <Text style={styles.clientName}>{client.name}</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
                    </View>

                    <View style={styles.fieldContainer}>
                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Nome completo</Text>
                            <Text style={styles.value}>{client.name}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Email</Text>
                            <Text style={styles.value}>{client.email}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Telefone principal</Text>
                            <Text style={styles.value}>{client.telephones.phoneOne}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Telefone secundário</Text>
                            <Text style={styles.value}>{client.telephones.phoneTwo}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Data de nascimento</Text>
                            <Text style={styles.value}>{new Date(client.birthDate).toLocaleString('pt-BR')}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Conta criada em</Text>
                            <Text style={styles.value}>{new Date(client.activationStatus.creationDate).toLocaleString('pt-BR')}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Endereço</Text>
                    </View>

                    <View style={styles.fieldContainer}>
                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>CEP</Text>
                            <Text style={styles.value}>{client.address.postalCode}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Estado</Text>
                            <Text style={styles.value}>{client.address.state}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Cidade</Text>
                            <Text style={styles.value}>{client.address.city}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Bairro</Text>
                            <Text style={styles.value}>{client.address.neighborhood}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Endereço</Text>
                            <Text style={styles.value}>{client.address.street}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Número</Text>
                            <Text style={styles.value}>{client.address.number}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.label}>Complemento</Text>
                            <Text style={styles.value}>{client.address.complement}</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

            <NavigationBar initialTab='perfil' />
        </View>
    );
};
