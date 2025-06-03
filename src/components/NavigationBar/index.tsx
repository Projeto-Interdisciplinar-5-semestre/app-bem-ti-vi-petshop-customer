import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles } from "./style";

type RootStackParamList = {
  Home: undefined;
  Store: undefined;
  Services: undefined;
  Profile: undefined;
  ResetPassword: undefined;
};

type NavItemProps = {
  setActiveTab: () => void;
  activeTab: string;
  type: string;
  icon: any;
  text: string;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const NavigationBar = () => {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState('home');

  const handleTabPress = (tabName: keyof RootStackParamList) => {
    setActiveTab(tabName.toLowerCase());
    if (tabName === 'Store') {
      navigation.navigate('ResetPassword'); // Navega para ResetPassword ao clicar na Loja
    } else {
      navigation.navigate(tabName);
    }
  };

  return (
    <View style={styles.bottomNavigation}>
      <NavItem
        setActiveTab={() => handleTabPress('Home')}
        activeTab={activeTab}
        type="home"
        icon={require('../../assets/images/home.png')}
        text="Home"
      />
      <NavItem
        setActiveTab={() => handleTabPress('Store')}
        activeTab={activeTab}
        type="store"
        icon={require('../../assets/images/cachorro.png')}
        text="Loja"
      />
      <NavItem
        setActiveTab={() => handleTabPress('Services')}
        activeTab={activeTab}
        type="services"
        icon={require('../../assets/images/carrinho.png')}
        text="Serviços"
      />
      <NavItem
        setActiveTab={() => handleTabPress('Profile')}
        activeTab={activeTab}
        type="profile"
        icon={require('../../assets/images/perfil.png')}
        text="Perfil"
      />
    </View>
  );
};

const NavItem = ({ setActiveTab, activeTab, type, icon, text }: NavItemProps) => {
  return (
    <TouchableOpacity style={styles.navItem} onPress={setActiveTab}>
      <View style={styles.navIconContainer}>
        {activeTab === type && <View style={styles.activeIndicator} />}
        <Image source={icon} style={styles.navIcon} />
      </View>
      <Text style={styles.navLabel}>{text}</Text>
    </TouchableOpacity>
  );
};