import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { TelaPrincipal } from './src/screens/Home/TelaPrincipal';


export default function App() {
  return (
    <>
      <TelaPrincipal />
      <StatusBar style="auto" />
    </>
  );
}
