import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Alert } from 'react-native';

import { NavigationBar } from '../../components/NavigationBar';

import { styles } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps } from '../../routes/AppRoute';
import { findById } from '../../api/service/search/findById';
import { Service } from '../../utils/Types';
import { validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';
import { createAppointment } from '../../api/appointment/create/createAppointment';

export const DetailsService = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const route = useRoute();
  const { id: serviceId } = route.params as { id: string };


  const [showComments, setShowComments] = useState<boolean>(false);
  const [servico, setServico] = useState<Service>();
  useEffect(() => {
    const buscarServico = async () => {
      try {
        const data = await findById(serviceId);
        if (!data) {
          throw new Error("Erro ao buscar dados do serviço");
        }
        setServico(data)
      } catch (erro) {
        console.error("Erro ao buscar categorias:", erro);
        Alert.alert("Erro", "Não foi possível carregar os dados do serviço.");
      }
    };

    buscarServico();
  }, [serviceId]);

  const handleAgendar = () => {
    Alert.alert(
      "Agendar Serviço",
      "Deseja agendar o serviço de Banho e Tosa?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Agendar", 
          onPress: () => scheduleService()
        }
      ]
    );
  };

const scheduleService = async () => {
  try {
    const customerId = await validateTokenCustomer()

    if (!customerId) {
      Alert.alert("Erro", "Usuário não autenticado.")
      return
    }

    const result = await createAppointment(serviceId, customerId.id)

    if (result) {
      Alert.alert("Sucesso", "Serviço agendado com sucesso!")
    }else{
      Alert.alert("Erro", "Falha ao agendar o serviço.")
    }
  } catch (error) {
    console.error("Erro ao agendar serviço:", error)
    Alert.alert("Erro", "Falha ao agendar o serviço.")
  }
}

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={require('../../assets/images/estrela.png')}
          style={[
            styles.starIcon,
            i <= rating ? styles.filledStar : styles.emptyStar
          ]}
        />
      );
    }
    return stars;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Título "Meus Serviços" centralizado */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meus Serviços</Text>
          <View style={styles.divider} />
        </View>

        {/* Card do Serviço */}
        <View style={styles.card}>
          {/* Imagem em cima */}
          <Image
            source={{uri:servico?.pathImage}}
            style={styles.servicoImage}
            resizeMode="cover"
          />
          
          {/* Botão Banho e Tosa */}
          <View style={styles.horarioContainer}>
            <Text style={styles.horarioText}>{servico?.name}</Text>
          </View>
          
          {/* Tabela de Descrição */}
          <View style={styles.descricaoTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Descrição</Text>
            </View>
            <View style={styles.tableBody}>
              <Text style={styles.descricaoText}>{servico?.description}</Text>
            </View>
          </View>

          {/* Rating Section */}
          <View style={styles.ratingContainer}>
            <View style={styles.ratingStarsContainer}>
              {renderStars(4)}
              <Text style={styles.ratingText}>4,7</Text>
              <Text style={styles.reviewsText}>(15 avaliações)</Text>
            </View>
          </View>

          {/* Botão de Comentários */}
          <TouchableOpacity 
            style={styles.commentsButton} 
            onPress={toggleComments}
          >
            <Text style={styles.commentsButtonText}>
              {showComments ? '▲ Ocultar comentários' : '▼ Ver comentários'}
            </Text>
          </TouchableOpacity>

          {/* Comments Section */}
          {showComments && (
            <View style={styles.commentsContainer}>
              {/* Comment 1 */}
              <View style={styles.commentCard}>
                <View style={styles.commentHeader}>
                  <Text style={styles.commentAuthor}>Cairos Saira</Text>
                  <View style={styles.commentRating}>
                    {renderStars(5)}
                  </View>
                </View>
                <Text style={styles.commentText}>
                  O serviço de banho e tosa simples foi excelente! Meu pet ficou muito mais limpo e confortável, e a tosa higiênica foi feita com cuidado. Ele está muito mais feliz e cheiroso agora!
                </Text>
                <Text style={styles.commentDate}>12/05/2023</Text>
              </View>

              {/* Comment 2 */}
              <View style={styles.commentCard}>
                <View style={styles.commentHeader}>
                  <Text style={styles.commentAuthor}>Laudo Norris</Text>
                  <View style={styles.commentRating}>
                    {renderStars(4)}
                  </View>
                </View>
                <Text style={styles.commentText}>
                  Fiquei muito satisfeito com o banho e tosa simples. O atendimento foi atencioso e o banho muito cuidado. A tosa ficou perfeita.
                </Text>
                <Text style={styles.commentDate}>05/05/2023</Text>
              </View>
            </View>
          )}
        </View>

        {/* Botão Agendar Serviço */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.agendarButton} 
            onPress={handleAgendar}
          >
            <Text style={styles.agendarButtonText}>AGENDAR SERVIÇO</Text>
            <Image 
              source={require('../../assets/images/check.png')} 
              style={styles.checkIcon} 
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Navegação Inferior */}
      <NavigationBar initialTab='servicos'/>
    </SafeAreaView>
  );
};