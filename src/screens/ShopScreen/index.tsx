import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { SearchInput } from '../../components/SearchInput';
import { NavigationBar } from '../../components/NavigationBar';
import { PaginationControls } from '../../components/PaginationControls';

import { useValidateToken } from '../../utils/UseValidateToken/UseValidateToken';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { Category, Error, Paginacao, Product } from '../../utils/Types';

import { NavigationProps } from '../../routes/AppRoute';

import { searchProduct } from '../../api/product/search/searchProduct';
import { search } from '../../api/category/search/search';

import { style } from './style';
import { ErrorModal } from '../../components/ErrorModal';

const bannerImages = [
    require('../../assets/images/banner.png'),
    require('../../assets/images/banner2.png'),
    require('../../assets/images/banner3.png')
];

export default function ShopScreen() {
    const { navigate } = useNavigation<NavigationProps>();

    const [currentBanner, setCurrentBanner] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);

    const [error, setError] = useState<string>('');
    const [errorModalVisible, setErrorModalVisible] = useState(false);

    const { width } = Dimensions.get('window');

    useValidateToken();
    hardwareBackPress(navigate, "Home");

    const handleNextPage = () => {
        if (pageIndex + 1 < totalPages) setPageIndex(prev => prev + 1);
    };

    const handlePrevPage = () => {
        if (pageIndex > 0) setPageIndex(prev => prev - 1);
    };


    useEffect(() => {
        async function carregarCategorias() {
            try {
                const categories: Paginacao<Category> | Error = await search("", 0);

                if ('code' in categories) {
                    setError(categories.message);
                    setErrorModalVisible(true);
                    return;
                }

                setCategories(categories.content);

            } catch {
                setError('Não foi possível atualizar. Verifique sua conexão.');
                setErrorModalVisible(true);
            }
        }
        carregarCategorias();
    }, []);

    const carregarProdutos = useCallback(async (searchText: string, pageIndex: number) => {
        setError('');
        try {
            const dados: Paginacao<Product> | Error = await searchProduct(searchText, pageIndex);
            if ('code' in dados) {
                setError(dados.message);
                setErrorModalVisible(true);
                return;
            }

            setProducts(dados.content);

        } catch {
            setProducts([]);
            setError('Erro ao carregar produtos. Verifique sua conexão.');
            setErrorModalVisible(true);
        }
    }, []);

    useEffect(() => {
        carregarProdutos(searchText, pageIndex);
    }, [pageIndex, searchText, carregarProdutos]);

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

    const renderProductCard = (product: Product) => (
        <TouchableOpacity key={product.id} style={style.productCard} onPress={() => navigate("DetailsProduct", { id: product.id })}>
            <Image source={{ uri: product.pathImage }} style={style.productImage} resizeMode="contain" />
            <View style={style.productInfo}>
                <Text style={style.productName} numberOfLines={1}>{product.name}</Text>
                <Text style={style.productPrice}>R$ {product.price}</Text>
                <View style={style.ratingStarsContainer}>
                    {renderStars(product.rate)}
                    <Text style={style.ratingText}>{product.rate.toFixed(1)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const produtosFiltrados = products.filter(produto =>
        produto.name.toLowerCase().includes(searchText.toLowerCase()) ||
        produto.categories.some((c: Category) =>
            c.name.toLowerCase().includes(searchText.toLowerCase())
        )
    );

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
            stars.push(<Image key={i} source={source} style={style.starIcon} />);
        }
        return stars;
    };

    return (
        <View style={style.container} >

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.subcontainer}>
                <SearchInput
                    placeholder="Buscar categoria..."
                    searchText={searchText}
                    setSearchText={setSearchText}
                />

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={style.categoriesContainer}
                    contentContainerStyle={style.categoriesContent}
                >
                    {categories.map((category) => (
                        <TouchableOpacity key={category.id} style={style.categoryButton}
                            onPress={() => navigate('ProductsByCategory', { id: category.id })}>
                            <View style={style.categoryImageContainer}>
                                <Image source={{ uri: category.pathImage }} style={style.categoryIcon} />
                            </View>
                            <Text style={style.categoryText}>{category.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

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
                            <Image source={item} style={style.bannerImage} resizeMode="cover" />
                        )}
                    />
                    {renderBannerIndicator()}
                </View>

                <View>
                    <TouchableOpacity style={style.buttonCategories} onPress={() => navigate("ShowCategories")}>
                        <Text style={style.buttonTextCategories}>Ver todas as categorias</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.sectionTitleContainer}>
                    <View style={style.sectionLine} />
                    <Text style={style.sectionTitle}>Veja nossos produtos</Text>
                    <View style={style.sectionLine} />
                </View>

                <View style={style.productsGrid}>
                    {produtosFiltrados.map(renderProductCard)}
                </View>
                </View>
                <ErrorModal
                    visible={errorModalVisible}
                    error={error}
                    onClose={() => setErrorModalVisible(false)}
                />
            </ScrollView>

            <PaginationControls
                pageIndex={pageIndex}
                totalPages={totalPages}
                onNext={handleNextPage}
                onPrev={handlePrevPage}
            />
            <NavigationBar initialTab='loja' />
        </View>
    );
};