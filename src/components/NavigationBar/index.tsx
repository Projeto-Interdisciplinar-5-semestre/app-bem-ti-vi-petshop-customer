import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const NavigationBar = ({ navigation }: { navigation: any }) => {
  const tabs = [
    {
      id: 'home',
      icon: require('../../assets/icons/home.png'),
      label: 'Home',
      screen: 'Home'
    },
    {
      id: 'loja',
      icon: require('../../assets/icons/shop.png'),
      label: 'Loja',
      screen: 'PetStore'
    },
    {
      id: 'servicos',
      icon: require('../../assets/icons/services.png'),
      label: 'Serviços',
      screen: 'Services'
    },
    {
      id: 'perfil',
      icon: require('../../assets/icons/profile.png'),
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
    fontSize: 12,
    color: '#95A5A6',
  },
});

export default NavigationBar;