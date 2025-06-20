import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { NavigationBar } from "../../components/NavigationBar";

import { styles } from './style';

const products1 = [
    {
        name: 'Kit Shampoo + Condicionador',
        rating: 4.5,
        price: 'R$ 39,99',
        image: require('../../assets/images/shampo 3.png'),
    },
    {
        name: 'Casinha para transportes de gato e cachorro',
        rating: 5,
        price: 'R$ 129,99',
        image: require('../../assets/images/casa 1.png'),
    },
    {
        name: 'Kit Brinquedos para Cães filhotes e adultos',
        rating: 5,
        price: 'R$ 49,99',
        image: require('../../assets/images/briquedo 2.png'),
    },
    {
        name: 'Ração Seca Golden Formula adulta',
        rating: 4,
        price: 'R$ 69,99',
        image: require('../../assets/images/image 6.png'),
    },
]

const products2 = [
    {
        name: 'Casinha para transportes de gato e cachorro',
        rating: 4.7,
        price: 'R$ 129,99',
        image: require('../../assets/images/casa 2.png'),
    },
    {
        name: 'Casinha para transportes de gato e cachorro',
        rating: 4.7,
        price: 'R$ 129,49',
        image: require('../../assets/images/casa 2.png'),
    },
    {
        name: 'Casinha para transportes de gato e cachorro',
        rating: 4.7,
        price: 'R$ 129,99',
        image: require('../../assets/images/casa 2.png'),
    },
    {
        name: 'Casinha para transportes de gato e cachorro',
        rating: 4.7,
        price: 'R$ 129,00',
        image: require('../../assets/images/casa 2.png'),
    },
]

const products3 = [
    {
        name: 'Kit Brinquedos para Cães infantis e adultos',
        rating: 4,
        price: 'R$ 49,99',
        image: require('../../assets/images/briquedo 2.png'),
    },
    {
        name: 'Kit Brinquedos para Cães infantis e adultos',
        rating: 4,
        price: 'R$ 49,00',
        image: require('../../assets/images/briquedo 2.png'),
    },
    {
        name: 'Kit Brinquedos para Cães infantis e adultos',
        rating: 4,
        price: 'R$ 49,99',
        image: require('../../assets/images/briquedo 2.png'),
    },
    {
        name: 'Kit Brinquedos para Cães infantis e adultos',
        rating: 4,
        price: 'R$ 49,90',
        image: require('../../assets/images/briquedo 2.png'),
    },
]

export const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <Text style={styles.greeting}>Olá, Ana!</Text>
                <Text style={styles.sectionTitle}>Seus agendamentos</Text>

                <Appointment
                    title="Banho e Tosa"
                    petName="Nany"
                    date="25/04/2025"
                    status="pago"
                />

                <Appointment
                    title="Vacinação"
                    petName="Neymar"
                    date="05/05/2025"
                    status="pendente"
                />

                <BlueButton 
                    title='VER TODOS OS AGENDAMENTOS'
                    size={12}
                /> 

                <Section title="Produtos que você pode gostar" products={products1} />

                <Section title="De acordo com a sua pesquisa" products={products2} />

                <Section title="Produtos que você já comprou" products={products3} />

            </ScrollView>

            <NavigationBar />
        </View>
    );
};


const Appointment = (props: any) => {
    return (
        <View style={styles.appointmentCard}>
            <Text style={styles.appointmentTitle}>{props.title}</Text>
            <Text style={styles.appointmentPet}>Pet: {props.petName}</Text>
            <Text style={styles.appointmentDate}>Data: {props.date}</Text>
            <Text style={styles.appointmentStatus}>{props.status}</Text>
            <TouchableOpacity onPress={() => { }}>
                <Text style={styles.viewMore}>Ver mais</Text>
            </TouchableOpacity>
        </View>
    )
}


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
                    <View style={styles.productCard} key={index}>
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
                ))}

            </ScrollView>
            <BlueButton 
                title='VER MAIS'
                size={8}
            /> 
        </View>
    );
};

type BlueButtonProps = {
    title: string,
    size: number
}

const BlueButton = ({title, size}: BlueButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, {padding: size}]} onPress={() => { }}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
