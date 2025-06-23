import { GLOBAL_VAR } from "../../config/globalVar"
import { Customer, Error } from "../../../utils/Types"

export async function findById(customerId: string): Promise<Customer | Error> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/clientes/${customerId}/buscar`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${GLOBAL_VAR.TOKEN_JWT}`
            },
        }) 

        if (response.ok) {
            const data: Customer = await response.json();
            return data;
        } else {
            const data: Error = await response.json();

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