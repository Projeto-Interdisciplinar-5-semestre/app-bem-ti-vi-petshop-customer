import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Agendamentos from './src/screens/Agendamentos';
import DetalheAgendamento from './src/screens/DetalheAgendamento';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Agendamentos">
        <Stack.Screen name="Agendamentos" component={Agendamentos} />
        <Stack.Screen name="DetalheAgendamento" component={DetalheAgendamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
