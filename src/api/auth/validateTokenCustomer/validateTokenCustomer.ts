import { Error } from "../../../utils/Types";
import { GLOBAL_VAR } from "../../config/globalVar"

export type CustomerId = {
    id: string
}

export async function validateTokenCustomer(): Promise<CustomerId | Error> {
    try {

        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/autenticacao/token/cliente`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${GLOBAL_VAR.TOKEN_JWT}`
            },
        })

        if (response.ok) {
            const customerId: CustomerId = await response.json()
            return customerId;
        } else {
            const data = await response.json();

            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/autenticacao/token/cliente`,
                errorFields: data.errorFields ?? null
            };
        }
    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/autenticacao/token/cliente`,
            errorFields: null
        };
    }
}