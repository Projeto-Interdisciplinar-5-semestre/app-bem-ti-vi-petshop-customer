import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
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

        <Section title="Produtos que você pode gostar" />
        <Section title="De acordo com a sua pesquisa" />
        <Section title="Produtos que você já comprou" />

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

type SectionProps = {
  title: string;
};

const Section = ({ title }: SectionProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      >
        {[1, 2, 3, 4].map((item: number, index: number) => (
          <View style={styles.productCard} key={index}>
            <View style={styles.productImagePlaceholder} />
            <Text style={styles.productName}>Produto {index + 1}</Text>
            <Text style={styles.productPrice}>R$ 99,99</Text>
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
