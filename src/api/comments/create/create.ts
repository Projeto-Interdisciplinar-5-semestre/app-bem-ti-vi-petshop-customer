import { Comment, Error } from '../../../utils/Types';
import { GLOBAL_VAR } from '../../config/globalVar'

export async function create(comment: Comment): Promise<Boolean | Error> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/comentarios/inserir`, {
            headers: {
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(comment),
        });

        if (response.status === 201) {
            return new Boolean(true);
        } else {
            const data = await response.json();

            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/comentarios/inserir`,
                errorFields: data.errorFields ?? null
            };
        }
    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/comentarios/inserir`,
            errorFields: null
        };
    }
} 