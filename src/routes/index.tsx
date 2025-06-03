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
import { ResetPassword } from "../screens/ResetPassword";  // <-- CORRETO: importação nomeada

// Tipagem para navegação
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

// Configuração dos ícones
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
            <Stack.Navigator initialRouteName="Home">
                {/* Tela Principal */}
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{ 
                        header: () => <Header activateBackButton={false} title="HOME" icon={headerIcons.home}/>
                    }} 
                />

                {/* Telas de Pets */}
                <Stack.Screen 
                    name="CreatePet" 
                    component={CreatePet} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="CADASTRAR PET" icon={headerIcons.pet}/>
                    }} 
                />

                <Stack.Screen 
                    name="ManagePet" 
                    component={ManagePet} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="GERENCIAR PET" icon={headerIcons.pet}/>
                    }} 
                />

                <Stack.Screen 
                    name="SearchPet" 
                    component={SearchPet} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="MEUS PETS" icon={headerIcons.dog}/>
                    }} 
                />

                {/* Telas de Perfil */}
                <Stack.Screen 
                    name="UpdateProfile" 
                    component={UpdateProfile} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="EDITAR PERFIL" icon={headerIcons.profile}/>
                    }} 
                />

                <Stack.Screen 
                    name="ShowProfile" 
                    component={ShowProfile} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="MEU PERFIL" icon={headerIcons.profile}/>
                    }} 
                />

                {/* Telas de Agendamento */}
                <Stack.Screen 
                    name="SearchAppointment" 
                    component={SearchAppointment} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="AGENDAMENTOS" icon={headerIcons.appointment}/>
                    }} 
                />

                <Stack.Screen 
                    name="SearchAppointment2" 
                    component={SearchAppointment2} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="AGENDAMENTOS" icon={headerIcons.appointment}/>
                    }} 
                />

                <Stack.Screen 
                    name="DetailsAppointment" 
                    component={DetailsAppointment} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="DETALHES" icon={headerIcons.appointment}/>
                    }} 
                />

                {/* Telas de Produtos/Serviços */}
                <Stack.Screen 
                    name="SearchOrder" 
                    component={SearchOrder} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="MEUS PEDIDOS" icon={headerIcons.home}/>
                    }} 
                />

                <Stack.Screen 
                    name="ShowCategories" 
                    component={ShowCategories} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="CATEGORIAS" icon={headerIcons.home}/>
                    }} 
                />

                <Stack.Screen 
                    name="ShowServices" 
                    component={ShowServices} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="SERVIÇOS" icon={headerIcons.dog}/>
                    }} 
                />

                <Stack.Screen 
                    name="ProductsByCategory" 
                    component={ProductsByCategory} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="PRODUTOS" icon={headerIcons.home}/>
                    }} 
                />

                <Stack.Screen 
                    name="DetailsProduct" 
                    component={DetailsProduct} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="DETALHES" icon={headerIcons.home}/>
                    }} 
                />

                <Stack.Screen 
                    name="DetailsService" 
                    component={DetailsService} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="DETALHES" icon={headerIcons.dog}/>
                    }} 
                />

                {/* Tela de Reset Password */}
                <Stack.Screen 
                    name="ResetPassword" 
                    component={ResetPassword} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="REDEFINIR SENHA" icon={headerIcons.home}/>
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}