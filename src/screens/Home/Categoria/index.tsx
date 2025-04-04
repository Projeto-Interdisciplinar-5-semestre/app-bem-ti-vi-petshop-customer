import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList  } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";



const categorias = [
    { id: "1",  Image: require("../../../assets/images/cat-alimentos.png") },
    { id: "2",  Image: require("../../../assets/images/cat-brinquedos.png") },
    { id: "3",  Image: require("../../../assets/images/cat-limpeza.png") },
    { id: "4",  Image: require("../../../assets/images/cat-beleza.png") },
    { id: "5",  Image: require("../../../assets/images/cat-farmacia.png") },
    { id: "6",  Image: require("../../../assets/images/cat-transporte.png") },
    { id: "7",  Image: require("../../../assets/images/cat-casinhas.png") },
    { id: "8",  Image: require("../../../assets/images/cat-alimentos.png") },
    { id: "9",  Image: require("../../../assets/images/cat-brinquedos.png") },
    { id: "10", Image: require("../../../assets/images/cat-limpeza.png") },
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
    <TouchableOpacity>
      <View style={styles.cardContent}>
        <Image source={item.Image } style={styles.categoryImage} />
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