import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Alert, TextInput, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { NavigationBar } from '../../components/NavigationBar';

import { NavigationProps } from '../../routes/AppRoute';

import { Error, Pet } from '../../utils/Types';

import { styles } from './style';
import { findByCustomer } from '../../api/pet/search/findByCustomer';
import { PaginationControls } from '../../components/PaginationControls';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { CustomerId, validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { Title } from '../../components/Title';
import { ErrorModal } from '../../components/ErrorModal';

export const SearchPet = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const [searchText, setSearchText] = useState('');
    const [pets, setPets] = useState<Pet[]>();
    const [error, setError] = useState<string>('');
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [customerId, setCustomerId] = useState<string>('');
    
    hardwareBackPress(navigate, "ShowProfile");

    useEffect(() => {
        async function loadCustomerId() {
            try {
                const customerId: CustomerId | Error = await validateTokenCustomer();
                if ('code' in customerId) {
                    navigate("ClientLogin");
                    Alert.alert("Atenção!", "Você foi deslogado!");
                } else {
                    setCustomerId(customerId.id);
                }
            } catch (error) {
                setError('Não foi possível atualizar. Verifique sua conexão.');
                setErrorModalVisible(true);
                navigate("ClientLogin");
            }
        }
        loadCustomerId();
    }, []);

    useEffect(() => {
        const buscarPets = async () => {
            if (!customerId) return
            try {
                const data = await findByCustomer(pageIndex, customerId);
                if ('code' in data) {
                    setError(data.message);
                    setErrorModalVisible(true);
                    return;
                }
                setPets(data.content)
            } catch (erro) {
                setError('Não foi possível atualizar. Verifique sua conexão.');
                setErrorModalVisible(true);
            }
        };

        buscarPets();
    }, [customerId]);

    const filteredPets = pets?.filter(pet =>
        pet.name.toLowerCase().includes(searchText.toLowerCase()) ||
        pet.species.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.safeArea}>

            <ScrollView>

                <Title text='Seus pets cadastrados' />

                <TouchableOpacity style={styles.cadastrarButton} onPress={() => navigate('CreatePet', { id: customerId })}>
                    <Image
                        source={require('../../assets/images/adicionar.png')}
                        style={styles.cadastrarButtonIcon}
                    />
                    <Text style={styles.cadastrarButtonText}>CADASTRAR</Text>
                </TouchableOpacity>

                <View style={styles.searchContainer}>
                    <Image
                        source={require('../../assets/images/busca.png')}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Pesquisar pet"
                        placeholderTextColor="#999"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>

                <View style={styles.petsContainer}>
                    {filteredPets?.map((pet) => (
                        <View key={pet.id} style={styles.petCard}>
                            <View style={styles.petContent}>
                                <ImageBackground
                                    source={{ uri: pet.pathImage }}
                                    style={styles.petImage}
                                    imageStyle={styles.petImageStyle}
                                >
                                    <View style={styles.imageOverlay} />
                                </ImageBackground>

                                <View style={styles.petInfo}>
                                    <Text style={styles.petLabel}>Nome</Text>
                                    <Text style={styles.petValue} numberOfLines={1} ellipsizeMode="tail">{pet.name}</Text>

                                    <Text style={styles.petLabel}>Espécie</Text>
                                    <Text style={styles.petValue} numberOfLines={1} ellipsizeMode="tail">{pet.species}</Text>
                                </View>
                            </View>

                            <View style={styles.petActions}>
                                <TouchableOpacity style={styles.actionButton}>
                                    <Image
                                        source={require('../../assets/images/olhos.png')}
                                        style={styles.actionIcon}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.actionButton} onPress={() => navigate('ManagePet', { id: pet.id })}>
                                    <Image
                                        source={require('../../assets/images/configuracao.png')}
                                        style={styles.actionIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
                <ErrorModal
                    visible={errorModalVisible}
                    error={error}
                    onClose={() => setErrorModalVisible(false)}
                />
            </ScrollView>
            <PaginationControls
                pageIndex={pageIndex}
                totalPages={totalPages}
                onNext={() => setPageIndex(prev => prev + 1)}
                onPrev={() => setPageIndex(prev => prev - 1)}
            />
            <NavigationBar initialTab='perfil' />
        </View>
    );
};
