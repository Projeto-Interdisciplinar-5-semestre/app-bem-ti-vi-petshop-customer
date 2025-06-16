import { GLOBAL_VAR } from "../../config/globalVar";
import { Paginacao, Service } from "../../../utils/Types";

export async function search(searchText: string,pageIndex: number): Promise<Paginacao<Service> | undefined>{

    try {

        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/servicos/paginacao?isActive=true&pageSize=2&page=${pageIndex}&name=${searchText}`,{
            headers: {
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'GET',
        })

        if (!response.ok){
            console.error(`Algo errado no response: ${response.status}`)
        }

        const data:Paginacao<Service>= await response.json()
        
        return data
    } catch (error) {
        console.error('Erro na requisição: ', error)
    }
}