import { GLOBAL_VAR } from "../../config/globalVar";
import { Pet } from "../../../utils/Types";

export async function update(pet: Pet, imagemPet: string, petId: string ) {

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

        if (response.status === 200) {
            return true;
        } else {
            console.error(`Erro ao atualizar: código ${response.status}`);
            return false;
        }

    } catch (error) {
        console.error('Erro na requisição UPDATE: ', error)
        throw error;
    }
};