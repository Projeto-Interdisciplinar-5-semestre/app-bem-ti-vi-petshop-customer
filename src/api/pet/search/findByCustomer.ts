import { GLOBAL_VAR } from "../../config/globalVar"
import { Error, Paginacao, Pet } from "../../../utils/Types"

export async function findByCustomer(pageIndex: number, customerId: string): Promise<Paginacao<Pet> | Error> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/pets/paginacaoporcliente?isActive=true&pageSize=3&page=${pageIndex}&customerId=${customerId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${GLOBAL_VAR.TOKEN_JWT}`
            },
        })

        if (response.ok) {
            const data: Paginacao<Pet> = await response.json();
            return data;
        } else {
            const data: Error = await response.json();
            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/pets/paginacaoporcliente?isActive=true&pageSize=3&page=${pageIndex}&customerId=${customerId}`,
                errorFields: data.errorFields ?? null
            };
        }

    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/pets/paginacaoporcliente?isActive=true&pageSize=3&page=${pageIndex}&customerId=${customerId}`,
            errorFields: null
        };
    }
}