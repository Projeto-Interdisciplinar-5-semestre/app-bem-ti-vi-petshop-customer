import { AdressByCEP } from "../../../utils/Types";

export default async function getViaCep(cep: string): Promise<AdressByCEP | undefined> {
    if (cep.length >= 8) {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
            method: 'GET',
        })

        if (!response.ok) {
            return undefined;
        }
        const data = await response.json();
        return data;
    } else {
        return undefined;
    }
}
