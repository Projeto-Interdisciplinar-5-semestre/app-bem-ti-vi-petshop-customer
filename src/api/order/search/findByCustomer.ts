import { GLOBAL_VAR } from "../../config/globalVar"
import { Customer,CustomerPets, Order } from "../../../utils/Types"

export async function findByCustomer(customerId: string): Promise<Order[] | undefined> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/clientes/${customerId}/buscar`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${GLOBAL_VAR.TOKEN_JWT}`
            },
        }) 
        if (!response.ok) {
            console.error(`Algo errado no response: ${response.status}`);
            return;
        }

        const data:Customer = await response.json();
        console.log('ORDERS: ')
        console.log(data.orders)
        return data.orders

    } catch (error) {
        console.error('Erro na requisição: ', error);
    }
}