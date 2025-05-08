import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Alert } from 'react-native';

import styles from './style';

type TabType = 'home' | 'loja' | 'servicos' | 'perfil';

const VisualizarServico = () => {
  const [activeTab, setActiveTab] = useState<TabType>('servicos');
  const [showComments, setShowComments] = useState<boolean>(false);

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
          onPress: () => console.log("Serviço agendado") 
        }
      ]
    );
  };

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
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image 
            source={require('../../assets/images/voltar.png')} 
            style={styles.backIcon} 
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>SERVIÇOS</Text>
          <Image 
            source={require('../../assets/images/cachorro.png')} 
            style={styles.menuIcon} 
          />
        </View>
      </View>

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
            source={require('../../assets/images/banho-tosa.jpg')}
            style={styles.servicoImage}
            resizeMode="cover"
          />
          
          {/* Botão Banho e Tosa */}
          <View style={styles.horarioContainer}>
            <Text style={styles.horarioText}>Banho e Tosa</Text>
          </View>
          
          {/* Tabela de Descrição */}
          <View style={styles.descricaoTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Descrição</Text>
            </View>
            <View style={styles.tableBody}>
              <Text style={styles.descricaoText}>
                Oferecemos serviços completos de higiene para seu pet, com banho, secagem, 
                escovação, corte de unhas e tosa personalizada. Tudo feito com carinho e 
                por profissionais qualificados, garantindo conforto, bem-estar e aquele 
                cheirinho gostoso!
              </Text>
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
      <View style={styles.bottomNavigation}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setActiveTab('home')}
        >
          <View style={styles.navIconContainer}>
            {activeTab === 'home' && <View style={styles.activeIndicator} />}
            <Image 
              source={require('../../assets/images/home.png')} 
              style={styles.navIcon} 
            />
          </View>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setActiveTab('loja')}
        >
          <View style={styles.navIconContainer}>
            {activeTab === 'loja' && <View style={styles.activeIndicator} />}
            <Image 
              source={require('../../assets/images/carrinho.png')} 
              style={styles.navIcon} 
            />
          </View>
          <Text style={styles.navLabel}>Loja</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setActiveTab('servicos')}
        >
          <View style={styles.navIconContainer}>
            {activeTab === 'servicos' && <View style={styles.activeIndicator} />}
            <Image 
              source={require('../../assets/images/cachorro.png')} 
              style={styles.navIcon} 
            />
          </View>
          <Text style={styles.navLabel}>Serviços</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setActiveTab('perfil')}
        >
          <View style={styles.navIconContainer}>
            {activeTab === 'perfil' && <View style={styles.activeIndicator} />}
            <Image 
              source={require('../../assets/images/perfil.png')} 
              style={styles.navIcon} 
            />
          </View>
          <Text style={styles.navLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VisualizarServico;