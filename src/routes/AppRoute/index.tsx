import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Header } from "../../components/Header";

import { Home } from "../../screens/Home";
import { CreatePet } from "../../screens/CreatePet";
import { SearchPet } from "../../screens/SearchPet";
import UpdateProfile from "../../screens/UpdateProfile";
import { ManagePet } from "../../screens/ManagePet";
import { SearchAppointment } from "../../screens/SearchAppointment";
import { SearchOrder } from "../../screens/SearchOrder";
import { ShowCategories } from "../../screens/ShowCategories";
import { ShowProfile } from "../../screens/ShowProfile";
import { ProductsByCategory } from "../../screens/ProductsByCategory";
import { DetailsProduct } from "../../screens/DetailsProduct";
import { ShowServices } from "../../screens/ShowServices";
import { DetailsService } from "../../screens/DetailsService";
import { ClientLogin } from "../../screens/ClientLogin";
import ClientRegister from "../../screens/ClientRegister";
import { ResetPassword } from "../../screens/ResetPassword";
import { NowPassword } from "../../screens/NowPassword";
import { CartProduct } from "../../screens/CartProduct";
import { CustomerDeactivated } from "../../screens/CustomerDeactivated";
import { AppointmentPayment } from "../../screens/AppointmentPayment";
import { Appointment, Order, OrderItemForCar, Service } from "../../utils/Types";
import { GLOBAL_VAR } from "../../api/config/globalVar";
import ConfirmationEmail from "../../screens/email/ConfirmationEmail";
import SendRequestConfirmationEmail from "../../screens/email/SendRequestConfirmationEmail";
import UpdateEmail from "../../screens/email/UpdateEmail";
import SendRequestChangeEmail from "../../screens/email/SendRequestChangeEmail";
import UpdatePassword from "../../screens/UpdatePassword";
import { OrderPayment } from "../../screens/OrderPayment";
import { ScheduleService } from "../../screens/ScheduleService";
import ShopScreen from "../../screens/ShopScreen";
import { HeaderCart } from "../../components/HeaderCart";


type RootStackParamList = {
    Home: undefined;
    CreatePet: { id: string };
    ManagePet: { id: string };
    SearchPet: undefined;
    UpdateProfile: undefined;
    SearchAppointment: undefined;
    DetailsProduct: { id: string };
    DetailsService: { id: string };
    SearchOrder: undefined;
    ShowProfile: undefined;
    ShowServices: undefined;
    ShowCategories: undefined;
    ProductsByCategory: { id: string };
    DetailsAdm: undefined;
    ClientLogin: undefined;
    ClientRegister: undefined;
    ResetPassword: { email: string };
    NowPassword: { email: string };
    CartProduct: { orderItemForCar: OrderItemForCar };
    CustomerDeactivated: undefined;
    AppointmentPayment: { appointment: Appointment };
    OrderPayment: { order: Order };
    SendRequestChangeEmail: { email: string };
    SendRequestConfirmationEmail: { email: string };
    UpdateEmail: { email: string };
    UpdatePassword: undefined;
    ConfirmationEmail: { email: string };
    ScheduleService: { service: Service };
    ShopScreen: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const Stack = createNativeStackNavigator();

export default function AppRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ClientLogin">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={() => ({
                        header: () => <Header activateBackButton={false} title="HOME" iconName="home" backScreen={null} needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="CreatePet"
                    component={CreatePet}
                    options={() => ({
                        header: () => <Header activateBackButton={true} title="CADASTRAR PET" iconName="pets" backScreen="SearchPet" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="ManagePet"
                    component={ManagePet}
                    options={() => ({
                        header: () => <Header activateBackButton={true} title="GERENCIAR PET" iconName="edit" backScreen="SearchPet" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="SearchPet"
                    component={SearchPet}
                    options={() => ({
                        header: () => <Header activateBackButton={true} title="MEUS PETS" iconName="pets" backScreen="ShowProfile" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="UpdateProfile"
                    component={UpdateProfile}
                    options={() => ({
                        header: () => <Header activateBackButton={true} title="EDITAR PERFIL" iconName="person" backScreen="ShowProfile" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="ShowProfile"
                    component={ShowProfile}
                    options={() => ({
                        header: () => <Header activateBackButton={false} title="PERFIL" iconName="account-circle" backScreen="Home" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="SearchAppointment"
                    component={SearchAppointment}
                    options={() => ({
                        header: () => <Header activateBackButton={true} title="AGENDAMENTOS" iconName="event" backScreen="ShowProfile" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="SearchOrder"
                    component={SearchOrder}
                    options={() => ({
                        header: () => <Header activateBackButton={true} title="PEDIDOS" iconName="shopping-bag" backScreen="ShowProfile" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="ShowCategories"
                    component={ShowCategories}
                    options={() => ({
                        header: () => <Header activateBackButton={true} title="CATEGORIAS" iconName="category" backScreen="ShopScreen" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="ShowServices"
                    component={ShowServices}
                    options={() => ({
                        header: () => <Header activateBackButton={false} title="SERVIÇOS" iconName="build" backScreen="Home" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="ProductsByCategory"
                    component={ProductsByCategory}
                    options={() => ({
                        header: () => <Header activateBackButton={true} title="PRODUTOS" iconName="shopping-cart" backScreen="ShopScreen" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="DetailsProduct"
                    component={DetailsProduct}
                    options={() => ({
                        header: () => <Header activateBackButton={true} title="DETALHES DO PRODUTO" iconName="info" backScreen="ShopScreen" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="DetailsService"
                    component={DetailsService}
                    options={() => ({
                        header: () => <Header activateBackButton={true} title="DETALHES DO SERVIÇO" iconName="info" backScreen="ShowServices" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="ClientLogin"
                    component={ClientLogin}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ClientRegister"
                    component={ClientRegister}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="NowPassword"
                    component={NowPassword}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="CustomerDeactivated"
                    component={CustomerDeactivated}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="CartProduct"
                    component={CartProduct}
                    options={() => ({
                        header: () => <Header activateBackButton={false} title="CARRINHO" iconName="shopping-cart" backScreen={"ShopScreen"} needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="OrderPayment"
                    component={OrderPayment}
                    options={() => ({
                        header: () => <Header activateBackButton={false} title="PAGAMENTO" iconName="payment" backScreen={"Home"} needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="AppointmentPayment"
                    component={AppointmentPayment}
                    options={() => ({
                        header: () => <Header activateBackButton={false} title="PAGAMENTO" iconName="payment" backScreen={"Home"} needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="UpdatePassword"
                    component={UpdatePassword}
                    options={() => ({
                        header: () => <Header title="ATUALIZAR SENHA" activateBackButton={true} iconName="lock-reset" backScreen="ShowProfile" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="SendRequestChangeEmail"
                    component={SendRequestChangeEmail}
                    options={() => ({
                        header: () => <Header title="ALTERAR EMAIL" activateBackButton={true} iconName="mail-outline" backScreen="ShowProfile" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="UpdateEmail"
                    component={UpdateEmail}
                    options={() => ({
                        header: () => <Header title="ATUALIZAR EMAIL" activateBackButton={true} iconName="alternate-email" backScreen="SendRequestChangeEmail" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="SendRequestConfirmationEmail"
                    component={SendRequestConfirmationEmail}
                    options={() => ({
                        header: () => <Header title="CONFIRMAR EMAIL" activateBackButton={true} iconName="mark-email-read" backScreen="ShowProfile" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="ConfirmationEmail"
                    component={ConfirmationEmail}
                    options={() => ({
                        header: () => <Header title="CONFIRMAR EMAIL" activateBackButton={true} iconName="mark-email-read" backScreen="SendRequestConfirmationEmail" needProps={true} props={{ email: GLOBAL_VAR.USER_EMAIL }} />
                    })}
                />

                <Stack.Screen
                    name="ScheduleService"
                    component={ScheduleService}
                    options={() => ({
                        header: () => <Header title="AGENDAR SERVIÇO" activateBackButton={true} iconName="event-available" backScreen="ShowServices" needProps={false} props={null} />
                    })}
                />

                <Stack.Screen
                    name="ShopScreen"
                    component={ShopScreen}
                    initialParams={{ cartCount: 0 }}
                    options={({ navigation }) => ({
                        header: () => (
                            <HeaderCart
                                title="LOJA"
                                navigation={navigation}
                                showCart={true}
                                cartCount={GLOBAL_VAR.CART_ITEMS}
                                onCartPress={() => navigation.navigate('CartProduct', {})}
                            />
                        )
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}