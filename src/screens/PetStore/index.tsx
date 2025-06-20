import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationBar } from '../../components/NavigationBar';
import { styles } from './styles';

const PetStoreScreen = ({ navigation }: { navigation: any }) => {
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Rações', 'Brinquedos', 'Higiene', 'Acessórios'];
  
  const products = [
    {
      id: 1,
      name: 'Ração Premium para Cães Adultos Raças Médias e Grandes',
      category: 'Rações',
      price: 129.90,
      rating: 4.8,
      image: require('../../assets/images/racao.webp'),
    },
    {
      id: 2,
      name: 'Brinquedo Mastigável Resistente para Cães',
      category: 'Brinquedos',
      price: 39.90,
      rating: 4.5,
      image: require('../../assets/images/briquedo 2.png'),
    },
    {
      id: 3,
      name: 'Shampoo Hidratante para Pets 300ml',
      category: 'Higiene',
      price: 24.90,
      rating: 4.7,
      image: require('../../assets/images/shampo 3.png'),
    },
    {
      id: 4,
      name: 'Coleira Antipulgas para Cães',
      category: 'Acessórios',
      price: 45.90,
      rating: 4.3,
      image: require('../../assets/images/relogio.png'),
    },
  ];

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <View style={styles.container}>
      {/* Barra de busca */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar produtos..."
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Pet Shop</Text>
          <Text style={styles.headerSubtitle}>Tudo que seu pet precisa</Text>
        </View>

        {/* Categorias */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                activeCategory === category && styles.activeCategory
              ]}
              onPress={() => setActiveCategory(category)}
            >
              <Text style={[
                styles.categoryText,
                activeCategory === category && styles.activeCategoryText
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Grade de produtos */}
        <View style={styles.productsGrid}>
          {filteredProducts.map(product => (
            <TouchableOpacity 
              key={product.id} 
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetails', { product })}
            >
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName} numberOfLines={2}>{product.name}</Text>
              
              <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={14} color="#FFD700" />
                <Text style={styles.ratingText}>{product.rating}</Text>
              </View>
              
              <Text style={styles.productPrice}>
                {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </Text>
              
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <NavigationBar navigation={navigation} />
    </View>
  );
};

export default PetStoreScreen;