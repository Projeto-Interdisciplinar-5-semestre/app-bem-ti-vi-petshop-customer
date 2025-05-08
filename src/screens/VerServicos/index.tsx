import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, TextInput } from 'react-native';
import styles from './style';

type ServicoType = {
  id: number;
  nome: string;
  preco: string;
  imagem: any;
};

const VerServicos = ({ titulo = "   SERVIÇOS" }: { titulo?: string }) => {
  const [activeTab, setActiveTab] = useState('servicos');
  const [searchText, setSearchText] = useState('');
  const [servicos] = useState<ServicoType[]>([
    { 
      id: 1, 
      nome: 'Vacinação em Cães e Gatos', 
      preco: '29,99',
      imagem: require('../../assets/images/vacinacao.jpg')
    },
    { 
      id: 2, 
      nome: 'Banho e Tosa', 
      preco: '49,99',
      imagem: require('../../assets/images/tosa.png')
    },
    { 
      id: 3, 
      nome: 'Corte de Unhas', 
      preco: '19,99',
      imagem: require('../../assets/images/corte.jpg')
    },
    { 
      id: 4, 
      nome: 'Banho Completo', 
      preco: '39,99',
      imagem: require('../../assets/images/banho-tosa.jpg')
    },
  ]);

  const filteredServicos = servicos.filter(servico =>
    servico.nome.toLowerCase().includes(searchText.toLowerCase())
  );

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

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{titulo}</Text>
            <Image 
              source={require('../../assets/images/cachorro.png')} 
              style={styles.menuIcon} 
            />
          </View>
        </View>

        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Nossos Serviços</Text>
        </View>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Image 
            source={require('../../assets/images/busca.png')} 
            style={styles.searchIcon} 
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar serviço"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Lista de Serviços */}
        <View style={styles.servicosContainer}>
          {filteredServicos.map((servico) => (
            <View key={servico.id} style={styles.servicoCard}>
              <View style={styles.cardContent}>
                <Image 
                  source={servico.imagem} 
                  style={styles.servicoImage}
                />
                <View style={styles.servicoInfo}>
                  <Text style={styles.servicoNome} numberOfLines={2}>{servico.nome}</Text>
                  <View style={styles.precoContainer}>
                    <Text style={styles.precoLabel}>A partir de</Text>
                    <Text style={styles.servicoPreco}>R$ {servico.preco}</Text>
                  </View>
                </View>
                <Text style={styles.commentText}>
                  O serviço de banho e tosa simples foi excelente! Meu pet ficou muito mais limpo e confortável, e a tosa higiênica foi feita com cuidado. Ele está muito mais feliz e cheiroso agora!
                </Text>
                <Text style={styles.commentDate}>12/05/2023</Text>
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

export default VerServicos;
