import { Customer, Error } from "../../../utils/Types";
import { GLOBAL_VAR } from "../../config/globalVar";

export async function sendRequestConfirmationEmail(customerId: string, newEmail: string): Promise<boolean | Error> {

    const objEmail = {
        email: newEmail
    } as Customer;

    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/clientes/${customerId}/solicitarconfirmacaoemail`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'PATCH',
            body: JSON.stringify(objEmail),
        });

        if (response.ok) {
            return true;
        } else {
            const data = await response.json();

            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/clientes/${customerId}/solicitartrocaemail`,
                errorFields: data.errorFields ?? null
            };
        }

    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/clientes/${customerId}/solicitartrocaemail`,
            errorFields: null
        };
    }
};