import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native';
import { style } from './style';

const { width } = Dimensions.get('window');

// Dados mockados
const categories = [
  { id: 1, name: 'Popular', icon: require('../../assets/images/categ.png') },
  { id: 2, name: 'Alimentos', icon: require('../../assets/images/categ.png') },
  { id: 3, name: 'Roupas', icon: require('../../assets/images/categ.png') },
  { id: 4, name: 'Limpeza', icon: require('../../assets/images/categ.png') },
  { id: 5, name: 'Farmácia', icon: require('../../assets/images/categ.png') },
  { id: 6, name: 'Brinquedos', icon: require('../../assets/images/categ.png') },
];

const bannerImages = [
  require('../../assets/images/banner.png'),
  require('../../assets/images/banner2.png'),
  require('../../assets/images/banner3.png'),
];

const productTypes = [
  'Mais Vendidos',
  'Marcas',
  'Filhotes',
  'Adultos',
  'Promoções'
];

const allProducts = [
  { id: 1, name: 'Ração Premium', price: 'R$ 129,90', image: require('../../assets/images/produto1.png'), category: 'Alimentos' },
  { id: 2, name: 'Brinquedo', price: 'R$ 39,90', image: require('../../assets/images/produto1.png'), category: 'Brinquedos' },
  { id: 3, name: 'Coleira', price: 'R$ 59,90', image: require('../../assets/images/produto1.png'), category: 'Roupas' },
  { id: 4, name: 'Cama Conforto', price: 'R$ 149,90', image: require('../../assets/images/produto1.png'), category: 'Popular' },
  { id: 5, name: 'Shampoo', price: 'R$ 29,90', image: require('../../assets/images/produto1.png'), category: 'Limpeza' },
  { id: 6, name: 'Osso', price: 'R$ 19,90', image: require('../../assets/images/produto1.png'), category: 'Brinquedos' },
];

const discountProducts = [
  { id: 7, name: 'Ração Especial', price: 'R$ 89,90', originalPrice: 'R$ 99,90', discount: '10%', image: require('../../assets/images/produto1.png'), category: 'Alimentos' },
  { id: 8, name: 'Tapete Higiênico', price: 'R$ 49,90', originalPrice: 'R$ 59,90', discount: '17%', image: require('../../assets/images/produto1.png'), category: 'Limpeza' },
  { id: 9, name: 'Comedouro', price: 'R$ 34,90', originalPrice: 'R$ 39,90', discount: '13%', image: require('../../assets/images/produto1.png'), category: 'Alimentos' },
  { id: 10, name: 'Arranhador', price: 'R$ 119,90', originalPrice: 'R$ 139,90', discount: '14%', image: require('../../assets/images/produto1.png'), category: 'Brinquedos' },
];

export const ShopScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const [selectedProductType, setSelectedProductType] = useState('Mais Vendidos');
  const [currentBanner, setCurrentBanner] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const flatListRef = useRef<FlatList>(null);

  // Filtra os produtos baseado na busca
  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleProductTypeSelect = (type: string) => {
    setSelectedProductType(type);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentBanner + 1) % bannerImages.length;
      setCurrentBanner(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentBanner]);

  const renderBannerIndicator = () => {
    return (
      <View style={style.indicatorContainer}>
        {bannerImages.map((_, index) => (
          <View
            key={index}
            style={[
              style.indicator,
              currentBanner === index && style.activeIndicator
            ]}
          />
        ))}
      </View>
    );
  };

  const renderProductCard = (product: any) => (
    <TouchableOpacity key={product.id} style={style.productCard}>
      <Image
        source={product.image}
        style={style.productImage}
        resizeMode="contain"
      />
      <View style={style.productInfo}>
        <Text style={style.productName} numberOfLines={1}>{product.name}</Text>
        <Text style={style.productPrice}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderDiscountProductCard = (product: any) => (
    <TouchableOpacity key={product.id} style={style.discountProductCard}>
      <View style={style.discountBadge}>
        <Text style={style.discountText}>{product.discount}</Text>
      </View>
      <Image
        source={product.image}
        style={style.productImage}
        resizeMode="contain"
      />
      <View style={style.productInfo}>
        <Text style={style.productName} numberOfLines={1}>{product.name}</Text>
        <View style={style.priceContainer}>
          <Text style={style.discountPrice}>{product.price}</Text>
          <Text style={style.originalPrice}>{product.originalPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      {/* Barra de pesquisa */}
      <View style={style.searchBarContainer}>
        <TextInput
          placeholder="Pesquisar produtos..."
          style={style.searchInputBar}
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Image
          source={require('../../assets/images/busca.png')}
          style={style.searchIcon}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Carrossel de categorias */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={style.categoriesContainer}
          contentContainerStyle={style.categoriesContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => handleCategorySelect(category.name)}
              style={style.categoryButton}
            >
              <View style={[
                style.categoryImageContainer,
                selectedCategory === category.name && style.selectedCategoryImageContainer
              ]}>
                <Image
                  source={category.icon}
                  style={[
                    style.categoryIcon,
                    selectedCategory === category.name && style.selectedCategoryIcon
                  ]}
                />
              </View>
              <Text style={[
                style.categoryText,
                selectedCategory === category.name && style.selectedCategoryText
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Carrossel de banners */}
        <View style={style.bannerContainer}>
          <FlatList
            data={bannerImages}
            ref={flatListRef}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(event.nativeEvent.contentOffset.x / width);
              setCurrentBanner(index);
            }}
            renderItem={({ item }) => (
              <Image
                source={item}
                style={style.bannerImage}
                resizeMode="cover"
              />
            )}
          />
          {renderBannerIndicator()}
        </View>

        {/* Seção de tipos de produtos */}
        <View style={style.sectionTitleContainer}>
          <View style={style.sectionLine} />
          <Text style={style.sectionTitle}>Destaques da Semana</Text>
          <View style={style.sectionLine} />
        </View>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={style.productTypesContainer}
          contentContainerStyle={style.productTypesContent}
        >
          {productTypes.map((type) => (
            <TouchableOpacity
              key={type}
              onPress={() => handleProductTypeSelect(type)}
              style={[
                style.productTypeButton,
                selectedProductType === type && style.selectedProductTypeButton
              ]}
            >
              <Text style={[
                style.productTypeText,
                selectedProductType === type && style.selectedProductTypeText
              ]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Grid de produtos */}
        <View style={style.productsGrid}>
          {filteredProducts.slice(0, 2).map(renderProductCard)}
        </View>
        <View style={style.productsGrid}>
          {filteredProducts.slice(2, 4).map(renderProductCard)}
        </View>

        {/* Seção de produtos em desconto */}
        <View style={style.sectionTitleContainer}>
          <View style={style.sectionLine} />
          <Text style={style.sectionTitle}>Produtos em Desconto</Text>
          <View style={style.sectionLine} />
        </View>
        
        <View style={style.productsGrid}>
          {discountProducts.slice(0, 2).map(renderDiscountProductCard)}
        </View>
        <View style={style.productsGrid}>
          {discountProducts.slice(2, 4).map(renderDiscountProductCard)}
        </View>
      </ScrollView>
    </View>
  );
};