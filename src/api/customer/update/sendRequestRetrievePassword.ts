import { Error } from "../../../utils/Types";
import { GLOBAL_VAR } from "../../config/globalVar";

export async function sendRequestRetrievePassword(email: string): Promise<boolean | Error> {

    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/clientes/${email}/solicitarrecuperacaosenha`, {
            method: 'PATCH',
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
                path: data.path ?? `/clientes/${email}/solicitarrecuperacaosenha`,
                errorFields: data.errorFields ?? null
            };
        }

    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/clientes/${email}/solicitarrecuperacaosenha`,
            errorFields: null
        };
    }
};