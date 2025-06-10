import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Alert, TouchableOpacity } from "react-native";

import { NavigationBar } from "../../components/NavigationBar";

import { styles } from "./style";

import { useRoute, useNavigation } from '@react-navigation/native';
import { NavigationProps } from "../../routes/AppRoute";
import { findByCategory } from '../../api/product/search/findByCategory';
import { Product } from "../../utils/Types";

export const ProductsByCategory = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const route = useRoute();
  const { id: categoryId } = route.params as { id: string };
  const [produtos, setProdutos] = useState<Product[]>();
  const [nomeCategoria, setNomeCategoria] = useState<string>('');

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const data = await findByCategory(categoryId);
        if (!data) {
          throw new Error("Erro ao buscar dados do usuário");
        }
        setProdutos(data.products)
        setNomeCategoria(data.categoryName)
      } catch (erro) {
        console.error("Erro ao buscar produtos:", erro);
        Alert.alert("Erro", "Não foi possível carregar os dados dos produtos.");
      }
    };

    buscarProdutos();
  }, [categoryId]);
  return (
    <View style={styles.container}>

      <Text style={styles.subtitle}>Categoria: {nomeCategoria}</Text>

      <FlatList
        data={produtos}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.pathImage }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productRating}>5,0 ⭐⭐⭐⭐⭐</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <TouchableOpacity onPress={()=> navigate('DetailsProduct', { id:item.id })}>
              <Image source={require('../../assets/images/olhos.png')}/>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Menu Inferior */}
      <NavigationBar initialTab="loja"/>
    </View>
  );
};
