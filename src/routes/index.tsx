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
import { ReceivePassword } from "../screens/ReceivePassword";
import { NowPassword } from "../screens/NowPassword";

type RootStackParamList = {
    NowPassword: undefined;
    ReceivePassword: undefined;
    ResetPassword: undefined;
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
            <Stack.Navigator initialRouteName="NowPassword">
                {/* Tela NowPassword como primeira tela */}
                <Stack.Screen 
                    name="NowPassword" 
                    component={NowPassword} 
                    options={{ 
                        headerShown: false
                    }} 
                />

                {/* Tela de Receive Password */}
                <Stack.Screen 
                    name="ReceivePassword" 
                    component={ReceivePassword} 
                    options={{ 
                        headerShown: false
                    }} 
                />

                {/* Tela de Reset Password */}
                <Stack.Screen 
                    name="ResetPassword" 
                    component={ResetPassword} 
                    options={{ 
                        headerShown: false
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

                {/* ... outras telas ... */}
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}