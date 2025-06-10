import { GLOBAL_VAR } from "../../config/globalVar"
import { Pet } from "../../../utils/Types"

export async function findById(petId: string): Promise<Pet | undefined> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/pets/${petId}/buscar`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${GLOBAL_VAR.TOKEN_JWT}`
            },
        }) 
        if (!response.ok) {
            console.error(`Algo errado no response: ${response.status}`);
            return;
        }

        const data:Pet = await response.json();
        return data

    } catch (error) {
        console.error('Erro na requisição: ', error);
    }
}