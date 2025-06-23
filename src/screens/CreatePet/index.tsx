import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView, ScrollView, ToastAndroid, Pressable } from 'react-native';

import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from '@react-navigation/native';

import { NavigationBar } from '../../components/NavigationBar';
import { Title } from '../../components/Title';

import { selectImageFromGalery } from '../../utils/selectImageFromGalery/selectImageFromGalery';
import { useValidateToken } from '../../utils/UseValidateToken/UseValidateToken';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';

import { Pet } from '../../utils/Types';

import { NavigationProps } from '../../routes/AppRoute';

import { styles } from './style';
import { create } from '../../api/pet/create/create';


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

export const CreatePet = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { id: customerId } = route.params as { id: string };
    const [nomePet, setNomePet] = useState<string>('');
    const [racaPet, setRacaPet] = useState<string>('');
    const [dateBirth, setDateBirth] = useState<Date>(new Date());
    const [portePet, setPortePet] = useState<string>('SMALL');
    const [generoPet, setGeneroPet] = useState<string>('MALE');
    const [notasPet, setNotasPet] = useState<string>('');
    const [especiePet, setEspeciePet] = useState<string>('');
    const [imagemPet, setImagemPet] = useState<string>('');

    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);

    useValidateToken();

    hardwareBackPress(navigate, "SearchPet");

    const selecionarImagem = async () => {
        const imageSelected = await selectImageFromGalery();
        if (imageSelected) {
            setImagemPet(imageSelected);
        }
    };

    const formatDateTime = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hour = String(date.getHours()).padStart(2, '0');
        const minute = String(date.getMinutes()).padStart(2, '0');
        const second = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day}T${hour}:${minute}:${second}Z`;
    };

    const sendRequestCreate = async () => {
        const pet = {
            name: nomePet,
            race: racaPet,
            owner: { id: customerId },
            birthDate: formatDateTime(dateBirth),
            gender: generoPet,
            details: notasPet,
            size: portePet,
            species: especiePet,
        } as Pet;

        try {
            const success = await create(pet, imagemPet);

            if ('code' in success) {
                setError(success.message);
                setFields(success.errorFields?.map(field => field.description) || []);
                return;
            }

            if (success instanceof Boolean) {
                setNomePet('');
                setRacaPet('');
                setDateBirth(new Date());
                setPortePet('SMALL');
                setGeneroPet('MALE');
                setNotasPet('');
                setEspeciePet('');
                setImagemPet('');
                ToastAndroid.show('Pet cadastrado!', ToastAndroid.SHORT);
                navigate("SearchPet");
            }
        } catch (error) {
            setError('Não foi possível cadastrar. Verifique sua conexão.');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>

                <Title text="Adicione um pet" />

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
                        placeholder="Digite o nome aqui"
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
                    <Text style={styles.label}>Sexo</Text>
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
                        placeholder="Digite a raça aqui"
                        placeholderTextColor="#999"
                        value={racaPet}
                        onChangeText={setRacaPet}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Notas/Observações (opcional)</Text>
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
                <View style={styles.submitButtonWrapper}>
                    <TouchableOpacity style={styles.submitButton} onPress={sendRequestCreate}>
                        <Text style={styles.submitButtonText}>SALVAR</Text>
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