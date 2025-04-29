import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';

export const TelaPrincipal = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.header}>
          <FontAwesome name="home" size={24} color="black" />
          <Text style={styles.headerTitle}>HOME</Text>
        </View>

        <Text style={styles.greeting}>Olá, Ana!</Text>
        <Text style={styles.sectionTitle}>Seus agendamentos</Text>

        <View style={styles.appointmentCard}>
          <Text style={styles.appointmentTitle}>Banho e Tosa</Text>
          <Text style={styles.appointmentPet}>Pet: Nany</Text>
          <Text style={styles.appointmentDate}>Data: 25/04/2025</Text>
          <Text style={styles.appointmentStatus}>Agendamento para hoje</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.viewMore}>Ver mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.appointmentCard}>
          <Text style={styles.appointmentTitle}>Vacinação</Text>
          <Text style={styles.appointmentPet}>Pet: Neymar</Text>
          <Text style={styles.appointmentDate}>Data: 05/05/2025</Text>
          <Text style={styles.appointmentStatus}>Agendamento futuro</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.viewMore}>Ver mais</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>VER TODOS OS AGENDAMENTOS</Text>
        </TouchableOpacity>

        <Section
          title="Produtos que você pode gostar"
          products={[
            {
              name: 'Kit Shampoo + Condicionador',
              rating: 4.5,
              price: 'R$ 39,99',
              image: require('../../../assets/images/shampo 3.png'),
            },
            {
              name: 'Casinha para transportes de gato e cachorro',
              rating: 5,
              price: 'R$ 129,99',
              image: require('../../../assets/images/casa 1.png'),
            },
            {
              name: 'Kit Brinquedos para Cães filhotes e adultos',
              rating: 5,
              price: 'R$ 49,99',
              image: require('../../../assets/images/briquedo 2.png'),
            },
            {
              name: 'Ração Seca Golden Formula adulta',
              rating: 4,
              price: 'R$ 69,99',
              image: require('../../../assets/images/image 6.png'),
            },
          ]}
        />

        <Section
          title="De acordo com a sua pesquisa"
          products={[
            {
              name: 'Casinha para transportes de gato e cachorro',
              rating: 4.7,
              price: 'R$ 129,99',
              image: require('../../../assets/images/casa 2.png'),
            },
            {
              name: 'Casinha para transportes de gato e cachorro',
              rating: 4.7,
              price: 'R$ 129,49',
              image: require('../../../assets/images/casa 2.png'),
            },
            {
              name: 'Casinha para transportes de gato e cachorro',
              rating: 4.7,
              price: 'R$ 129,99',
              image: require('../../../assets/images/casa 2.png'),
            },
            {
              name: 'Casinha para transportes de gato e cachorro',
              rating: 4.7,
              price: 'R$ 129,00',
              image: require('../../../assets/images/casa 2.png'),
            },
          ]}
        />

        <Section
          title="Produtos que você já comprou"
          products={[
            {
              name: 'Kit Brinquedos para Cães infantis e adultos',
              rating: 4,
              price: 'R$ 49,99',
              image: require('../../../assets/images/briquedo 2.png'),
            },
            {
              name: 'Kit Brinquedos para Cães infantis e adultos',
              rating: 4,
              price: 'R$ 49,00',
              image: require('../../../assets/images/briquedo 2.png'),
            },
            {
              name: 'Kit Brinquedos para Cães infantis e adultos',
              rating: 4,
              price: 'R$ 49,99',
              image: require('../../../assets/images/briquedo 2.png'),
            },
            {
              name: 'Kit Brinquedos para Cães infantis e adultos',
              rating: 4,
              price: 'R$ 49,90',
              image: require('../../../assets/images/briquedo 2.png'),
            },
          ]}
        />

      </ScrollView>

      {/* Menu Inferior */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="home" size={24} />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="shopping-cart" size={24} />
          <Text style={styles.menuText}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="paw" size={24} />
          <Text style={styles.menuText}>Serviços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="user" size={24} />
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


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
      <TouchableOpacity style={styles.buttonSmall} onPress={() => {}}>
        <Text style={styles.buttonText}>VER MAIS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaPrincipal;
