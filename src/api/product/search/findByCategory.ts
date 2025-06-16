import { GLOBAL_VAR } from "../../config/globalVar"
import { Category, Product } from "../../../utils/Types"
import { ProductsByCategory } from "../../../screens/ProductsByCategory"


export type ProductsByCategory={
    products: Product[],
    categoryName: string
}
export async function findByCategory(categoryId: string ): Promise<ProductsByCategory | undefined> {

    try {

        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/categorias/${categoryId}/buscar`, {
            headers: {
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'GET',
        })

        if (!response.ok) {
            console.error(`Algo errado no response: ${response.status}`)
        }

        const data:Category = await response.json()

        return {
            products:data.products,
            categoryName: data.name
        }

    } catch (error) {
        console.error('Erro na requisição: ', error)
    }
}