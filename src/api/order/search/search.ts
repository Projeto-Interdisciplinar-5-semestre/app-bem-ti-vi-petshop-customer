import { Error, Order, Paginacao } from "../../../utils/Types";
import { GLOBAL_VAR } from "../../config/globalVar";

export async function search(pageIndex: number, customerId: string, paymentStatus: string): Promise<Paginacao<Order> | Error> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/pedidos/paginacaoporcliente?isActive=true&pageSize=3&page=${pageIndex}&customerId=${customerId}&paymentStatus=${paymentStatus}`, {
            headers: {
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'GET',
        })

        if (response.ok) {
            const data: Paginacao<Order> = await response.json();
            return data;
        } else {
            const data: Error = await response.json();
            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/pedidos/paginacaoporcliente?isActive=true&pageSize=3&page=${pageIndex}&customerId=${customerId}&paymentStatus=${paymentStatus}`,
                errorFields: data.errorFields ?? null
            };
        }

    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/pedidos/paginacaoporcliente?isActive=true&pageSize=3&page=${pageIndex}&customerId=${customerId}&paymentStatus=${paymentStatus}`,
            errorFields: null
        };
    }
}