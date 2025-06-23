import { Error, Passwords } from "../../../utils/Types";
import { GLOBAL_VAR } from "../../config/globalVar";

export async function updatePassword(customerId: string, passwords: Passwords): Promise<boolean | Error> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/clientes/${customerId}/atualizarsenha`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'PATCH',
            body: JSON.stringify(passwords),
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
                path: data.path ?? `/clientes/${customerId}/atualizarsenha`,
                errorFields: data.errorFields ?? null
            };
        }

    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/clientes/${customerId}/atualizarsenha`,
            errorFields: null
        };
    }
};