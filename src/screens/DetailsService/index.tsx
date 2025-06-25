import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    ToastAndroid,
    ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Comment, Customer, Service } from '../../utils/Types';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { searchByService } from '../../api/comments/search/searchByService';
import { validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { findById } from '../../api/service/search/findById';
import { create } from '../../api/comments/create/create';

import { NavigationBar } from '../../components/NavigationBar';
import { Title } from '../../components/Title';
import { InputDescription } from '../../components/InputDescription';
import { Input } from '../../components/Input';
import { ButtonLarge } from '../../components/ButtonLarge';
import { StarRatingInput } from '../../components/inputStar';

import { NavigationProps } from '../../routes/AppRoute';
import { styles } from './style';
import { useValidateToken } from '../../utils/UseValidateToken/UseValidateToken';
import { GLOBAL_VAR } from '../../api/config/globalVar';

export const DetailsService = () => {
    const { navigate, replace } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { id: serviceId } = route.params as { id: string };

    const [service, setService] = useState<Service>({} as Service);
    const [comments, setComments] = useState<Comment[]>([]);
    const [totalComments, setTotalComments] = useState<number>(0);

    const [loadingService, setLoadingService] = useState(true);
    const [loadingSendComment, setLoadingSendComment] = useState(false);

    const [titleComment, setTitleComment] = useState('');
    const [messageComment, setMessageComment] = useState('');
    const [ratingComment, setRatingComment] = useState<number>(3);

    const [errors, setErrors] = useState<{ service?: string; comments?: string; sendComment?: string; fields?: string[] }>({});

    useValidateToken();
    hardwareBackPress(navigate, "ShowServices");

    const loadServiceData = async () => {
        setLoadingService(true);
        try {
            const serviceResult = await findById(serviceId);
            if ('code' in serviceResult) {
                setErrors(prev => ({ ...prev, service: serviceResult.message }));
                return;
            }
            setService(serviceResult);

            const commentsResult = await searchByService(serviceId, 0);
            if ('code' in commentsResult) {
                setErrors(prev => ({ ...prev, comments: commentsResult.message }));
                return;
            }

            setComments(commentsResult.content);
            setTotalComments(commentsResult.totalElements);

        } catch (error) {
            setErrors(prev => ({ ...prev, service: 'Erro ao carregar serviço. Verifique a conexão.' }));
        } finally {
            setLoadingService(false);
        }
    };

    useEffect(() => {
        loadServiceData();
    }, [serviceId]);

    const sendComment = async () => {
        setLoadingSendComment(true);
        setErrors({});
        try {
            const customerId = await validateTokenCustomer();
            if ('code' in customerId) {
                navigate('ClientLogin');
                return;
            }

            const comment = {
                customer: { id: customerId.id } as Customer,
                service: { id: serviceId } as Service,
                typeComment: "SERVICE",
                title: titleComment,
                message: messageComment,
                rate: ratingComment
            } as Comment;

            const result = await create(comment);
            if (result instanceof Boolean) {
                ToastAndroid.show('Comentário enviado!', ToastAndroid.SHORT);
                replace("DetailsService", { id: serviceId });
                return;
            }
            setErrors({ sendComment: result.message, fields: result.errorFields?.map(f => f.description) });
        } catch (error) {
            setErrors({ sendComment: 'Erro ao enviar comentário. Tente novamente.' });
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

    if (loadingService) {
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
                {service && (
                    <View style={styles.card}>
                        <Image source={{ uri: service.pathImage }} style={styles.servicoImage} resizeMode="cover" />
                        <View style={styles.horarioContainer}>
                            <Text style={styles.horarioText}>{service.name}</Text>
                        </View>
                        <View style={styles.precoContainer}>
                            <Text style={styles.precoLabel}>A partir de</Text>
                            <Text style={styles.servicoPreco}>R$ {service.price}</Text>
                        </View>
                        <View style={styles.descricaoTable}>
                            <View style={styles.tableHeader}>
                                <Text style={styles.tableHeaderText}>Descrição</Text>
                            </View>
                            <View style={styles.tableBody}>
                                <Text style={styles.descricaoText}>{service.description}</Text>
                            </View>
                        </View>
                        <View style={styles.ratingContainer}>
                            <View style={styles.ratingStarsContainer}>
                                {renderStars(service.rate)}
                                <Text style={styles.ratingText}>{service.rate.toFixed(1)}</Text>
                                <Text style={styles.reviewsText}>{totalComments} avaliações</Text>
                            </View>
                        </View>
                        {errors.service && <Text style={{ color: 'red', marginBottom: 8 }}>{errors.service}</Text>}
                    </View>
                )}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.agendarButton} onPress={() => navigate("ScheduleService", { service: service })}>
                        <Text style={styles.agendarButtonText}>Agende um horário</Text>
                        <Image source={require('../../assets/images/check.png')} style={styles.checkIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.commentsContainer}>
                    <Text style={styles.titleCommentMain}>Ver comentários</Text>
                    <TouchableOpacity onPress={() => navigate("SearchCommentByService", { serviceId: serviceId, rate: service.rate, totalCommments: totalComments })}>
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
                    {errors.comments && <Text style={{ color: 'red', marginBottom: 8 }}>{errors.comments}</Text>}

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
                    </View>
                </View>
            </ScrollView>
            <NavigationBar initialTab='servicos' />
        </SafeAreaView>
    );
};
