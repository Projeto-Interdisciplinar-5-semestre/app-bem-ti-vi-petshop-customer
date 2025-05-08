import React from "react";
import { View, Text, FlatList, Image } from "react-native";

import { NavigationBar } from "../../components/NavigationBar";

import { styles } from "./style";


const produtos = [
  { id: "1", nome: "Ração Seca Royal Canin Maxi Adult", preco: "R$ 368,99", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/282999/Racao-Royal-Canin-Caes-Maxi-Adulto.jpg?v=638126959440270000" },
  { id: "2", nome: "Ração Seca Royal Canin Maxi Adult", preco: "R$ 368,99", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/282999/Racao-Royal-Canin-Caes-Maxi-Adulto.jpg?v=638126959440270000" },
  { id: "3", nome: "Ração Seca Royal Canin Maxi Adult", preco: "R$ 368,99", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/282999/Racao-Royal-Canin-Caes-Maxi-Adulto.jpg?v=638126959440270000" },
  { id: "4", nome: "Ração Seca Royal Canin Maxi Adult", preco: "R$ 368,99", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/282999/Racao-Royal-Canin-Caes-Maxi-Adulto.jpg?v=638126959440270000" }
];

export const ProductsByCategory = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.subtitle}>Categoria: Alimentos</Text>

      <FlatList
        data={produtos}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.imagem }} style={styles.productImage} />
            <Text style={styles.productName}>{item.nome}</Text>
            <Text style={styles.productRating}>5,0 ⭐⭐⭐⭐⭐</Text>
            <Text style={styles.productPrice}>{item.preco}</Text>
          </View>
        )}
      />

      {/* Menu Inferior */}
      <NavigationBar />
    </View>
  );
};
