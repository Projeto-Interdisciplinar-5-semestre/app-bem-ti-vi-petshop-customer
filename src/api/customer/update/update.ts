import { GLOBAL_VAR } from "../../config/globalVar";
import { Customer, Error } from "../../../utils/Types"

export async function update(customer: Customer, imagem: string, customerId: string): Promise<Boolean | Error> {

    const formData = new FormData();

    formData.append('customer', {
        string: JSON.stringify(customer),
        type: 'application/json',
    } as any);

    formData.append('file', {
        uri: imagem,
        name: 'imagem.jpg',
        type: 'image/jpeg',
    } as any);

    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/clientes/${customerId}/atualizar`, {
            headers: {
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'PUT',
            body: formData,
        });


        if (response.ok) {
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
};