import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Product } from './src/screens/Product'
import { useFonts } from 'expo-font';
import {ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Black': require('./src/assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <Product />
      <StatusBar style="auto" />
    </>
  );
}
