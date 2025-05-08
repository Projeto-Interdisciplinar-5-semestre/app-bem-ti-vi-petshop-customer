import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Alert, TextInput, ImageBackground } from 'react-native';
import styles from './style';

type PetType = {
  id: number;
  nome: string;
  raca: string;
  telefone: string;
  imagem: any;
};

const ListarPets = ({ titulo = "   CLIENTES" }: { titulo?: string }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchText, setSearchText] = useState('');
  const [pets] = useState<PetType[]>([
    { 
      id: 1, 
      nome: 'Bolinha', 
      raca: 'Siamês', 
      telefone: '(11) 9999-8888',
      imagem: require('../../assets/images/gato.jpg')
    },
    { 
      id: 2, 
      nome: 'Thor', 
      raca: 'Husky Siberiano', 
      telefone: '(11) 9876-5432',
      imagem: require('../../assets/images/husky.jpg')
    },
    { 
      id: 3, 
      nome: 'Minnie', 
      raca: 'Sírio', 
      telefone: '(11) 9123-4567',
      imagem: require('../../assets/images/hamster.jpg')
    },
  ]);

  const filteredPets = pets.filter(pet =>
    pet.nome.toLowerCase().includes(searchText.toLowerCase()) ||
    pet.raca.toLowerCase().includes(searchText.toLowerCase())
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
          
          {/* Nome do Serviço */}
          <Text style={styles.servicoNome}>Banho e Tosa</Text>
          
          {/* Horário centralizado com ícone à esquerda */}
          <View style={styles.horarioContainer}>
            <Image 
              source={require('../../assets/images/pet.png')} 
              style={styles.menuIcon} 

            />
            <Text style={styles.horarioText}>14:00</Text>
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
        </View>

        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Olá, Ana!</Text>
          <Text style={styles.subtitle}>Seus Pets Cadastrados</Text>
        </View>

        {/* Botão Cadastrar */}
        <TouchableOpacity style={styles.cadastrarButton}>
          <Image 
            source={require('../../assets/images/adicionar.png')} 
            style={styles.cadastrarButtonIcon} 
          />
          <Text style={styles.cadastrarButtonText}>CADASTRAR</Text>
        </TouchableOpacity>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Image 
            source={require('../../assets/images/busca.png')} 
            style={styles.searchIcon} 
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar pet"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Lista de Pets */}
        <View style={styles.petsContainer}>
          {filteredPets.map((pet) => (
            <View key={pet.id} style={styles.petCard}>
              <View style={styles.petContent}>
                <ImageBackground 
                  source={pet.imagem} 
                  style={styles.petImage}
                  imageStyle={styles.petImageStyle}
                >
                  <View style={styles.imageOverlay} />
                </ImageBackground>
                
                <View style={styles.petInfo}>
                  <Text style={styles.petLabel}>Nome</Text>
                  <Text style={styles.petValue} numberOfLines={1} ellipsizeMode="tail">{pet.nome}</Text>
                  
                  <Text style={styles.petLabel}>Raça</Text>
                  <Text style={styles.petValue} numberOfLines={1} ellipsizeMode="tail">{pet.raca}</Text>
                  
                  <Text style={styles.petLabel}>Telefone</Text>
                  <Text style={styles.petValue} numberOfLines={1} ellipsizeMode="tail">{pet.telefone}</Text>
                </View>
              </View>
              
              <View style={styles.petActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Image 
                    source={require('../../assets/images/olhos.png')} 
                    style={styles.actionIcon} 
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Image 
                    source={require('../../assets/images/configuracao.png')} 
                    style={styles.actionIcon} 
                  />
                </TouchableOpacity>
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

export default ListarPets;
