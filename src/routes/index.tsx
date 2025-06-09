import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Header } from "../components/Header";

// Importações de telas
import { Home } from "../screens/Home";
import { CreatePet } from "../screens/CreatePet";
import { SearchPet } from "../screens/SearchPet";
import { UpdateProfile } from "../screens/UpdateProfile";
import { ManagePet } from "../screens/ManagePet";
import { SearchAppointment } from "../screens/SearchAppointment";
import DetailsAppointment from "../screens/DetailsAppointment";
import SearchOrder from "../screens/SearchOrder";
import { ShowCategories } from "../screens/ShowCategories";
import { ShowProfile } from "../screens/ShowProfile";
import { ProductsByCategory } from "../screens/ProductsByCategory";
import { DetailsProduct } from "../screens/DetailsProduct";
import SearchAppointment2 from "../screens/SearchAppointment2";
import { ShowServices } from "../screens/ShowServices";
import { DetailsService } from "../screens/DetailsService";
import { ResetPassword } from "../screens/ResetPassword";

type RootStackParamList = {
    Home: undefined;
    CreatePet: undefined;
    ManagePet: undefined;
    SearchPet: undefined;
    UpdateProfile: undefined;
    SearchAppointment: undefined;
    SearchAppointment2: undefined;
    DetailsAppointment: { appointmentId: string };
    DetailsProduct: { productId: string };
    DetailsService: { serviceId: string };
    SearchOrder: undefined;
    ShowProfile: undefined;
    ShowServices: undefined;
    ShowCategories: undefined;
    ResetPassword: undefined;
    ProductsByCategory: { categoryId: string };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const headerIcons = {
    home: require('../assets/icons/home.png'),
    pet: require('../assets/images/pet.png'),
    profile: require('../assets/images/perfil.png'),
    appointment: require('../assets/images/agenda.png'),
    dog: require('../assets/images/cachorro.png')
};

export default function AppRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ResetPassword">
                {/* Tela de Reset Password sem Header */}
                <Stack.Screen 
                    name="ResetPassword" 
                    component={ResetPassword} 
                    options={{ 
                        headerShown: false // Isso remove o header completamente
                    }} 
                />

                {/* Demais telas com Header personalizado */}
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{ 
                        header: () => <Header activateBackButton={false} title="HOME" icon={headerIcons.home}/>
                    }} 
                />

                {/* ... (mantenha todas as outras telas exatamente como estão) ... */}
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}