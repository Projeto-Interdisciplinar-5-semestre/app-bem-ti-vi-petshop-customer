import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { NavigationBar } from "../../components/NavigationBar";
import { PaginationControls } from "../../components/PaginationControls";
import { SearchInput } from "../../components/SearchInput";
import { Title } from "../../components/Title";

import { NavigationProps } from "../../routes/AppRoute";
import { Category } from "../../utils/Types";
import { search } from "../../api/category/search/search";

import { styles } from "./style";
import { useValidateToken } from "../../utils/UseValidateToken/UseValidateToken";
import hardwareBackPress from "../../utils/hardwareBackPress/hardwareBackPress";

export const ShowCategories = () => {
    const { navigate } = useNavigation<NavigationProps>();

    const [searchText, setSearchText] = useState<string>('');
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string>('');

    useValidateToken();
    hardwareBackPress(navigate, 'ShopScreen');

    const fetchCategories = async () => {
        try {
            const data = await search(searchText, pageIndex);

            if ("code" in data) {
                throw new Error("Erro ao buscar categorias");
            }

            setCategories(data.content);
            setTotalPages(data.totalPages);
            setError('');
        } catch (err) {
            console.error("Erro ao buscar categorias:", err);
            setError("Não foi possível carregar as categorias.");
        }
    };

    useEffect(() => {
        fetchCategories();
    }, [searchText, pageIndex]);

    const handleNextPage = () => {
        if (pageIndex + 1 < totalPages) {
            setPageIndex((prev) => prev + 1);
        }
    };

    const handlePrevPage = () => {
        if (pageIndex > 0) {
            setPageIndex((prev) => prev - 1);
        }
    };

    return (
        <View style={styles.container}>
            <Title text="Veja nossas Categorias" />

            <SearchInput
                placeholder="Buscar categoria..."
                searchText={searchText}
                setSearchText={setSearchText}
            />

            {error ? (
                <Text style={styles.errorText}>{error}</Text>
            ) : (
                <FlatList
                    data={categories}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    columnWrapperStyle={styles.rowWrapper}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigate('ProductsByCategory', { id: item.id })}
                            style={[styles.cardContent, { backgroundColor: item.cardColor}]}
                        >
                            <Image source={{ uri: item.pathImage }} style={styles.categoryImage} />
                            <Text style={styles.categoryName}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}

            <PaginationControls
                pageIndex={pageIndex}
                totalPages={totalPages}
                onNext={handleNextPage}
                onPrev={handlePrevPage}
            />
        </View>
    );
};
