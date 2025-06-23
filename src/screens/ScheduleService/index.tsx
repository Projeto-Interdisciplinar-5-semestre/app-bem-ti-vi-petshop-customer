import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image, ToastAndroid, Alert, Pressable, BackHandler } from 'react-native';
import { styles } from './style';
import { NavigationBar } from '../../components/NavigationBar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps } from '../../routes/AppRoute';
import { CustomerId, validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { createAppointment } from '../../api/appointment/create/createAppointment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Appointment, Customer, Error, Pet, Service } from '../../utils/Types';
import { findById } from '../../api/customer/search/findById';
import { InputPets } from '../../components/InputPets';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';

export const ScheduleService = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { service: service } = route.params as { service: Service };

    const [paymentMethods, setPaymentMethods] = useState({ pix: true, cash: false });
    const [petsToSelect, setPetsToSelect] = useState<Pet[]>([]);
    const [petId, setPetId] = useState<string>('');

    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);

    const [moment, setMoment] = useState<Date>(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showStartTimePicker, setShowStartTimePicker] = useState(false);

    const [customerId, setCustomerId] = useState<string>('');

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            navigate("DetailsService", { id: service.id });
            return true;
        });

        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        async function loadCustomerId() {
            try {
                const customerId: CustomerId | Error = await validateTokenCustomer();
                if ('code' in customerId) {
                    ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                    navigate("ClientLogin");
                } else {
                    setCustomerId(customerId.id);

                    const data: Customer | Error = await findById(customerId.id);
                    if ('code' in data) {
                        throw new Error("Erro ao buscar dados do usuário");
                    }
                    setPetsToSelect(data.pets);
                    setPetId(data.pets[0].id);
                }
            } catch (error) {
                ToastAndroid.show('Você foi deslogado!', ToastAndroid.SHORT);
                navigate("ClientLogin");
            }

        }
        loadCustomerId();
    }, []);

    const handlePaymentMethodChange = (method: 'pix' | 'cash') => {
        setPaymentMethods({
            pix: method === 'pix',
            cash: method === 'cash'
        });
    };

    const handleAgendar = () => {
        Alert.alert(
            "Agendar Serviço",
            `Deseja agendar o serviço ${service?.name}?`,
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Agendar", onPress: () => scheduleService() }
            ]
        );
    };

    const scheduleService = async () => {
        try {

            let methodPaymentByPix: boolean = true;
            if (paymentMethods.pix) {
                methodPaymentByPix = true;
            } else if (paymentMethods.cash) {
                methodPaymentByPix = false;
            }

            const appointment = {
                service: { id: service.id } as Service,
                customer: { id: customerId } as Customer,
                dateTime: moment,
                methodPaymentByPix: methodPaymentByPix,
                pet: { id: petId } as Pet
            } as Appointment;
            
            const result = await createAppointment(appointment);
            if ('code' in result) {
                setError(result.message);
                return;
            }

            ToastAndroid.show('Agendamento criado!', ToastAndroid.SHORT);
            navigate("AppointmentPayment", { appointment: result });
        } catch (error) {
            setError('Erro ao criar agendamento.');
        }
    };

    const handleStartDateChange = (_: any, selectedDate?: Date) => {
        setShowStartDatePicker(false);
        if (selectedDate) {
            const updatedDate = new Date(moment);
            updatedDate.setFullYear(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
            setMoment(updatedDate);
            setShowStartTimePicker(true);
        }
    };

    const handleStartTimeChange = (_: any, selectedTime?: Date) => {
        setShowStartTimePicker(false);
        if (selectedTime) {
            const updatedDate = new Date(moment);
            updatedDate.setHours(selectedTime.getHours(), selectedTime.getMinutes());
            setMoment(updatedDate);
        }
    };

    const formatDateTime = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `Data: ${day}/${month}/${year}   Hora: ${hours}:${minutes}`;
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                <View style={styles.continueShoppingContainer}>
                    <TouchableOpacity style={styles.continueShoppingButton} onPress={() => navigate("ShowServices")}>
                        <Image source={require('../../assets/images/carrinho-branco.png')} style={styles.cartIcon} />
                        <Text style={styles.continueText}>Continuar vendo serviços</Text>
                    </TouchableOpacity>
                </View>

                <View key={service.id} style={styles.itemCard}>
                    <Image
                        source={{ uri: service.pathImage }}
                        style={styles.productImage}
                    />
                    <View style={styles.productInfoContainer}>
                        <Text style={styles.itemName}>{service.name}</Text>
                        <Text style={styles.itemPrice}>R$ {service.price.toFixed(2)}</Text>
                    </View>
                </View>


                <View style={styles.formGroup}>
                    <Text style={styles.label}>Escolha o dia e o horário</Text>
                    <Pressable onPress={() => setShowStartDatePicker(true)} style={styles.inputField}>
                        <Text>{formatDateTime(moment)}</Text>
                    </Pressable>

                    {showStartDatePicker && (
                        <DateTimePicker value={moment} mode="date" display="default" onChange={handleStartDateChange} />
                    )}

                    {showStartTimePicker && (
                        <DateTimePicker value={moment} mode="time" display="default" onChange={handleStartTimeChange} />
                    )}
                </View>

                <InputPets
                    label='Escolha um pet'
                    petsToSelect={petsToSelect}
                    petId={petId}
                    setPetId={setPetId}
                />

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Forma de Pagamento</Text>

                    <View style={styles.paymentMethodsContainer}>
                        {/* Pix */}
                        <TouchableOpacity
                            style={[
                                styles.paymentMethodCard,
                                paymentMethods.pix && styles.paymentMethodCardActive
                            ]}
                            onPress={() => handlePaymentMethodChange('pix')}
                        >
                            <View style={styles.paymentMethodContent}>
                                <Image source={require('../../assets/images/pix.png')} style={styles.paymentMethodImage} />
                                <View>
                                    <Text style={styles.paymentMethodText}>Pix</Text>
                                    <Text style={styles.paymentMethodSubtext}>Pagamento instantâneo</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.paymentMethodCard,
                                paymentMethods.cash && styles.paymentMethodCardActive,
                                { marginTop: 12 }
                            ]}
                            onPress={() => handlePaymentMethodChange('cash')}
                        >
                            <View style={styles.paymentMethodContent}>
                                <Image source={require('../../assets/icons/dinheiro.webp')} style={styles.paymentMethodImage} />
                                <View>
                                    <Text style={styles.paymentMethodText}>Dinheiro</Text>
                                    <Text style={styles.paymentMethodSubtext}>Pagamento na entrega</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
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

                <View style={styles.confirmButtonContainer}>
                    <TouchableOpacity style={styles.confirmButton} onPress={handleAgendar}>
                        <Text style={styles.confirmButtonText}>CONFIRMAR PEDIDO</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <NavigationBar />
        </SafeAreaView>
    );
};
