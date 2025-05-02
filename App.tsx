import { StatusBar } from 'expo-status-bar';
import { TelaPrincipal }  from './src/screens/Home/TelaPrincipal';


export default function App() {
  return (
    <>
      <TelaPrincipal />
      <StatusBar style="auto" />
    </>
  );
}
