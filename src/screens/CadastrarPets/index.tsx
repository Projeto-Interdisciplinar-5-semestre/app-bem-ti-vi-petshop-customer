import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './style';

type PorteType = {
  label: string;
  value: string;
};

const CadastrarPet = ({ titulo = "CADASTRAR" }: { titulo?: string }) => {
  const [nomeTutor, setNomeTutor] = useState<string>('');
  const [telefoneTutor, setTelefoneTutor] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [logradouro, setLogradouro] = useState<string>('');
  const [bairro, setBairro] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [estado, setEstado] = useState<string>('');
  const [complemento, setComplemento] = useState<string>('');
  const [nomePet, setNomePet] = useState<string>('');
  const [racaPet, setRacaPet] = useState<string>('');
  const [idadePet, setIdadePet] = useState<string>('');
  const [portePet, setPortePet] = useState<string>('');
  const [activeTab, setActiveTab] = useState('home');
  const [showPetForm, setShowPetForm] = useState(false);

  const estados = [
    { label: ' ', value: '' },
    { label: 'AC', value: 'AC' },
    { label: 'AL', value: 'AL' },
    { label: 'AP', value: 'AP' },
    { label: 'AM', value: 'AM' },
    { label: 'BA', value: 'BA' },
    { label: 'CE', value: 'CE' },
    { label: 'DF', value: 'DF' },
    { label: 'ES', value: 'ES' },
    { label: 'GO', value: 'GO' },
    { label: 'MA', value: 'MA' },
    { label: 'MT', value: 'MT' },
    { label: 'MS', value: 'MS' },
    { label: 'MG', value: 'MG' },
    { label: 'PA', value: 'PA' },
    { label: 'PB', value: 'PB' },
    { label: 'PR', value: 'PR' },
    { label: 'PE', value: 'PE' },
    { label: 'PI', value: 'PI' },
    { label: 'RJ', value: 'RJ' },
    { label: 'RN', value: 'RN' },
    { label: 'RS', value: 'RS' },
    { label: 'RO', value: 'RO' },
    { label: 'RR', value: 'RR' },
    { label: 'SC', value: 'SC' },
    { label: 'SP', value: 'SP' },
    { label: 'SE', value: 'SE' },
    { label: 'TO', value: 'TO' },
  ];

  const portes: PorteType[] = [
    { label: 'Pequeno', value: 'pequeno' },
    { label: 'Médio', value: 'medio' },
    { label: 'Grande', value: 'grande' },
  ];

  const togglePetForm = () => {
    setShowPetForm(!showPetForm);
  };

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

        {/* Tutor Info Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Informações do tutor</Text>
          <View style={styles.divider} />
        </View>

        {/* Tutor Form Fields */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nome do Tutor</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite o nome do tutor"
            placeholderTextColor="#999"
            value={nomeTutor}
            onChangeText={setNomeTutor}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Telefone do Tutor</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite o telefone do tutor"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={telefoneTutor}
            onChangeText={setTelefoneTutor}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>CEP</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite o CEP"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={cep}
            onChangeText={setCep}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Logradouro</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite o logradouro"
            placeholderTextColor="#999"
            value={logradouro}
            onChangeText={setLogradouro}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Bairro</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite o bairro"
            placeholderTextColor="#999"
            value={bairro}
            onChangeText={setBairro}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Cidade</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite a cidade"
            placeholderTextColor="#999"
            value={cidade}
            onChangeText={setCidade}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Estado</Text>
          <View style={styles.pickerWrapper}>
            {!estado && (
              <Text style={styles.pickerPlaceholder}>
                Selecione o estado
              </Text>
            )}
            <Picker
              selectedValue={estado}
              onValueChange={setEstado}
              style={styles.picker}
            >
              {estados.map((item) => (
                <Picker.Item key={item.value} label={item.label} value={item.value} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Complemento</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite o complemento"
            placeholderTextColor="#999"
            value={complemento}
            onChangeText={setComplemento}
          />
        </View>

        {/* Styled Toggle Button */}
        <TouchableOpacity 
          style={styles.toggleButton} 
          onPress={togglePetForm}
        >
          <Image 
            source={require('../../assets/images/animais.png')} 
            style={styles.toggleIcon} 
          />
          <Text style={styles.toggleText}>
            {showPetForm ? 'Ocultar informações do pet' : 'Mostrar informações do pet'}
          </Text>
        </TouchableOpacity>

        {/* Pet Info Section */}
        {showPetForm && (
          <>
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
          </>
        )}

        {/* Submit Button */}
        <View style={styles.submitButtonWrapper}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>SALVAR</Text>
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

export default CadastrarPet;