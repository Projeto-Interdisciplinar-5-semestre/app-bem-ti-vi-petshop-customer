import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Alert } from 'react-native';
import styles from './style';

const VisualizarServico = () => {
  const [activeTab, setActiveTab] = useState('servicos');

  const handleCancel = () => {
    Alert.alert(
      "Confirmar Cancelamento",
      "Tem certeza que deseja cancelar este serviço?",
      [
        {
          text: "Não",
          style: "cancel"
        },
        { 
          text: "Sim", 
          onPress: () => console.log("Serviço cancelado") 
        }
      ]
    );
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
          
          {/* Nome do Serviço */}
          <Text style={styles.servicoNome}>Banho e Tosa</Text>
          
          {/* Horário centralizado com ícone à esquerda */}
          <View style={styles.horarioContainer}>
            <Image 
              source={require('../../assets/images/relogio.png')} 
              style={styles.relogioIcon} 
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

        {/* Botão Cancelar estilizado (fora do card) */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.deleteButton} 
            onPress={handleCancel}
          >
            <Text style={styles.deleteButtonText}>CANCELAR</Text>
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