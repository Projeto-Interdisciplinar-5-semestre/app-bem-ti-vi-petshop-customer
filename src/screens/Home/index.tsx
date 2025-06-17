import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';
import { NavigationBar } from '../../components/NavigationBar/index'; // Adicione isso

type Product = {
  name: string;
  rating: number;
  price: string;
  image: any;
};

type AppointmentProps = {
  title: string;
  petName: string;
  date: string;
  status: 'pago' | 'pendente';
};

type SectionProps = {
  title: string;
  products: Product[];
};

type BlueButtonProps = {
  title: string;
  size: number;
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

const Appointment = ({ title, petName, date, status }: AppointmentProps) => {
  return (
    <View style={styles.appointmentCard}>
      <Text style={styles.appointmentTitle}>{title}</Text>
      <Text style={styles.appointmentPet}>Pet: {petName}</Text>
      <Text style={styles.appointmentDate}>Data: {date}</Text>
      <Text style={[
        styles.appointmentStatus,
        status === 'pago' ? styles.statusPaid : styles.statusPending
      ]}>
        {status}
      </Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.viewMore}>Ver mais</Text>
      </TouchableOpacity>
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
      <BlueButton title='VER MAIS' size={8} />
    </View>
  );
};

const BlueButton = ({ title, size }: BlueButtonProps) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { paddingVertical: size }]} 
      onPress={() => {}}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

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