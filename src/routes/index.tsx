import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Header } from "../components/Header";

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
import DetailsAppointmentAdm from "../screens/DetailsAppointmentAdm";
import ClientLogin from "../screens/ClientLogin";
import ClientRegister from "../screens/ClientRegister";
import ClientBot from "../screens/ClientBot";  


type RootStackParamList = {
    Home: undefined;
    CreatePet: undefined;
    ManagePet: undefined;
    SearchPet: undefined;
    UpdateProfile: undefined;
    SearchAppointment: undefined;
    SearchAppointment2: undefined;
    DetailsAppointment: undefined;
    DetailsProduct: undefined;
    DetailsService: undefined;
    SearchOrder: undefined;
    ShowProfile: undefined;
    ShowServices: undefined;
    ShowCategories: undefined;
    ProductsByCategory: undefined;
    DetailsAdm: undefined;
    DetailsAppointmentAdm: undefined;
    ClientLogin: undefined;
    ClientRegister: undefined;
    ClientBot: undefined; 
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const Stack = createNativeStackNavigator();

export default function AppRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ClientBot">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={() => ({
                        header: () => <Header activateBackButton={false} title="HOME" icon={require('../assets/icons/home.png')} />
                    })}
                />
               

                <Stack.Screen
                    name="ClientBot"
                    component={ClientBot}
                    options={() => ({
                        header: () => <Header activateBackButton={true} title="CHAT" icon={require('../assets/images/chat.png')} />
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
