import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';
import { NavigationBar } from '../../components/NavigationBar/index'; // Adicione isso
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../routes/AppRoute';
import { CustomerId, validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { Appointment, Customer, Error, Paginacao } from '../../utils/Types';
import { search } from '../../api/appointment/search/search';
import { GLOBAL_VAR } from '../../api/config/globalVar';
import { findById } from '../../api/customer/search/findById';

type Product = {
    name: string;
    rating: number;
    price: string;
    image: any;
};

type SectionProps = {
    title: string;
    products: Product[];
};

const products1: Product[] = [
    {
        name: 'Kit Shampoo + Condicionador',
        rating: 4.5,
        price: 'R$ 39,99',
        image: require('../../assets/images/produto.png'),
    },
    {
        name: 'Casinha para transportes de gato e cachorro',
        rating: 5,
        price: 'R$ 129,99',
        image: require('../../assets/images/produto.png'),
    },
    {
        name: 'Kit Brinquedos para Cães filhotes e adultos',
        rating: 5,
        price: 'R$ 49,99',
        image: require('../../assets/images/produto.png'),
    },
    {
        name: 'Ração Seca Golden Formula adulta',
        rating: 4,
        price: 'R$ 69,99',
        image: require('../../assets/images/produto.png'),
    },
];

const products2: Product[] = [
    {
        name: 'Casinha para transportes de gato e cachorro',
        rating: 4.7,
        price: 'R$ 129,99',
        image: require('../../assets/images/produto.png'),
    },
];

const products3: Product[] = [
    {
        name: 'Kit Brinquedos para Cães infantis e adultos',
        rating: 4,
        price: 'R$ 49,99',
        image: require('../../assets/images/produto.png'),
    },
];

const formatDateTime = (date: Date) =>
    date.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

type AppointmentProps = {
    title: string;
    petName: string;
    date: Date;
    status: string;
};

const AppointmentCard = ({ title, petName, date, status }: AppointmentProps) => {
    if (status != "WAITING_PAYMENT") {
        return <></>
    }

    return (
        <View style={styles.appointmentCard}>
            <Text style={styles.appointmentTitle}>{title}</Text>
            <Text style={styles.appointmentPet}>Pet: {petName}</Text>
            <Text style={styles.appointmentDate}>Data: {formatDateTime(date)}</Text>
            <Text style={[styles.appointmentStatus, styles.statusPending]}>
                {status}
            </Text>
        </View>
    );
};

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <View style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{product.rating.toFixed(1)}</Text>
                {[...Array(5)].map((_, i) => (
                    <FontAwesome
                        key={i}
                        name="star"
                        size={14}
                        color={i < Math.round(product.rating) ? '#ffc107' : '#ccc'}
                    />
                ))}
            </View>
            <Text style={styles.productPrice}>{product.price}</Text>
        </View>
    );
};

const Section = ({ title, products }: SectionProps) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.productList}
            >
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </ScrollView>
            <BlueButton title='VER MAIS' size={8} onpress={() => { }} />
        </View>
    );
};

type BlueButtonProps = {
    title: string;
    size: number;
    onpress: () => void
};

const BlueButton = ({ title, size, onpress }: BlueButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.button, { paddingVertical: size }]}
            onPress={onpress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export const Home = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    const [customerId, setCustomerId] = useState('');
    const [name, setName] = useState<string>('');

    const [error, setError] = useState<string>('');


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
                GLOBAL_VAR.USER_EMAIL = customer.email;
            } catch {
                ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                navigate("ClientLogin");
            }
        };

        loadCustomerData();
    }, []);

    useEffect(() => {
        async function loadAppointments() {
            try {
                const customerId = await validateTokenCustomer();
                if ('code' in customerId) {
                    navigate('ClientLogin');
                    return;
                }

                const data: Paginacao<Appointment> | Error = await search(0, customerId.id, "");

                if ('content' in data && 'totalPages' in data) {
                    setAppointments(data.content);
                    setError('');
                } else {
                    setAppointments([]);
                    setError(data.message || 'Erro desconhecido.');
                }
            } catch {
                setAppointments([]);
                setError('Não foi possível carregar os agendamentos. Verifique sua conexão.');
            }
        }

        loadAppointments();
    }, []);


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.greeting}>Seja bem-vindo, {name}!</Text>
                <Text style={styles.sectionTitle}>Agendamentos pendentes</Text>

                {appointments.map(appointment => (
                    <AppointmentCard
                        key={appointment.id}
                        title={appointment.service.name}
                        petName={appointment.pet.name}
                        date={appointment.dateTime}
                        status={appointment.paymentStatus}
                    />
                ))}

                <BlueButton
                    title='VER TODOS OS AGENDAMENTOS'
                    size={12}
                    onpress={() => navigate("SearchAppointment")}
                />

                <Section title="Produtos que você pode gostar" products={products1} />
                <Section title="De acordo com a sua pesquisa" products={products2} />
                <Section title="Produtos que você já comprou" products={products3} />
            </ScrollView>

            <NavigationBar />
        </View>
    );
};