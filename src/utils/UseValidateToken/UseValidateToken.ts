import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../routes/AppRoute";
import { CustomerId, validateTokenCustomer } from "../../api/auth/validateTokenCustomer/validateTokenCustomer";
import { Alert } from "react-native";
import { useEffect } from "react";
import { Error } from "../Types";

export function useValidateToken() {
    const { navigate } = useNavigation<NavigationProps>();
    
    useEffect(() => {
        async function loadCustomerId() {
            try {
                const customerId: CustomerId | Error = await validateTokenCustomer();
                if ('id' in customerId) {
                    return;
                } 
                Alert.alert("Atenção!", "Você foi deslogado!")
                navigate("ClientLogin");
            } catch (error) {
                navigate("ClientLogin");
            }
        }
        loadCustomerId();
    }, []);
}