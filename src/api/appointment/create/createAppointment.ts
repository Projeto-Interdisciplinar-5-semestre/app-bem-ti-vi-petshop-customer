import { GLOBAL_VAR } from '../../config/globalVar'

export async function createAppointment(serviceId:string, customerId:string) {
    try {
        const appointment = {
            service: { id: serviceId },
            customer: { id: customerId },
            dateTime: new Date().toISOString()
        };

        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/agendamentos/inserir`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'POST',
            body: JSON.stringify(appointment),
        });
        
        if (response.status === 201) {
            return true;
        } else {
            console.error(`Erro ao agendar: código ${response.status}`);
            return false;
        }
    } catch (error) {
        console.error('Erro na requisição POST: ', error)
        throw error;
    }
} 