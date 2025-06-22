import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const NavigationBar = ({ navigation }: { navigation: any }) => {
  const tabs = [
    {
      id: 'home',
      icon: require('../../assets/images/home.png'),
      label: 'Home',
      screen: 'Home'
    },
    {
      id: 'loja',
      icon: require('../../assets/images/carrinho.png'),
      label: 'Loja',
      screen: 'ShopScreen'
    },
    {
      id: 'servicos',
      icon: require('../../assets/images/pet.png'),
      label: 'Serviços',
      screen: 'Services'
    },
    {
      id: 'perfil',
      icon: require('../../assets/images/perfil.png'),
      label: 'Perfil',
      screen: 'Profile'
    }
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tabButton}
          onPress={() => navigation.navigate(tab.screen)}
        >
          <Image source={tab.icon} style={styles.tabIcon} />
          <Text style={styles.tabLabel}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#ECF0F1',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabButton: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tabIcon: {
    width: 24,
    height: 24,
    tintColor: '#95A5A6',
    marginBottom: 4,
  },
  tabLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#95A5A6',
  },
});

export default NavigationBar;