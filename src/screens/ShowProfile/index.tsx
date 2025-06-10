import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, Alert } from 'react-native';
import { styles } from './style';
import { NavigationBar } from '../../components/NavigationBar';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NavigationProps } from "../../routes/AppRoute";
import { CustomerId, validateTokenCustomer } from '../../api/auth/validateTokenCustomer/validateTokenCustomer';

export const ShowProfile = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const [customerId, setCustomerId] = useState('');
  const [activeTab, setActiveTab] = useState('perfil');

    useEffect(() => {
        async function loadCustomerId() {
            try {
              
                const usuarioId: CustomerId | undefined = await validateTokenCustomer();
                if (usuarioId == undefined) {
                    Alert.alert("Atenção!", "Você foi deslogado!")
                    navigate("Teste");
                } else {
                    setCustomerId(usuarioId.id)
                }
            } catch (error) {
                console.error('Erro ao carregar o usuário:', error);
            }
        }
        loadCustomerId();
    }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image 
            source={require('../../assets/images/girl.png')} 
            style={styles.profileImage} 
          />
          <Text style={styles.profileLabel}>Cliente</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          {/* Menu Items */}
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <Image source={require('../../assets/images/ver.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Ver Meus Dados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7} onPress={()=> navigate('UpdateProfile',{id:customerId})}>
              <Image source={require('../../assets/images/editar.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <Image source={require('../../assets/images/password.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Alterar senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7} onPress={()=> navigate('SearchPet',{id:customerId})}>
              <Image source={require('../../assets/images/pet.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Pets Cadastrados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7} onPress={()=> navigate('SearchOrder', {id:customerId})}>
              <Image source={require('../../assets/images/produto.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Histórico de Pedidos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7} onPress={()=>navigate('SearchAppointment',{id:customerId})}>
              <Image source={require('../../assets/images/cachorro.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Histórico de Serviços</Text>
            </TouchableOpacity>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton}>
            <Image source={require('../../assets/images/logout.png')} style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Deslogar Perfil</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      
      <NavigationBar initialTab='perfil'/>    
      </SafeAreaView>
  );
};
