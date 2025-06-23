import { GLOBAL_VAR } from "../../config/globalVar";
import { Error, Paginacao, Pet } from "../../../utils/Types";

export async function update(pet: Pet, imagemPet: string, petId: string ): Promise<Boolean | Error> {

    const formData = new FormData();

    formData.append('pet', {
        string: JSON.stringify(pet),
        type: 'application/json',
    } as any);

    formData.append('file', {
        uri: imagemPet,
        name: 'imagem.jpg',
        type: 'image/jpeg',
    } as any);

    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/pets/${petId}/atualizar`, {
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
                path: data.path ?? `/pets/inserir`,
                errorFields: data.errorFields ?? null
            };
        }
    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/pets/inserir`,
            errorFields: null
        };
    }
};