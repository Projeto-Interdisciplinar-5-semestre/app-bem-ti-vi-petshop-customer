import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Produto } from './src/screens/Home/Produto';
import { Categoria } from './src/screens/Home/Categoria';

export default function App() {
  return (
    <>
      <Categoria />
      <StatusBar style="auto" />
    </>
  );
}
