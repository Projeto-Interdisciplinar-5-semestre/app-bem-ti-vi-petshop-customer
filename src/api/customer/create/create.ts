import { CustomerCreate } from '../../../utils/Types';
import { GLOBAL_VAR } from '../../config/globalVar'

export async function create(user:CustomerCreate, image: string) {
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
            return true;
        } else {
            console.error(`Erro ao cadastrar: código ${response.status}`);
            return false;
        }
    } catch (error) {
        console.error('Erro na requisição POST: ', error)
        throw error;
    }
} 