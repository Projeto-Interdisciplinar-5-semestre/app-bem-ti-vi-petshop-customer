import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, View, Text, ActivityIndicator, BackHandler, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { PaginationControls } from '../../components/PaginationControls';
import { NavigationBar } from '../../components/NavigationBar';

import { validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';

import { NavigationProps } from '../../routes/AppRoute';

import { useValidateToken } from '../../utils/UseValidateToken/UseValidateToken';
import { Comment } from '../../utils/Types';

import { styles } from './style';
import { searchByService } from '../../api/comments/search/searchByService';
import { ErrorModal } from '../../components/ErrorModal';

export function SearchCommentByService() {
    const { navigate, goBack } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { serviceId: serviceId, rate: rateService, totalComments: total } = route.params as { serviceId: string, rate: number, totalComments: number };

    const [comments, setComments] = useState<Comment[]>([]);
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [error, setError] = useState<string>('');
    const [fields, setFields] = useState<string[]>([]);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [totalComments, setTotalComments] = useState<number>(total);

    useValidateToken();
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            goBack();
            return true;
        });

        return () => backHandler.remove();
    }, []);

    useEffect(() => {
        async function loadOrders() {
            setLoading(true);
            try {
                const customerId = await validateTokenCustomer();
                if ('code' in customerId) {
                    navigate('ClientLogin');
                    return;
                }

                const data = await searchByService(serviceId, pageIndex);

                if ('content' in data && 'totalPages' in data) {
                    setComments(data.content);
                    setTotalPages(data.totalPages);
                    setError('');
                    setFields([]);
                } else {
                    setComments([]);
                    setError(data.message || 'Erro desconhecido.');
                    setFields(data.errorFields?.map(field => field.description) || []);
                    setErrorModalVisible(true);
                }
            } catch {
                setComments([]);
                setError('Não foi possível carregar os comentários. Verifique sua conexão.');
                setErrorModalVisible(true);
            } finally {
                setLoading(false);
            }
        }

        loadOrders();
    }, [pageIndex, navigate]);

    const handleNextPage = () => {
        if (pageIndex + 1 < totalPages) setPageIndex(prev => prev + 1);
    };

    const handlePrevPage = () => {
        if (pageIndex > 0) setPageIndex(prev => prev - 1);
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
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.ratingTitle}>Veja avaliações deste serviço</Text>
            <View style={styles.ratingContainer}>
                <View style={styles.ratingStarsContainer}>
                    {renderStars(rateService)}
                    <Text style={styles.ratingText}>{rateService.toFixed(1)}</Text>
                    <Text style={styles.reviewsText}>{totalComments} avaliações</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>

                <View style={styles.itemContainer}>
                    {loading ? (
                        <ActivityIndicator size="large" color="#256489" style={{ marginTop: 20 }} />
                    ) : comments.length > 0 ? (
                        comments.map(comment => (
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
                        ))
                    ) : (
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum comentário encontrado.</Text>
                    )}
                </View>

                <ErrorModal
                    visible={errorModalVisible}
                    error={error}
                    fields={fields}
                    onClose={() => setErrorModalVisible(false)}
                />
            </ScrollView>

            <PaginationControls
                pageIndex={pageIndex}
                totalPages={totalPages}
                onNext={handleNextPage}
                onPrev={handlePrevPage}
            />

            <NavigationBar initialTab="home" />
        </SafeAreaView>
    );
}
