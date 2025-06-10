import { Alert } from "react-native"
import { GLOBAL_VAR } from "../../config/globalVar"
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../../routes/AppRoute";

export type CustomerId = {
    id: string
}

export async function validateTokenCustomer(): Promise<CustomerId | undefined> {
    try {

        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/autenticacao/token/cliente`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${GLOBAL_VAR.TOKEN_JWT}`
            },
        })

        if (!response.ok){
            return undefined;
        }

        const customerId: CustomerId = await response.json()
        
        return customerId;

    } catch (error) {
        console.error('Erro na requisição: ', error)
    }
}