import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './style';

type PorteType = {
  label: string;
  value: string;
};

const GerenciarPet = ({ titulo = "GERENCIAR" }: { titulo?: string }) => {
  const [nomePet, setNomePet] = useState<string>('');
  const [racaPet, setRacaPet] = useState<string>('');
  const [idadePet, setIdadePet] = useState<string>('');
  const [portePet, setPortePet] = useState<string>('');
  const [activeTab, setActiveTab] = useState('home');

  const portes: PorteType[] = [
    { label: 'Pequeno', value: 'pequeno' },
    { label: 'Médio', value: 'medio' },
    { label: 'Grande', value: 'grande' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
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
              source={require('../../assets/images/pet.png')} 
              style={styles.menuIcon} 
            />
          </View>
        </View>

        {/* Pet Info Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Informações do pet</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome do pet</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite o nome do pet"
            placeholderTextColor="#999"
            value={nomePet}
            onChangeText={setNomePet}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Raça do pet</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite a raça do pet"
            placeholderTextColor="#999"
            value={racaPet}
            onChangeText={setRacaPet}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Idade do Pet</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite a idade do pet"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={idadePet}
            onChangeText={setIdadePet}
          />
        </View>

        <View style={styles.porteGroup}>
          <Text style={styles.label}>Porte do pet</Text>
          <View style={styles.porteContainer}>
            {portes.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={[
                  styles.porteButton,
                  portePet === item.value && styles.porteButtonActive
                ]}
                onPress={() => setPortePet(item.value)}
              >
                <View style={styles.porteRadio}>
                  {portePet === item.value && <View style={styles.porteRadioSelected} />}
                </View>
                <Text style={styles.porteLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Submit Buttons */}
        <View style={styles.submitButtonsContainer}>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.submitButtonText}>DELETAR</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>ATUALIZAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
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
              source={require('../../assets/images/cachorro.png')} 
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
              source={require('../../assets/images/carrinho.png')} 
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

export default GerenciarPet;