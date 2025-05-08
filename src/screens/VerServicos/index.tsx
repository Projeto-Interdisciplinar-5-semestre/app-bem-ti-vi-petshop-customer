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
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Image 
              source={require('../../assets/images/voltar.png')} 
              style={styles.backIcon} 
            />
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
              </View>
            </View>
          ))}
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
          onPress={() => setActiveTab('comprar')}
        >
          <View style={styles.navIconContainer}>
            {activeTab === 'comprar' && <View style={styles.activeIndicator} />}
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