import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from "react-native";

import { NavigationBar } from "../../components/NavigationBar";

import { styles } from "./style";

import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from "../../routes/AppRoute";
import { search } from "../../api/category/search/search";
import { Category } from "../../utils/Types";


export const ShowCategories = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const [categorias, setCategorias] = useState<Category[]>();
  
  useEffect(() => {
    const buscarCategorias = async () => {
      try {
        const data = await search();
        if (!data) {
          throw new Error("Erro ao buscar dados do usuário");
        }
        setCategorias(data)
      } catch (erro) {
        console.error("Erro ao buscar categorias:", erro);
        Alert.alert("Erro", "Não foi possível carregar os dados das categorias.");
      }
    };

    buscarCategorias();
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.subtitle}>Nossas Categorias</Text>

      <FlatList
        data={categorias}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> navigate('ProductsByCategory', { id:item.id })}>
            <View style={styles.cardContent}>
              <Image source={{uri : item.pathImage}} style={styles.categoryImage} />
            </View>
          </TouchableOpacity>
        )}
      />


      {/* Menu Inferior */}
      <NavigationBar initialTab='loja'/>
    </View>
  );
};