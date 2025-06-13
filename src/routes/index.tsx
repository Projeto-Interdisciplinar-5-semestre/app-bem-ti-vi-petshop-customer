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
import { ShopScreen } from "../screens/ShopScreen"; // Importe a nova tela

type RootStackParamList = {
    ShopScreen: undefined;
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
    dog: require('../assets/images/cachorro.png'),
    shop: require('../assets/images/carrinho.png'), // Adicione o ícone do carrinho
};

export default function AppRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ShopScreen">
                {/* Tela do Carrinho como primeira tela */}
                <Stack.Screen 
                    name="ShopScreen" 
                    component={ShopScreen} 
                    options={{ 
                        header: () => <Header activateBackButton={false} title="CARRINHO" icon={headerIcons.shop}/>
                    }} 
                />

                {/* Tela NowPassword */}
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

                {/* Tela Home */}
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{ 
                        header: () => <Header activateBackButton={false} title="HOME" icon={headerIcons.home}/>
                    }} 
                />

                {/* Demais telas... */}
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
                        header: () => <Header activateBackButton={true} title="BUSCAR PET" icon={headerIcons.pet}/>
                    }} 
                />

                <Stack.Screen 
                    name="UpdateProfile" 
                    component={UpdateProfile} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="ATUALIZAR PERFIL" icon={headerIcons.profile}/>
                    }} 
                />

                <Stack.Screen 
                    name="SearchAppointment" 
                    component={SearchAppointment} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="BUSCAR AGENDAMENTO" icon={headerIcons.appointment}/>
                    }} 
                />

                <Stack.Screen 
                    name="SearchAppointment2" 
                    component={SearchAppointment2} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="BUSCAR AGENDAMENTO" icon={headerIcons.appointment}/>
                    }} 
                />

                <Stack.Screen 
                    name="DetailsAppointment" 
                    component={DetailsAppointment} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="DETALHES AGENDAMENTO" icon={headerIcons.appointment}/>
                    }} 
                />

                <Stack.Screen 
                    name="DetailsProduct" 
                    component={DetailsProduct} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="DETALHES PRODUTO" icon={headerIcons.shop}/>
                    }} 
                />

                <Stack.Screen 
                    name="DetailsService" 
                    component={DetailsService} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="DETALHES SERVIÇO" icon={headerIcons.appointment}/>
                    }} 
                />

                <Stack.Screen 
                    name="SearchOrder" 
                    component={SearchOrder} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="BUSCAR PEDIDO" icon={headerIcons.shop}/>
                    }} 
                />

                <Stack.Screen 
                    name="ShowProfile" 
                    component={ShowProfile} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="MEU PERFIL" icon={headerIcons.profile}/>
                    }} 
                />

                <Stack.Screen 
                    name="ShowServices" 
                    component={ShowServices} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="SERVIÇOS" icon={headerIcons.appointment}/>
                    }} 
                />

                <Stack.Screen 
                    name="ShowCategories" 
                    component={ShowCategories} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="CATEGORIAS" icon={headerIcons.shop}/>
                    }} 
                />

                <Stack.Screen 
                    name="ProductsByCategory" 
                    component={ProductsByCategory} 
                    options={{ 
                        header: () => <Header activateBackButton={true} title="PRODUTOS" icon={headerIcons.shop}/>
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}