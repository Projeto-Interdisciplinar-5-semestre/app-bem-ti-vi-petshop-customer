import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Produto } from './src/screens/Home/Produto';

export default function App() {
  return (
    <>
      <Produto />
      <StatusBar style="auto" />
    </>
  );
}
