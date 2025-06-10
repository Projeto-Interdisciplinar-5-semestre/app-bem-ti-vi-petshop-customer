import React from "react"
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { NavigationProps } from "../../routes/AppRoute"

import { styles } from "./style"

import { login, Token, UserAuth } from "../../api/auth/login/login"
import { validateTokenCustomer } from "../../api/auth/validateTokenCustomer/validateTokenCustomer"
import { GLOBAL_VAR } from "../../api/config/globalVar"

export const Teste = () => {
    const { navigate } = useNavigation<NavigationProps>()
    const tempId = "64b4476c-be75-4c6d-8791-9242bdd08405" // APENAS PARA TESTES

    const sendRequestLogin = async () =>{
        const userAuth: UserAuth={
            email:'email@gmail.com',
            password:'12345678'
        }

        try{
            const token: Token = await login(userAuth)
            if(token){
                GLOBAL_VAR.TOKEN_JWT = token.token
                Alert.alert('Sucesso!', 'O login foi realizado.')
                console.log(`1 token foi criado e salvo: ${GLOBAL_VAR.TOKEN_JWT}`)
                // navigate('')
            }
        } catch(error){
            console.error('POST request failed:', error);
            Alert.alert('Erro', 'Não foi possível fazer o login.');
        }
    }
    sendRequestLogin()

    return (
        <View style={styles.screen}>
            <Button text="ShowServices" screen={() => navigate("ShowServices")} />
            <Button text="ShowCategories" screen={() => navigate("ShowCategories")} />
            <Button text="ShowProfile" screen={() => navigate("ShowProfile")} />
            <Button text="UpdateProfile" screen={() => navigate("UpdateProfile", {id:tempId})} />
            <Button text="SearchPet" screen={() => navigate("SearchPet", {id:tempId})} />
            <Button text="SearchOrder" screen={() => navigate("SearchOrder", {id:tempId})} />
            <Button text="SearchAppointment" screen={() => navigate("SearchAppointment", {id:tempId})} />
            <Button text="SearchAppointment2" screen={() => navigate("SearchAppointment2")} />
            <Button text="ProductsByCategory" screen={() => navigate("ProductsByCategory",{id:tempId})} />
            <Button text="ManagePet" screen={() => navigate("ManagePet", {id:tempId})} />
            <Button text="Home" screen={() => navigate("Home")} />
            <Button text="DetailsService" screen={() => navigate("DetailsService",{id:tempId})} />
            <Button text="DetailsProduct" screen={() => navigate("DetailsProduct",{id:tempId})} />
            <Button text="DetailsAppointment" screen={() => navigate("DetailsAppointment")} />
            <Button text="CreatePet" screen={() => navigate("CreatePet", {id:tempId})} />
        </View>
    )
}

function Button(props: any) {
    return (
        <TouchableOpacity style={styles.button} onPress={props.screen}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}