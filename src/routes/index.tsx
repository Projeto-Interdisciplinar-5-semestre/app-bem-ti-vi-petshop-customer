import React, { useState } from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Header } from '../components/Header';
import { Home } from "../screens/Home";
import { ShopScreen } from "../screens/ShopScreen";
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

type RootStackParamList = {
    ShopScreen: { cartCount: number };
    Home: undefined;
    CreatePet: undefined;
    ManagePet: undefined;
    SearchPet: undefined;
    UpdateProfile: undefined;
    SearchAppointment: undefined;
    SearchAppointment2: undefined;
    DetailsAppointment: { appointmentId: string };
    DetailsProduct: { productId: number };
    DetailsService: { serviceId: number };
    SearchOrder: undefined;
    ShowProfile: undefined;
    ShowServices: undefined;
    ShowCategories: undefined;
    ProductsByCategory: { categoryId: number };
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, "ShopScreen">;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoute() {
    const [cartCount, setCartCount] = useState(0);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ShopScreen">
                <Stack.Screen
                    name="ShopScreen"
                    component={ShopScreen}
                    initialParams={{ cartCount: 0 }}
                    options={({ navigation, route }) => ({
                        header: () => (
                            <Header 
                                title="LOJA"
                                navigation={navigation}
                                showCart={true}
                                cartCount={route.params?.cartCount || 0}
                                onCartPress={() => navigation.navigate('SearchOrder')}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="HOME"
                                icon={require('../assets/images/home.png')}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="CreatePet"
                    component={CreatePet}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="CADASTRAR PET"
                                icon={require('../assets/images/pet.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="ManagePet"
                    component={ManagePet}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="GERENCIAR PET"
                                icon={require('../assets/images/pet.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="SearchPet"
                    component={SearchPet}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="BUSCAR PET"
                                icon={require('../assets/images/cachorro.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="UpdateProfile"
                    component={UpdateProfile}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="ATUALIZAR PERFIL"
                                icon={require('../assets/images/perfil.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="ShowProfile"
                    component={ShowProfile}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="MEU PERFIL"
                                icon={require('../assets/images/perfil.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="SearchAppointment"
                    component={SearchAppointment}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="AGENDAMENTOS"
                                icon={require('../assets/images/agenda.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="SearchAppointment2"
                    component={SearchAppointment2}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="AGENDAMENTOS"
                                icon={require('../assets/images/agenda.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="DetailsAppointment"
                    component={DetailsAppointment}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="DETALHES AGENDAMENTO"
                                icon={require('../assets/images/agenda.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="SearchOrder"
                    component={SearchOrder}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="MEUS PEDIDOS"
                                icon={require('../assets/icons/home.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="ShowCategories"
                    component={ShowCategories}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="CATEGORIAS"
                                icon={require('../assets/icons/home.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="ShowServices"
                    component={ShowServices}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="SERVIÇOS"
                                icon={require('../assets/images/cachorro.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="ProductsByCategory"
                    component={ProductsByCategory}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="PRODUTOS"
                                icon={require('../assets/icons/home.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="DetailsProduct"
                    component={DetailsProduct}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="DETALHES PRODUTO"
                                icon={require('../assets/icons/home.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />

                <Stack.Screen
                    name="DetailsService"
                    component={DetailsService}
                    options={({ navigation }) => ({
                        header: () => (
                            <Header
                                title="DETALHES SERVIÇO"
                                icon={require('../assets/images/cachorro.png')}
                                activateBackButton={true}
                                navigation={navigation}
                            />
                        )
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}