import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, ToastAndroid, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { NavigationBar } from '../../components/NavigationBar';
import { NavigationProps } from '../../routes/AppRoute';
import { CustomerId, validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { Appointment, Customer, Error, Paginacao, Product } from '../../utils/Types';
import { search } from '../../api/appointment/search/search';
import { GLOBAL_VAR } from '../../api/config/globalVar';
import { findById } from '../../api/customer/search/findById';
import { searchProduct } from '../../api/product/search/searchProduct';
import { ErrorModal } from '../../components/ErrorModal';

type SectionProps = {
    title: string;
    products: Product[];
};

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
    if (status !== "WAITING_PAYMENT") return null;

    return (
        <View style={styles.appointmentCard}>
            <Text style={styles.appointmentTitle}>{title}</Text>
            <Text style={styles.appointmentPet}>Pet: {petName}</Text>
            <Text style={styles.appointmentDate}>Data: {formatDateTime(date)}</Text>
            <Text style={[styles.appointmentStatus, styles.statusPending]}>{status}</Text>
        </View>
    );
};

const ProductCard = ({ product }: { product: Product }) => {
    const { navigate } = useNavigation<NavigationProps>();

    return (
        <TouchableOpacity style={styles.productCard} onPress={() => navigate("DetailsProduct", { id: product.id })}>
            <Image source={{ uri: product.pathImage }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.ratingContainer}>
                <View style={styles.ratingStarsContainer}>
                    {renderStars(product.rate)}
                    <Text style={styles.ratingText}>{product.rate.toFixed(1)}</Text>
                </View>
            </View>
            <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
        </TouchableOpacity>
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
        </View>
    );
};

type BlueButtonProps = {
    title: string;
    size: number;
    onpress: () => void;
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

const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    for (let i = 1; i <= 5; i++) {
        let source;
        if (i <= fullStars) {
            source = require('../../assets/images/star.png');
        } else if (i === fullStars + 1 && hasHalfStar) {
            source = require('../../assets/images/halfstar.png');
        } else {
            source = require('../../assets/images/emptystar.png');
        }
        stars.push(<Image key={i} source={source} style={styles.starIcon} />);
    }
    return stars;
};

export const Home = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [customerId, setCustomerId] = useState('');
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            setCounter(prev => {
                const newCount = prev + 1;
                if (newCount >= 2) {
                    BackHandler.exitApp();
                    return 0;
                } else {
                    ToastAndroid.show('Pressione novamente para sair', ToastAndroid.SHORT);
                }
                return newCount;
            });
            return true;
        });

        return () => backHandler.remove();
    }, []);

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
                    setErrorModalVisible(true);
                }
            } catch {
                setAppointments([]);
                setError('Não foi possível carregar os agendamentos. Verifique sua conexão.');
                setErrorModalVisible(true);
            }
        }

        loadAppointments();
    }, []);

    useEffect(() => {
        async function loadProducts() {
            try {
                const customerId = await validateTokenCustomer();
                if ('code' in customerId) {
                    navigate('ClientLogin');
                    return;
                }

                const data = await searchProduct("", 0);
                if ('content' in data && 'totalPages' in data) {
                    setProducts(data.content);
                    setError('');
                } else {
                    setProducts([]);
                    setError(data.message || 'Erro desconhecido.');
                    setErrorModalVisible(true);
                }
            } catch {
                setProducts([]);
                setError('Não foi possível carregar os produtos. Verifique sua conexão.');
                setErrorModalVisible(true);
            }
        }

        loadProducts();
    }, []);

    const getNewProducts = () => {
        const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
        const now = new Date();

        return products.filter(product => {
            const creationDate = new Date(product.activationStatus.creationDate);
            return now.getTime() - creationDate.getTime() <= THIRTY_DAYS_MS;
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.greetingContainer}>
                    <Text style={styles.greeting}>Olá, {name}!</Text>
                    <Text style={styles.subGreeting}>Veja seus agendamentos e aproveite nossas ofertas!</Text>
                </View>

                <Text style={styles.sectionTitle}>Agendamentos pendentes</Text>

                {appointments.length > 0 ? (
                    appointments.map(appointment => (
                        <AppointmentCard
                            key={appointment.id}
                            title={appointment.service.name}
                            petName={appointment.pet.name}
                            date={appointment.dateTime}
                            status={appointment.paymentStatus}
                        />
                    ))
                ) : (
                    <Text style={{ color: '#7f8c8d', marginBottom: 10 }}>Nenhum agendamento pendente.</Text>
                )}

                <BlueButton
                    title='VER TODOS OS AGENDAMENTOS'
                    size={14}
                    onpress={() => navigate("SearchAppointment")}
                />


                {getNewProducts().length > 0 && (
                    <Section
                        title="Novidades"
                        products={getNewProducts()}
                    />
                )}

                {products.filter(p => p.rate >= 4.5).length > 0 && (
                    <Section
                        title="Mais bem avaliados"
                        products={products.filter(p => p.rate >= 4.0)}
                    />
                )}

                <ErrorModal
                    visible={errorModalVisible}
                    error={error}
                    onClose={() => setErrorModalVisible(false)}
                />
            </ScrollView>

            <NavigationBar />
        </View>
    );
};
