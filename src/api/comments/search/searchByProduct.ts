import { GLOBAL_VAR } from "../../config/globalVar";
import { Error, Paginacao, Comment } from "../../../utils/Types";

export async function searchByProduct(productId: string, pageIndex: number): Promise<Paginacao<Comment> | Error> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/comentarios/buscarporidproduto?isActive=true&pageSize=3&page=${pageIndex}&productId=${productId}`, {
            headers: {
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'GET',
        })

        if (response.ok) {
            const data: Paginacao<Comment> = await response.json()
            return data
        } else {
            const data: Error = await response.json()
            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/comentarios/buscarporidservico?isActive=true&pageSize=3&page=${pageIndex}&productId=${productId}`,
                errorFields: data.errorFields ?? null
            };
        }
    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/comentarios/buscarporidservico?isActive=true&pageSize=3&page=${pageIndex}&productId=${productId}`,
            errorFields: null
        };
    }
}