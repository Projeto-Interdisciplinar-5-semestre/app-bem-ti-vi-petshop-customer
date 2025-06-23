import { Category, Error, Paginacao } from "../../../utils/Types";
import { GLOBAL_VAR } from "../../config/globalVar";

export async function search(searchText: string, pageIndex: number): Promise<Paginacao<Category> | Error> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/categorias/paginacao?isActive=true&pageSize=8&page=${pageIndex}&name=${searchText}`, {
            headers: {
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'GET',
        })

        if (response.ok) {
            const data: Paginacao<Category> = await response.json();
            return data;
        } else {
            const data: Error = await response.json();

            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/categorias/paginacao?isActive=true&pageSize=10&page=${pageIndex}&name=${searchText}`,
                errorFields: data.errorFields ?? null
            };
        }
    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/categorias/paginacao?isActive=true&pageSize=10&page=${pageIndex}&name=${searchText}`,
            errorFields: null
        };
    }
}