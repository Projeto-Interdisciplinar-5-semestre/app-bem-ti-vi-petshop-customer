import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, ToastAndroid, ActivityIndicator, BackHandler } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { searchByProduct } from '../../api/comments/search/searchByProduct';
import { validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { findById } from '../../api/product/search/findById';
import { create } from '../../api/comments/create/create';

import { NavigationBar } from '../../components/NavigationBar';
import { Title } from '../../components/Title';
import { InputDescription } from '../../components/InputDescription';
import { Input } from '../../components/Input';
import { ButtonLarge } from '../../components/ButtonLarge';
import { StarRatingInput } from '../../components/inputStar';

import { Comment, Customer, OrderItemForCar, Product } from '../../utils/Types';
import { useValidateToken } from '../../utils/UseValidateToken/UseValidateToken';

import { NavigationProps } from '../../routes/AppRoute';

import { styles } from './style';
import { GLOBAL_VAR } from '../../api/config/globalVar';

export const DetailsProduct = () => {
    const { navigate, replace, goBack } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { id: productId } = route.params as { id: string };

    const [product, setProduct] = useState<Product>({} as Product);
    const [comments, setComments] = useState<Comment[]>([]);
    const [totalComments, setTotalComments] = useState<number>(0);

    const [loadingProduct, setLoadingProduct] = useState(true);
    const [loadingSendComment, setLoadingSendComment] = useState(false);

    const [titleComment, setTitleComment] = useState('');
    const [messageComment, setMessageComment] = useState('');
    const [ratingComment, setRatingComment] = useState<number>(3);

    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);

    useValidateToken();

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            goBack();
            return true;
        });

        return () => backHandler.remove();
    }, []);

    const loadProductData = async () => {
        setLoadingProduct(true);
        try {
            const productResult = await findById(productId);
            if ('code' in productResult) {
                setError(productResult.message);
                return;
            }
            setProduct(productResult);

            const commentsResult = await searchByProduct(productId, 0);
            if ('code' in commentsResult) {
                setError(commentsResult.message);
                return;
            }

            setComments(commentsResult.content);
            setTotalComments(commentsResult.totalElements);
        } catch (error) {
            setError('Erro ao carregar serviço. Verifique a conexão.');
        } finally {
            setLoadingProduct(false);
        }
    };

    useEffect(() => {
        loadProductData();
    }, [productId]);

    const addProductToCar = async () => {
        const customerId = await validateTokenCustomer();
        if ('code' in customerId) {
            navigate('ClientLogin');
            return;
        }

        if (product != null) {
            const orderItem: OrderItemForCar = { id: product.id, product: product, quantity: 1 };
            navigate("CartProduct", { orderItemForCar: orderItem });
        }
    };

    const sendComment = async () => {
        setLoadingSendComment(true);
        setError("");
        try {
            const customerId = await validateTokenCustomer();
            if ('code' in customerId) {
                navigate('ClientLogin');
                return;
            }

            const comment = {
                customer: { id: customerId.id } as Customer,
                product: { id: productId } as Product,
                typeComment: "PRODUCT",
                title: titleComment,
                message: messageComment,
                rate: ratingComment
            } as Comment;

            const result = await create(comment);
            if (result instanceof Boolean) {
                ToastAndroid.show('Comentário enviado!', ToastAndroid.SHORT);
                replace("DetailsProduct", { id: productId });
                return;
            }
            setError(result.message);
            setFields(result.errorFields?.map(field => field.description) || []);
        } catch (error) {
            setError('Erro ao carregar serviço. Verifique a conexão.');
        } finally {
            setLoadingSendComment(false);
        }
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

    if (loadingProduct) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <ActivityIndicator size="large" color="#256489" style={{ marginTop: 50 }} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <Title text="Serviço" />
                {product && (
                    <View style={styles.card}>
                        <Image source={{ uri: product.pathImage }} style={styles.servicoImage} resizeMode="cover" />
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>{product.name}</Text>
                        </View>
                        <View style={styles.precoContainer}>
                            <Text style={styles.precoLabel}>A partir de</Text>
                            <Text style={styles.servicoPreco}>R$ {product.price}</Text>
                        </View>
                        <View style={styles.descricaoTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderText}>Descrição</Text>
                            </View>
                            <View style={styles.tableBody}>
                                <Text style={styles.descricaoText}>{product.description}</Text>
                            </View>
                        </View>
                        <View style={styles.ratingContainer}>
                            <View style={styles.ratingStarsContainer}>
                                {renderStars(product.rate)}
                                <Text style={styles.ratingText}>{product.rate.toFixed(1)}</Text>
                                <Text style={styles.reviewsText}>{totalComments} avaliações</Text>
                            </View>
                        </View>
                        {error && <Text style={{ color: 'red', marginBottom: 8 }}>{error}</Text>}
                    </View>
                )}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.addCardButton} onPress={addProductToCar}>
                        <Text style={styles.addCardButtonText}>ADICIONAR AO CARRINHO</Text>
                        <Image source={require('../../assets/images/check.png')} style={styles.checkIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.commentsContainer}>
                    <Text style={styles.titleCommentMain}>Ver comentários</Text>
                    <TouchableOpacity onPress={() => navigate("SearchCommentByProduct", { productId: productId, rate: product.rate, totalCommments: totalComments })}>
                        {comments.map(comment => (
                            <View key={comment.id} style={styles.commentCard}>
                                <View style={styles.commentHeader}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.image} source={{ uri: comment.customer.pathImage }} />
                                        <Text style={styles.commentAuthor}>{comment.customer.name}</Text>
                                    </View>
                                    <View style={styles.commentRating}>{renderStars(comment.rate)}</View>
                                </View>
                                <Text style={styles.commentAuthor}>{comment.title}</Text>
                                <Text style={styles.commentText}>{comment.message}</Text>
                                <Text style={styles.commentDate}>{comment.activationStatus.creationDate}</Text>
                            </View>
                        ))}
                    </TouchableOpacity>
                    {error && <Text style={{ color: 'red', marginBottom: 8 }}>{error}</Text>}

                    <View style={styles.commentContainer}>
                        <Text style={styles.titleComment}>Deixe seu comentário</Text>
                        <Input label="Título" placeholder="Digite o título aqui" keyboardType='default' value={titleComment} onChangeText={setTitleComment} />
                        <InputDescription label="Mensagem" keyboardType='default' placeholder="Descreva sua experiência" value={messageComment} onChangeText={setMessageComment} />
                        <StarRatingInput onChange={setRatingComment} />

                        <ButtonLarge
                            icon={require('../../assets/icons/send.png')}
                            text={loadingSendComment ? "Enviando..." : "Enviar"}
                            color="#256489"
                            width='45%'
                            action={sendComment}
                        />

                        {error ? (
                            <View style={{ marginVertical: 10, alignSelf: 'center' }}>
                                <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
                            </View>
                        ) : null}
                    </View>
                </View>
            </ScrollView>
            <NavigationBar initialTab='servicos' />
        </SafeAreaView>
    );
};
