import { GLOBAL_VAR } from "../../config/globalVar"
import { Category, Error } from "../../../utils/Types"

export async function findByCategory(categoryId: string ): Promise<Category | Error> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/categorias/${categoryId}/buscar`, {
            headers: {
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'GET',
        })

        if (response.ok) {
            const data: Category = await response.json();
            return data;
        } else {
            const data: Error = await response.json();
            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/categorias/${categoryId}/buscar`,
                errorFields: data.errorFields ?? null
            };
        }
    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/categorias/${categoryId}/buscar`,
            errorFields: null
        };
    }
}