import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from './style';

const TelaPerfil = () => {
  const [activeTab, setActiveTab] = React.useState('perfil');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>PERFIL</Text>
            <Image 
              source={require('../../assets/images/perfil.png')} 
              style={styles.menuIcon} 
            />
          </View>
        </View>

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

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <Image source={require('../../assets/images/editar.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <Image source={require('../../assets/images/password.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Alterar senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <Image source={require('../../assets/images/pet.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Pets Cadastrados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
              <Image source={require('../../assets/images/produto.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Histórico de Pedidos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
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
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('home')}>
          <View style={styles.navIconContainer}>
            {activeTab === 'home' && <View style={styles.activeIndicator} />}
            <Image source={require('../../assets/images/home.png')} style={styles.navIcon} />
          </View>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('loja')}>
          <View style={styles.navIconContainer}>
            {activeTab === 'loja' && <View style={styles.activeIndicator} />}
            <Image source={require('../../assets/images/carrinho.png')} style={styles.navIcon} />
          </View>
          <Text style={styles.navLabel}>Comprar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('servicos')}>
          <View style={styles.navIconContainer}>
            {activeTab === 'servicos' && <View style={styles.activeIndicator} />}
            <Image source={require('../../assets/images/cachorro.png')} style={styles.navIcon} />
          </View>
          <Text style={styles.navLabel}>Serviços</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => setActiveTab('perfil')}>
          <View style={styles.navIconContainer}>
            {activeTab === 'perfil' && <View style={styles.activeIndicator} />}
            <Image source={require('../../assets/images/perfil.png')} style={styles.navIcon} />
          </View>
          <Text style={styles.navLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TelaPerfil;