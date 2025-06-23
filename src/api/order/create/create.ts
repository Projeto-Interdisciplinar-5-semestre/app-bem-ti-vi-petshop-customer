import { Error, Order } from '../../../utils/Types';
import { GLOBAL_VAR } from '../../config/globalVar'

export async function create(order: Order): Promise<Order | Error> {
    try {

        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/pedidos/inserir`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'POST',
            body: JSON.stringify(order),
        });
        
        if (response.status === 201) {
            const data: Order = await response.json();
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