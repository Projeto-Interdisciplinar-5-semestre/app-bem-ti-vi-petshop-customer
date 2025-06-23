import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView, Alert, ScrollView, ToastAndroid, Pressable } from 'react-native';

import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from '@react-navigation/native';

import { NavigationBar } from '../../components/NavigationBar';
import { Title } from '../../components/Title';

import { findById } from '../../api/pet/search/findById';
import { deleteById } from '../../api/pet/delete/deleteById';
import { update } from '../../api/pet/update/update';

import { selectImageFromGalery } from '../../utils/selectImageFromGalery/selectImageFromGalery';
import { useValidateToken } from '../../utils/UseValidateToken/UseValidateToken';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';

import { Pet } from '../../utils/Types';

import { NavigationProps } from '../../routes/AppRoute';

import {styles} from './style';

type PorteType = {
    label: string;
    value: string;
};

type GeneroType = {
    label: string;
    value: string;
};

const portes: PorteType[] = [
    { label: 'Pequeno', value: 'SMALL' },
    { label: 'Médio', value: 'MEDIUM' },
    { label: 'Grande', value: 'LARGE' },
];

const generos: GeneroType[] = [
    { label: 'Macho', value: 'MALE' },
    { label: 'Fêmea', value: 'FEMALE' },
];

export const ManagePet = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { id: petId } = route.params as { id: string };
    const [nomePet, setNomePet] = useState<string>('');
    const [racaPet, setRacaPet] = useState<string>('');
    const [dateBirth, setDateBirth] = useState<Date>(new Date());
    const [portePet, setPortePet] = useState<string>('');
    const [generoPet, setGeneroPet] = useState<string>('');
    const [notasPet, setNotasPet] = useState<string>('');
    const [especiePet, setEspeciePet] = useState<string>('');
    const [imagemPet, setImagemPet] = useState<string>('');

    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);

    useValidateToken();

    hardwareBackPress(navigate, "SearchPet");

    useEffect(() => {
        const buscarPets = async () => {
            if (!petId) return
            try {
                const data = await findById(petId);

                if ('code' in data) {
                    setError(data.message);
                    return;
                }

                setNomePet(data.name)
                setRacaPet(data.race)
                setDateBirth(new Date(data.birthDate))
                setEspeciePet(data.species)
                setPortePet(data.size)
                setGeneroPet(data.gender)
                setNotasPet(data.details)
                setImagemPet(data.pathImage)
            } catch (erro) {
                setError('Erro ao buscar dados. Verifique sua conexão.');
            }
        };

        buscarPets();
    }, [petId]);

        const formatDateTime = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hour = String(date.getHours()).padStart(2, '0');
        const minute = String(date.getMinutes()).padStart(2, '0');
        const second = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
    };

    const handleUpdate = async () => {

        const pet = {
            name: nomePet,
            race: racaPet,
            birthDate: formatDateTime(dateBirth),
            size: portePet,
            gender: generoPet,
            details: notasPet,
            species: especiePet,
        } as Pet;

        try {
            const success = await update(pet, imagemPet, petId);

            if ('code' in success) {
                setError(success.message);
                setFields(success.errorFields?.map(field => field.description) || []);
                return;
            }
            
            if (success instanceof Boolean) {

                ToastAndroid.show('Pet atualizado!', ToastAndroid.SHORT);
                navigate("SearchPet");
            }

        } catch (error) {
            setError('Não foi possível atualizar. Verifique sua conexão.');
        }
    };

    const handleDelete = async () => {
        Alert.alert(
            "Confirmação",
            "Tem certeza que deseja excluir este pet?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: () => confirmDelete(petId),
                },
            ]
        );
    };

    const confirmDelete = async (petId: string) => {
        try {
            const success = await deleteById(petId);

            if (success) {
                ToastAndroid.show('Pet excluido!', ToastAndroid.SHORT);
                navigate("SearchPet");
            }
        } catch (error) {
            setError('Não foi possível excluir. Verifique sua conexão.');
        }
    };

    const selecionarImagem = async () => {
        const imageSelected = await selectImageFromGalery();
        if (imageSelected) {
            setImagemPet(imageSelected);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <Title text="Atualize seu pet" />


                {imagemPet && (
                    <View style={styles.imagePreviewContainer}>
                        <Image
                            source={{ uri: imagemPet }}
                            style={styles.imagePreview}
                        />
                    </View>
                )}

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite o nome"
                        placeholderTextColor="#999"
                        value={nomePet}
                        onChangeText={setNomePet}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Espécie</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite a espécie aqui"
                        placeholderTextColor="#999"
                        value={especiePet}
                        onChangeText={setEspeciePet}
                    />
                </View>

                <InputDate
                    label='Data de nascimento'
                    moment={dateBirth}
                    setMoment={setDateBirth}
                />

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Imagem</Text>
                    <TouchableOpacity
                        style={[
                            styles.imagePicker,
                            imagemPet ? styles.imagePickerActive : null
                        ]}
                        onPress={selecionarImagem}
                    >
                        <Text style={[
                            styles.imagePickerText,
                            imagemPet ? styles.imagePickerTextActive : null
                        ]}>
                            {imagemPet ? 'Imagem selecionada (clique para alterar)' : 'Selecione uma imagem'}
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.porteGroup}>
                    <Text style={styles.label}>Porte</Text>
                    <View style={styles.porteContainer}>
                        {portes.map((item) => (
                            <TouchableOpacity
                                key={item.value}
                                style={[
                                    styles.porteButton,
                                    portePet === item.value && styles.porteButtonActive
                                ]}
                                onPress={() => setPortePet(item.value)}
                            >
                                <View style={styles.porteRadio}>
                                    {portePet === item.value && <View style={styles.porteRadioSelected} />}
                                </View>
                                <Text style={styles.porteLabel}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.generoGroup}>
                    <Text style={styles.label}>Gênero</Text>
                    <View style={styles.generoContainer}>
                        {generos.map((item) => (
                            <TouchableOpacity
                                key={item.value}
                                style={[
                                    styles.generoButton,
                                    generoPet === item.value && styles.generoButtonActive
                                ]}
                                onPress={() => setGeneroPet(item.value)}
                            >
                                <View style={styles.generoRadio}>
                                    {generoPet === item.value && <View style={styles.generoRadioSelected} />}
                                </View>
                                <Text style={styles.generoLabel}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Raça (Opcional)</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite a raça"
                        placeholderTextColor="#999"
                        value={racaPet}
                        onChangeText={setRacaPet}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Notas/Observações (Opcional)</Text>
                    <TextInput
                        style={[styles.inputField, styles.multilineInput]}
                        placeholder="Digite alguma observação sobre o pet"
                        placeholderTextColor="#999"
                        multiline
                        numberOfLines={4}
                        value={notasPet}
                        onChangeText={setNotasPet}
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

                <View style={styles.submitButtonsContainer}>
                    <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                        <Text style={styles.submitButtonText}>DELETAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.submitButton} onPress={handleUpdate}>
                        <Text style={styles.submitButtonText}>ATUALIZAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <NavigationBar initialTab='perfil' />
        </SafeAreaView>
    );
};

export type InputProps = {
    label: string;
    moment: Date;
    setMoment: Dispatch<SetStateAction<Date>>;
};

export const InputDate = ({ label, moment, setMoment }: InputProps) => {
    const [showPicker, setShowPicker] = useState<boolean>(false);

    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleChange = (event: any, selectedDate?: Date) => {
        setShowPicker(false);
        if (selectedDate) setMoment(selectedDate);
    };

    return (
        <View style={styles.formGroup}>
            <Text style={styles.label}>{label}</Text>
            <Pressable onPress={() => setShowPicker(true)}>
                <View style={styles.inputField}>
                    <Text style={{ color: "#333", fontSize: 14 }}>
                        {formatDate(moment)}
                    </Text>
                </View>
            </Pressable>

            {showPicker && (
                <DateTimePicker
                    value={moment}
                    mode="date"
                    display="default"
                    onChange={handleChange}
                />
            )}
        </View>
    );
};