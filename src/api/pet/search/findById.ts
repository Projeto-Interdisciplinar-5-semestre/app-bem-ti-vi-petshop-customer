import { GLOBAL_VAR } from "../../config/globalVar"
import { Error, Pet } from "../../../utils/Types"

export async function findById(petId: string): Promise<Pet | Error> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/pets/${petId}/buscar`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${GLOBAL_VAR.TOKEN_JWT}`
            },
        })

        if (response.ok) {
            const data: Pet = await response.json();
            return data;
        } else {
            const data: Error = await response.json();

            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/pets/${petId}/buscar`,
                errorFields: data.errorFields ?? null
            };
        }
    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/pets/${petId}/buscar`,
            errorFields: null
        };
    }
}