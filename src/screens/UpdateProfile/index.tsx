import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, Pressable, ToastAndroid} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { NavigationBar } from "../../components/NavigationBar";
import { Title } from "../../components/Title";

import { useNavigation } from "@react-navigation/native";

import { findById } from "../../api/customer/search/findById";
import { update } from "../../api/customer/update/update";
import { CustomerId, validateTokenCustomer } from "../../api/auth/validateTokenCustomer/validateTokenCustomer";

import { selectImageFromGalery } from "../../utils/selectImageFromGalery/selectImageFromGalery";
import { Address, Customer, Error, Telephones } from "../../utils/Types";
import hardwareBackPress from "../../utils/hardwareBackPress/hardwareBackPress";

import { NavigationProps } from "../../routes/AppRoute";

import { styles } from "./style";
import { ErrorModal } from "../../components/ErrorModal";

type EstadoType = {
    label: string;
    value: string;
};

const estados: EstadoType[] = [
    { label: "Acre", value: "AC" },
    { label: "Alagoas", value: "AL" },
    { label: "Amapá", value: "AP" },
    { label: "Amazonas", value: "AM" },
    { label: "Bahia", value: "BA" },
    { label: "Ceará", value: "CE" },
    { label: "Distrito Federal", value: "DF" },
    { label: "Espírito Santo", value: "ES" },
    { label: "Goiás", value: "GO" },
    { label: "Maranhão", value: "MA" },
    { label: "Mato Grosso", value: "MT" },
    { label: "Mato Grosso do Sul", value: "MS" },
    { label: "Minas Gerais", value: "MG" },
    { label: "Pará", value: "PA" },
    { label: "Paraíba", value: "PB" },
    { label: "Paraná", value: "PR" },
    { label: "Pernambuco", value: "PE" },
    { label: "Piauí", value: "PI" },
    { label: "Rio de Janeiro", value: "RJ" },
    { label: "Rio Grande do Norte", value: "RN" },
    { label: "Rio Grande do Sul", value: "RS" },
    { label: "Rondônia", value: "RO" },
    { label: "Roraima", value: "RR" },
    { label: "Santa Catarina", value: "SC" },
    { label: "São Paulo", value: "SP" },
    { label: "Sergipe", value: "SE" },
    { label: "Tocantins", value: "TO" },
];

export default function UpdateProfile() {
    const { navigate } = useNavigation<NavigationProps>();

    const [nome, setNome] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [state, setState] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [neighborhood, setNeighborhood] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [number, setNumber] = useState<string>('');
    const [complement, setComplement] = useState<string>('');
    const [phoneOne, setPhoneOne] = useState<string>('');
    const [phoneTwo, setPhoneTwo] = useState<string>('');
    const [imagem, setImagem] = useState<string>('');
    const [dateBirth, setDateBirth] = useState<Date>(new Date());

    const [mostrarEstados, setMostrarEstados] = useState<boolean>(false);

    const [customerId, setCustomerId] = useState<string>('');

    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [errorModalVisible, setErrorModalVisible] = useState(false);

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
            } catch (error) {
                ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                navigate("ClientLogin");
            }
        }
        loadCustomerId();
    }, []);

    const selecionarImagem = async () => {
        const imageSelected = await selectImageFromGalery();
        if (imageSelected) {
            setImagem(imageSelected);
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

    useEffect(() => {
        const buscarUsuario = async () => {
            if (!customerId) return
            try {
                const data: Customer | Error = await findById(customerId);
                if ('code' in data) {
                    throw new Error("Erro ao buscar dados do usuário");
                }

                setNome(data.name);
                setPhoneOne(data.telephones.phoneOne);
                setPhoneTwo(data.telephones.phoneTwo);
                setDateBirth(new Date(data.birthDate));
                setImagem(data.pathImage);
                setCep(data.address.postalCode);
                setState(data.address.state);
                setCity(data.address.city);
                setNeighborhood(data.address.neighborhood);
                setStreet(data.address.street);
                setNumber(data.address.number);
                setComplement(data.address.complement);

            } catch (erro) {
                setError('Erro ao buscar dados. Verifique sua conexão.');
                setErrorModalVisible(true);
            }
        };

        buscarUsuario();
    }, [customerId]);

    const handleUpdate = async () => {
        const customer = {
            name: nome,
            birthDate: formatDateTime(dateBirth),
            pathImage: imagem,
            telephones: {
                phoneOne: phoneOne,
                phoneTwo: phoneTwo,
            } as Telephones,
            address: {
                postalCode: cep,
                state: state,
                city: city,
                neighborhood: neighborhood,
                street: street,
                number: number,
                complement: complement
            } as Address,
        } as Customer;

        try {
            const success = await update(customer, imagem, customerId);

            if ('code' in success) {
                setError(success.message);
                setFields(success.errorFields?.map(field => field.description) || []);
                setErrorModalVisible(true);
                return;
            }

            ToastAndroid.show('O perfil foi atualizado!', ToastAndroid.SHORT);
            navigate("ShowProfile");
        } catch (error) {
            setError('Não foi possível atualizar. Verifique sua conexão.');
            setErrorModalVisible(true);
        }
    };

    const selecionarEstado = (estadoSelecionado: string) => {
        setState(estadoSelecionado);
        setMostrarEstados(false);
    };

    return (
        <View style={styles.safeArea}>
            <ScrollView>
                <Title text="Atualize o seu perfil" />

                {imagem && (
                    <View style={styles.imagePreviewContainer}>
                        <Image
                            source={{ uri: imagem }}
                            style={styles.imagePreview}
                        />
                    </View>
                )}

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Nome completo</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite seu nome completo"
                        placeholderTextColor="#999"
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Telefone 1</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite seu telefone"
                        placeholderTextColor="#999"
                        keyboardType="phone-pad"
                        value={phoneOne}
                        onChangeText={setPhoneOne}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Telefone 2</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite seu telefone"
                        placeholderTextColor="#999"
                        keyboardType="phone-pad"
                        value={phoneTwo}
                        onChangeText={setPhoneTwo}
                    />
                </View>

                <InputDate
                    label='Data de nascimento'
                    moment={dateBirth}
                    setMoment={setDateBirth}
                />

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Foto de perfil</Text>
                    <TouchableOpacity
                        style={[
                            styles.imagePicker,
                            imagem ? styles.imagePickerActive : null,
                        ]}
                        onPress={selecionarImagem}
                    >
                        <Text
                            style={[
                                styles.imagePickerText,
                                imagem ? styles.imagePickerTextActive : null,
                            ]}
                        >
                            {imagem
                                ? "Imagem selecionada (clique para alterar)"
                                : "Selecione uma foto de perfil"}
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.formGroup}>
                    <Text style={styles.label}>CEP</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite seu CEP"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={cep}
                        onChangeText={setCep}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Estado</Text>
                    <TouchableOpacity
                        style={styles.estadoSelector}
                        onPress={() => setMostrarEstados(!mostrarEstados)}
                    >
                        <Text
                            style={
                                state ? styles.estadoSelecionado : styles.estadoPlaceholder
                            }
                        >
                            {state || "Selecione seu estado"}
                        </Text>
                    </TouchableOpacity>

                    {mostrarEstados && (
                        <View style={styles.estadosListaContainer}>
                            <FlatList
                                data={estados}
                                keyExtractor={(item) => item.value}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={styles.estadoItem}
                                        onPress={() => selecionarEstado(item.label)}
                                    >
                                        <Text style={styles.estadoItemText}>{item.label}</Text>
                                    </TouchableOpacity>
                                )}
                                style={styles.estadosLista}
                                nestedScrollEnabled
                            />
                        </View>
                    )}
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Cidade</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite sua cidade"
                        placeholderTextColor="#999"
                        value={city}
                        onChangeText={setCity}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Bairro</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite seu bairro"
                        placeholderTextColor="#999"
                        value={neighborhood}
                        onChangeText={setNeighborhood}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Rua</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite seu endereço completo"
                        placeholderTextColor="#999"
                        value={street}
                        onChangeText={setStreet}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Número</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite o número da sua residência"
                        placeholderTextColor="#999"
                        value={number}
                        onChangeText={setNumber}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Complemento</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Digite o complemento"
                        placeholderTextColor="#999"
                        value={complement}
                        onChangeText={setComplement}
                    />
                </View>

                <ErrorModal
                    visible={errorModalVisible}
                    error={error}
                    fields={fields}
                    onClose={() => setErrorModalVisible(false)}
                />

                <View style={styles.submitButtonWrapper}>
                    <TouchableOpacity style={styles.submitButton} onPress={handleUpdate}>
                        <Text style={styles.submitButtonText}>SALVAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <NavigationBar initialTab="perfil" />
        </View>
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