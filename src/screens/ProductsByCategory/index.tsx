import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Alert, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';

import { NavigationProps } from "../../routes/AppRoute";

import { findByCategory } from '../../api/product/search/findByCategory';

import { Category, Error, Product } from "../../utils/Types";

import { Title } from "../../components/Title";
import { NavigationBar } from "../../components/NavigationBar";

import { useValidateToken } from "../../utils/UseValidateToken/UseValidateToken";
import hardwareBackPress from "../../utils/hardwareBackPress/hardwareBackPress";

import { styles } from "./style";

export const ProductsByCategory = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { id: categoryId } = route.params as { id: string };

    const [products, setProducts] = useState<Product[]>();
    const [categoryName, setCategoryName] = useState<string>('');

    const [error, setError] = useState<string>('');
    const [errorComment, setErrorComment] = useState<string>('');

    useValidateToken();
    hardwareBackPress(navigate, "ShopScreen");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data: Category | Error = await findByCategory(categoryId);

                if ('code' in data) {
                    setError(data.message);
                    return;
                }

                setProducts(data.products);
                setCategoryName(data.name);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
                Alert.alert("Erro", "Não foi possível carregar os produtos.");
            }
        };

        fetchProducts();
    }, [categoryId]);

    const formatPrice = (price: number) => {
        return `R$ ${price.toFixed(2).replace('.', ',')}`;
    };

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        for (let i = 1; i <= 5; i++) {
            let source;
            if (i <= fullStars) {
                source = require('../../assets/images/star.png');
            } else if (i === fullStars + 1 && hasHalfStar) {
                source = require('../../assets/images/halfstar.png');
            } else {
                source = require('../../assets/images/emptystar.png');
            }
            stars.push(<Image key={i} source={source} style={styles.starIcon} />);
        }
        return stars;
    };

    return (
        <View style={styles.container}>

            <View style={styles.subcontainer}>
                <Title text={"Categoria: " + categoryName} />

                <FlatList
                    data={products}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    columnWrapperStyle={styles.rowWrapper}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.productCard}
                            onPress={() => navigate('DetailsProduct', { id: item.id })}
                        >
                            <Image source={{ uri: item.pathImage }} style={styles.productImage} />
                            <Text style={styles.productName}>{item.name}</Text>
                            <View style={styles.ratingStarsContainer}>
                                {renderStars(item.rate)}
                                <Text style={styles.ratingText}>{item.rate.toFixed(1)}</Text>
                            </View>
                            <Text style={styles.productPrice}>{formatPrice(item.price)}</Text>
                        </TouchableOpacity>
                    )}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>Nenhum produto encontrado.</Text>
                    }
                />
            </View>
            <NavigationBar initialTab="loja" />
        </View>
    );
};
