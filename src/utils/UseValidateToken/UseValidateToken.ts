import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../routes/AppRoute";
import { CustomerId, validateTokenCustomer } from "../../api/auth/validateTokenCustomer/validateTokenCustomer";
import { Alert } from "react-native";
import { useEffect } from "react";

export function useValidateToken() {
    const { navigate } = useNavigation<NavigationProps>();
    
    useEffect(() => {
        async function loadCustomerId() {
            try {
                const customerId: CustomerId | undefined = await validateTokenCustomer();
                if (customerId == undefined) {
                    Alert.alert("Atenção!", "Você foi deslogado!")
                    navigate("Home");
                } 
            } catch (error) {
                console.error('Erro ao autenticar usuário.', error);
            }
        }
        loadCustomerId();
    }, []);
}