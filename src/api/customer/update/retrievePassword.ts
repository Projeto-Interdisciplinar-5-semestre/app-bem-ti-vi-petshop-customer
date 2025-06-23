import { Error } from "../../../utils/Types";
import { GLOBAL_VAR } from "../../config/globalVar";

export async function retrievePassword(email: string, code: string, password: string): Promise<boolean | Error> {
   
   console.log(email + " : " + code + " : " + password );
    if (!email || !code || !password) {
        return {
            code: 'VALIDATION_ERROR',
            status: '400',
            message: 'Email, código e nova senha são obrigatórios.',
            timestamp: new Date().toISOString(),
            path: `/clientes/${email}/recuperarsenha/${code}`,
            errorFields: null
        };
    }

    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/clientes/${email}/recuperarsenha/${code}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'PATCH',
            body: JSON.stringify({ password: password })
        });

        if (response.status === 200) {
            return true;
        } else {
            const data = await response.json();

            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/clientes/${email}/recuperarsenha/${code}`,
                errorFields: data.errorFields ?? null
            };
        }

    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/clientes/${email}/recuperarsenha/${code}`,
            errorFields: null
        };
    }
};