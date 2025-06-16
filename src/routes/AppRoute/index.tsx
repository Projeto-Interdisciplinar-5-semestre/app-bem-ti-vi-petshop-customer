import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import { Header } from "../../components/Header";

import { Home } from "../../screens/Home";
import { CreatePet } from "../../screens/CreatePet";
import { SearchPet } from "../../screens/SearchPet";
import { UpdateProfile } from "../../screens/UpdateProfile";
import { ManagePet } from "../../screens/ManagePet";
import { SearchAppointment } from "../../screens/SearchAppointment";
import DetailsAppointment from "../../screens/DetailsAppointment";
import SearchOrder from "../../screens/SearchOrder";
import { ShowCategories } from "../../screens/ShowCategories";
import { ShowProfile } from "../../screens/ShowProfile";
import { ProductsByCategory } from "../../screens/ProductsByCategory";
import { DetailsProduct } from "../../screens/DetailsProduct";
import SearchAppointment2 from "../../screens/SearchAppointment2";
import { ShowServices } from "../../screens/ShowServices";
import { DetailsService } from "../../screens/DetailsService";
import DetailsAppointmentAdm from "../../screens/DetailsAppointmentAdm";
import ClientLogin from "../../screens/ClientLogin";
import ClientRegister from "../../screens/ClientRegister";
import { Teste } from "../../screens/Teste";

type RootStackParamList = {
    Teste: undefined;
    Home: undefined;
    CreatePet: { id : string };
    ManagePet: { id : string };
    SearchPet: { id : string };
    UpdateProfile: { id : string };
    SearchAppointment: { id : string };
    SearchAppointment2: undefined;
    DetailsAppointment: undefined;
    DetailsProduct: { id : string };
    DetailsService: { id : string };
    SearchOrder: { id : string };
    ShowProfile: undefined;
    ShowServices: undefined;
    ShowCategories: undefined;
    ProductsByCategory: { id : string };
    DetailsAdm: undefined; 
    DetailsAppointmentAdm: undefined;
    ClientLogin: undefined;
    ClientRegister: undefined;
    
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const Stack = createNativeStackNavigator();

export default function AppRoute() {
    return (
        <NavigationContainer>
           <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Teste" 
                    component={Teste} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={false} title="Teste" icon={require('../../assets/icons/home.png') }/>
                    })} 
                />
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={false} title="HOME" icon={require('../../assets/icons/home.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="CreatePet" 
                    component={CreatePet} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="CADASTRAR" icon={require('../../assets/images/pet.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="ManagePet" 
                    component={ManagePet} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="GERENCIAR" icon={require('../../assets/images/pet.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="SearchPet" 
                    component={SearchPet} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="PETS" icon={require('../../assets/images/cachorro.png') }/>
                    })} 
                />


                <Stack.Screen 
                    name="UpdateProfile" 
                    component={UpdateProfile} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="EDITAR" icon={require('../../assets/images/perfil.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="ShowProfile" 
                    component={ShowProfile} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="PERFIL" icon={require('../../assets/images/perfil.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="SearchAppointment" 
                    component={SearchAppointment} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="AGENDAMENTOS" icon={require('../../assets/images/agenda.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="SearchAppointment2" 
                    component={SearchAppointment2} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="AGENDAMENTOS" icon={require('../../assets/images/agenda.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="DetailsAppointment" 
                    component={DetailsAppointment} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="AGENDAMENTO" icon={require('../../assets/images/agenda.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="SearchOrder" 
                    component={SearchOrder} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="PEDIDOS" icon={require('../../assets/icons/home.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="ShowCategories" 
                    component={ShowCategories} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="CATEGORIAS" icon={require('../../assets/icons/home.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="ShowServices" 
                    component={ShowServices} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="SERVIÇOS" icon={require('../../assets/images/cachorro.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="ProductsByCategory" 
                    component={ProductsByCategory} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="PRODUTOS" icon={require('../../assets/icons/home.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="DetailsProduct" 
                    component={DetailsProduct} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="PRODUTO" icon={require('../../assets/icons/home.png') }/>
                    })} 
                />

                <Stack.Screen 
                    name="DetailsService" 
                    component={DetailsService} 
                    options={() => ({ 
                        header: () => <Header activateBackButton={true} title="SERVIÇO" icon={require('../../assets/images/cachorro.png') }/>
                    })} 
                />


                <Stack.Screen 
                 name="DetailsAppointmentAdm" 
                component={DetailsAppointmentAdm} 
                 options={() => ({ 
                    header: () =>  <Header  activateBackButton={true}  title="DETALHES DO AGENDAMENTO"  icon={require('../../assets/images/agenda.png')} />
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





            </Stack.Navigator>
        </NavigationContainer>
    )
}