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
            <Button text="ClientLogin" screen={() => navigate("ClientLogin")} />
            <Button text="ClientRegister" screen={() => navigate("ClientRegister")} />
            <Button text="NowPassword" screen={() => navigate("NowPassword")} />
            <Button text="ReceivePassword" screen={() => navigate("ReceivePassword")} />
            <Button text="ResetPassword" screen={() => navigate("ResetPassword")} />
            <Button text="ShopScreen" screen={() => navigate("ShopScreen")} />
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