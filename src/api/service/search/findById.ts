import { GLOBAL_VAR } from "../../config/globalVar"
import { Error, Service } from "../../../utils/Types"

export async function findById(serviceId: string): Promise<Service | Error> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/servicos/${serviceId}/buscar`, {
            headers: {
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'GET',
        });

        if (response.ok) {
            const data: Service = await response.json();
            return data;
        } else {
            const data: Error = await response.json();

            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/servicos/${serviceId}/buscar`,
                errorFields: data.errorFields ?? null
            };
        }
    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/servicos/${serviceId}/buscar`,
            errorFields: null
        };
    }
}
