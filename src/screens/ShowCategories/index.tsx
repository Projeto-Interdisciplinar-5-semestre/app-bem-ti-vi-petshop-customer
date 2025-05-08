import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";

import { NavigationBar } from "../../components/NavigationBar";

import { styles } from "./style";

const categorias = [
  { id: "1", Image: require("../../assets/images/cat-alimentos.png") },
  { id: "2", Image: require("../../assets/images/cat-brinquedos.png") },
  { id: "3", Image: require("../../assets/images/cat-limpeza.png") },
  { id: "4", Image: require("../../assets/images/cat-beleza.png") },
  { id: "5", Image: require("../../assets/images/cat-farmacia.png") },
  { id: "6", Image: require("../../assets/images/cat-transporte.png") },
  { id: "7", Image: require("../../assets/images/cat-casinhas.png") },
  { id: "8", Image: require("../../assets/images/cat-alimentos.png") },
  { id: "9", Image: require("../../assets/images/cat-brinquedos.png") },
  { id: "10", Image: require("../../assets/images/cat-limpeza.png") },
];

export const ShowCategories = () => {
  return (
    <View>

      <Text style={styles.subtitle}>Nossas Categorias</Text>

      <FlatList
        data={categorias}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.cardContent}>
              <Image source={item.Image} style={styles.categoryImage} />
            </View>
          </TouchableOpacity>
        )}
      />


      {/* Menu Inferior */}
      <NavigationBar />
    </View>
  );
};