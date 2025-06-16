import { GLOBAL_VAR } from "../../config/globalVar";
import { Customer } from "../../../utils/Types"

export async function update(customer: Customer, imagem: string, customerId: string) {

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