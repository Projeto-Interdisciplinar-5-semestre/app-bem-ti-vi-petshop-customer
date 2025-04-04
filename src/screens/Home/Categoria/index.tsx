import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList  } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";



const categorias = [
    { id: "1", nome: "Alimentos", cor: "#D040AC", imagem: "https://cobasi.vteximg.com.br/arquivos/ids/282999/Racao-Royal-Canin-Caes-Maxi-Adulto.jpg?v=638126959440270000" },
    { id: "2", nome: "Brinquedos", cor: "#57A4CC" },
    { id: "3", nome: "Limpeza", cor: "#FF599D" },
    { id: "4", nome: "Roupas e Acessórios", cor: "#C1180D" },
    { id: "5", nome: "Farmácia", cor: "#F75B17" },
    { id: "6", nome: "Coleiras e Peitorais", cor: "#283CC3" },
    { id: "7", nome: "Acessórios de Transporte", cor: "#2563EB" },
    { id: "8", nome: "Casinhas e Tocas", cor: "#FFBB00" },
    { id: "9", nome: "Alimentos", cor: "#D040AC" },
    { id: "10", nome: "Brinquedos", cor: "#57A4CC" },
    { id: "11", nome: "Limpeza", cor: "#FF599D" },
    { id: "12", nome: "Roupas e Acessórios", cor: "#C1180D" },
  ];
  
  export const Categoria = () => {
    return (
      <View>
   
        <Text style={styles.title}>CATEGORIAS</Text>
  
       
        <Text style={styles.subtitle}>Nossas Categorias</Text>

        <FlatList
  data={categorias}
  numColumns={2} 
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TouchableOpacity style={[styles.categoryCard, { backgroundColor: item.cor }]}>
      <View style={styles.content}>
        <Text style={styles.categoryText}>{item.nome}</Text>
        <Image source={{ uri: item.imagem }} style={styles.categoryImage} />
      </View>
    </TouchableOpacity>
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