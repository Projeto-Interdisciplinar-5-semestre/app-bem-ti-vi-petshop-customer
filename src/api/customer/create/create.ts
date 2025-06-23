import { Alert } from 'react-native';
import { CustomerCreate, Error } from '../../../utils/Types';
import { GLOBAL_VAR } from '../../config/globalVar'

export async function create(user: CustomerCreate, image: string): Promise<Boolean | Error> {
    if (!image) {
        return {
            code: 'IMAGE_IS_NULL',
            status: '0',
            message: 'Você precisa enviar uma imagem.',
            timestamp: new Date().toISOString(),
            path: `/clientes/inserir`,
            errorFields: null
        };
    }

    try {
        const formData = new FormData();

        formData.append('customer', {
            string: JSON.stringify(user),
            type: 'application/json'
        } as any);

        formData.append('file', {
            uri: image,
            name: 'imagem.jpg',
            type: 'image/jpeg',
        } as any);

        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/clientes/inserir`, {
            method: 'POST',
            body: formData,
        });

        if (response.status === 201) {
            return new Boolean(true);
        } else {
            const data: Error = await response.json();

            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/clientes/inserir`,
                errorFields: data.errorFields ?? null
            };
        }
    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/clientes/inserir`,
            errorFields: null
        };
    }
} 