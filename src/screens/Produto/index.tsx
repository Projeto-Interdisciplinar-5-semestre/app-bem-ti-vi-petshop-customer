import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style"; 

const produtos = [
  { id: "1", nome: "Ração Seca Royal Canin Maxi Adult", preco: "R$ 368,99", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/282999/Racao-Royal-Canin-Caes-Maxi-Adulto.jpg?v=638126959440270000" },
  { id: "2", nome: "Ração Seca Royal Canin Maxi Adult", preco: "R$ 368,99", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/282999/Racao-Royal-Canin-Caes-Maxi-Adulto.jpg?v=638126959440270000" },
  { id: "3", nome: "Ração Seca Royal Canin Maxi Adult", preco: "R$ 368,99", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/282999/Racao-Royal-Canin-Caes-Maxi-Adulto.jpg?v=638126959440270000" },
  { id: "4", nome: "Ração Seca Royal Canin Maxi Adult", preco: "R$ 368,99", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/282999/Racao-Royal-Canin-Caes-Maxi-Adulto.jpg?v=638126959440270000" }
];

export const Produto = () => {
  return (
    <View style={styles.container}>
 
      <Text style={styles.title}>Produto</Text>
      

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
