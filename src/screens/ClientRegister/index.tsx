import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
    ToastAndroid
} from 'react-native';
import { styles } from './style';

import { FontAwesome5, MaterialIcons, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../routes/AppRoute';
import { create } from '../../api/customer/create/create';
import { selectImageFromGalery } from '../../utils/selectImageFromGalery/selectImageFromGalery';
import { InputDate } from '../../components/InputDate';
import { AdressByCEP, Error } from '../../utils/Types';
import getViaCep from '../../api/customer/search/getViaCep';
import { InputPassword } from '../../components/InputPassword';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';

export default function Cadastro() {
    const { goBack, navigate } = useNavigation<NavigationProps>()
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepet, setPasswordRepet] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [state, setState] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [neighborhood, setNeighborhood] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [numero, setNumero] = useState<string>('');
    const [complemento, setComplemento] = useState<string>('');
    const [phoneOne, setPhoneOne] = useState<string>('');
    const [phoneTwo, setPhoneTwo] = useState<string>('');
    const [imagem, setImagem] = useState<string>('');
    const [dateBirth, setDateBirth] = useState<Date>(new Date());

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepet, setShowPasswordRepet] = useState(false);

    const [showAddress, setShowAddress] = useState<boolean>(false);

    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);

    hardwareBackPress(navigate, "ClientLogin");
    
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowPasswordRepet = () => setShowPasswordRepet(!showPasswordRepet);

    const toggleComments = () => setShowAddress(!showAddress);

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


    const sendRequestRegister = async () => {
        if (password == "" || password != passwordRepet) {
            Alert.alert("Atenção!", "As não digitadas não são iguais!");
            return;
        }

        const user = {
            name: nome,
            email: email,
            password: password,
            cpf: cpf,
            birthDate: formatDateTime(dateBirth),
            telephones: {
                phoneOne,
                phoneTwo,
            },
            address: {
                state: state,
                city: city,
                neighborhood: neighborhood,
                street: street,
                number: numero,
                complement: complemento,
                postalCode: cep,
            },
        }

        try {
            const success: Boolean | Error = await create(user, imagem);
            if (success instanceof Boolean) {
                ToastAndroid.show('Conta Criada com sucesso! Faça o login', ToastAndroid.SHORT);
                navigate('ClientLogin');
            } else {
                setError(success.message || "Erro desconhecido.");
                setFields(success.errorFields?.map(field => field.description) || []);
            }
        } catch (error) {
            setError('Não foi possível atualizar. Verifique sua conexão.');
        }
    }


    useEffect(() => {
        const getAddressByCEP = async () => {
            const addressFound: AdressByCEP | undefined = await getViaCep(cep);

            if (addressFound != undefined) {
                setState(addressFound.estado);
                setCity(addressFound.localidade);
                setNeighborhood(addressFound.bairro);
                setStreet(addressFound.logradouro);
            } else if (cep != "") {
                setState("...");
                setCity("...");
                setNeighborhood("...");
                setStreet("...");
            } else {
                setState("");
                setCity("");
                setNeighborhood("");
                setStreet("");
            }
        }

        getAddressByCEP();
    }, [cep])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>CADASTRO</Text>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <FontAwesome5 name="user" size={16} color="#256489" />
                    <TextInput placeholder="Digite seu nome" style={styles.input} placeholderTextColor="#256489" value={nome} onChangeText={setNome} />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons name="alternate-email" size={18} color="#256489" />
                    <TextInput placeholder="Digite seu e-mail" style={styles.input} placeholderTextColor="#256489" keyboardType="email-address" value={email} onChangeText={setEmail} />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons name="alternate-email" size={18} color="#256489" />
                    <TextInput placeholder="Digite seu CPF" style={styles.input} placeholderTextColor="#256489" keyboardType="default" value={cpf} onChangeText={setCpf} />
                </View>

                <InputPassword
                    placeholder="Digite sua senha"
                    toggleShowPassword={toggleShowPassword}
                    showPassword={showPassword}
                    password={password}
                    setPassword={setPassword}
                />

                <InputPassword
                    placeholder="Digite a sua senha novamente"
                    toggleShowPassword={toggleShowPasswordRepet}
                    showPassword={showPasswordRepet}
                    password={passwordRepet}
                    setPassword={setPasswordRepet}
                />

                <InputDate
                    label='Data de nascimento'
                    moment={dateBirth}
                    setMoment={setDateBirth}
                />

                <View style={styles.inputContainer}>
                    <Feather name="phone" size={18} color="#256489" />
                    <TextInput placeholder="Telefone principal" style={styles.input} placeholderTextColor="#256489" keyboardType="phone-pad" value={phoneOne} onChangeText={setPhoneOne} />
                </View>

                <View style={styles.inputContainer}>
                    <Feather name="phone-call" size={18} color="#256489" />
                    <TextInput placeholder="Telefone secundário (opcional)" style={styles.input} placeholderTextColor="#256489" keyboardType="phone-pad" value={phoneTwo} onChangeText={setPhoneTwo} />
                </View>

                <TouchableOpacity
                    style={styles.hiddenButton}
                    onPress={toggleComments}
                >
                    <Text style={styles.hiddenButtonText}>
                        {showAddress ? '▲ Ocultar endereço' : '▼ Ver endereço'}
                    </Text>
                </TouchableOpacity>

                {showAddress && (
                    <>

                        <View style={styles.inputContainer}>
                            <MaterialIcons name="pin" size={18} color="#256489" />
                            <TextInput placeholder="Digite seu CEP" style={styles.input} placeholderTextColor="#256489" keyboardType="numeric" value={cep} onChangeText={setCep} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Entypo name="globe" size={18} color="#256489" />
                            <TextInput placeholder="Digite seu estado" style={styles.input} placeholderTextColor="#256489" value={state} onChangeText={setState} />
                        </View>

                        <View style={styles.inputContainer}>
                            <FontAwesome5 name="city" size={18} color="#256489" />
                            <TextInput placeholder="Digite sua cidade" style={styles.input} placeholderTextColor="#256489" value={city} onChangeText={setCity} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="home-outline" size={18} color="#256489" />
                            <TextInput placeholder="Digite seu bairro" style={styles.input} placeholderTextColor="#256489" value={neighborhood} onChangeText={setNeighborhood} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Feather name="map-pin" size={18} color="#256489" />
                            <TextInput placeholder="Digite seu lougradouro" style={styles.input} placeholderTextColor="#256489" value={street} onChangeText={setStreet} />
                        </View>

                        <View style={styles.inputContainer}>
                            <MaterialIcons name="pin" size={18} color="#256489" />
                            <TextInput placeholder="Digite seu número" style={styles.input} placeholderTextColor="#256489" keyboardType="numeric" value={numero} onChangeText={setNumero} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="business" size={18} color="#256489" />
                            <TextInput placeholder="Complemento (opcional)" style={styles.input} placeholderTextColor="#256489" value={complemento} onChangeText={setComplemento} />
                        </View>
                    </>
                )}

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Imagem do perfil</Text>

                    <TouchableOpacity
                        style={[
                            styles.imagePicker,
                            imagem ? styles.imagePickerActive : null
                        ]}
                        onPress={selecionarImagem}
                    >
                        <Text style={[
                            styles.imagePickerText,
                            imagem ? styles.imagePickerTextActive : null
                        ]}>
                            {imagem ? 'Imagem selecionada (clique para alterar)' : 'Selecione uma imagem para o seu perfil'}
                        </Text>

                    </TouchableOpacity>

                    {imagem && (
                        <View style={styles.imagePreviewContainer}>
                            <Image
                                source={{ uri: imagem }}
                                style={styles.imagePreview}
                            />
                        </View>
                    )}
                </View>
            </View>

            {error ? (
                <View style={{ marginVertical: 10, alignSelf: 'center' }}>
                    <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
                    {fields.map((field, index) => (
                        <Text key={index} style={{ color: 'red', textAlign: 'center' }}>• {field}</Text>
                    ))}
                </View>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={sendRequestRegister}>
                <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => goBack()}>
                <Text style={styles.loginRedirect}>
                    Já possui conta? <Text style={styles.loginLink}>Faça Login</Text>
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
