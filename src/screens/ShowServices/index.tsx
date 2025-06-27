import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Error, Paginacao, Service } from '../../utils/Types';

import { NavigationBar } from '../../components/NavigationBar';
import { PaginationControls } from '../../components/PaginationControls';
import { Title } from '../../components/Title';
import { SearchInput } from '../../components/SearchInput';

import { search } from '../../api/service/search/search';
import { NavigationProps } from '../../routes/AppRoute';

import { styles } from './style';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';
import { useValidateToken } from '../../utils/UseValidateToken/UseValidateToken';
import { ErrorModal } from '../../components/ErrorModal';

export const ShowServices = () => {
    const { navigate } = useNavigation<NavigationProps>();
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [servicos, setServicos] = useState<Service[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [errorModalVisible, setErrorModalVisible] = useState(false);

    useValidateToken();
    hardwareBackPress(navigate, "Home");

    useEffect(() => {
        const buscarCategorias = async () => {
            try {
                const data: Paginacao<Service> | Error = await search(searchText, pageIndex);
                if ('code' in data) {
                    setError(data.message);
                    return;
                }
                setServicos(data.content);
                setTotalPages(data.totalPages);
            } catch {
                setError('Não foi possível atualizar. Verifique sua conexão.');
                setErrorModalVisible(true);
            }
        };

        buscarCategorias();
    }, [searchText, pageIndex]);

    const filteredServicos = servicos.filter(servico =>
        servico.name.toLowerCase().includes(searchText.toLowerCase())
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
            stars.push(<Image key={i} source={source} style={styles.starIcon} />);
        }
        return stars;
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <Title text="Veja nossos serviços" />

                <SearchInput
                    placeholder="Buscar serviços..."
                    searchText={searchText}
                    setSearchText={setSearchText}
                />

                <View style={styles.servicosContainer}>
                    {filteredServicos.map((servico) => (
                        <TouchableOpacity
                            onPress={() => navigate('DetailsService', { id: servico.id })}
                            key={servico.id}
                            style={styles.servicoCard}
                        >
                            <View style={styles.cardContent}>
                                <Image
                                    source={{ uri: servico.pathImage }}
                                    style={styles.servicoImage}
                                />

                                <View style={styles.servicoInfo}>
                                    <Text style={styles.servicoNome} numberOfLines={2}>{servico.name}</Text>

                                    <View style={styles.ratingStarsContainer}>
                                        {renderStars(servico.rate)}
                                        <Text style={styles.ratingText}>{servico.rate.toFixed(1)}</Text>
                                    </View>

                                    <View style={styles.precoContainer}>
                                        <Text style={styles.precoLabel}>A partir de</Text>
                                        <Text style={styles.servicoPreco}>R$ {servico.price}</Text>
                                    </View>
                                </View>

                                <Text style={styles.date}>
                                    {new Date(servico.activationStatus.creationDate).toLocaleDateString('pt-BR')}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
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
                onNext={() => setPageIndex(prev => prev + 1)}
                onPrev={() => setPageIndex(prev => prev - 1)}
            />

            <NavigationBar initialTab='servicos' />
        </SafeAreaView>
    );
};
