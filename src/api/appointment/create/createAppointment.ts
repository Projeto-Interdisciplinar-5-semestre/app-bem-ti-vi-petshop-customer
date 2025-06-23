import { Appointment, Customer, Error, Pet, Service } from '../../../utils/Types';
import { GLOBAL_VAR } from '../../config/globalVar'

export async function createAppointment(appointment: Appointment): Promise<Appointment | Error> {
    try {
        const response = await fetch(`${GLOBAL_VAR.BASE_URL}/agendamentos/inserir`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + GLOBAL_VAR.TOKEN_JWT
            },
            method: 'POST',
            body: JSON.stringify(appointment),
        });
        
        if (response.status === 201) {
            const data: Appointment = await response.json();
            return data;
        } else {
            const data: Error = await response.json();

            return {
                code: data.code ?? 'UNKNOWN_ERROR',
                status: data.status ?? response.status.toString(),
                message: data.message ?? 'Erro inesperado',
                timestamp: data.timestamp ?? new Date().toISOString(),
                path: data.path ?? `/autenticacao/token/cliente`,
                errorFields: data.errorFields ?? null
            };
        }
    } catch (error) {
        return {
            code: 'NETWORK_ERROR',
            status: '0',
            message: 'Erro de conexão. Verifique sua internet.',
            timestamp: new Date().toISOString(),
            path: `/autenticacao/token/cliente`,
            errorFields: null
        };
    }
} 