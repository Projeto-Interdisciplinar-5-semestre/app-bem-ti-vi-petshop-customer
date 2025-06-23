import React, { Dispatch, SetStateAction } from "react"
import { Text, View } from "react-native"

import { Picker } from "@react-native-picker/picker"

import { PaymentStatus } from "../../utils/Types"

import { styles } from "./style"

const paymentStatusList: PaymentStatus[] = [
    { id: "", paymentStatus: "Exibir todos" },
    { id: "WAITING_PAYMENT", paymentStatus: "Esperando pagamento" },
    { id: "PAID", paymentStatus: "Pago" },
    { id: "CANCELED", paymentStatus: "Cancelado" }
]

type InputPaymentStatusProps = {
    label: string
    paymentStatus: string,
    setPaymentStatus: Dispatch<SetStateAction<string>>
}

export const InputPaymentStatus = ({ label, paymentStatus, setPaymentStatus }: InputPaymentStatusProps) => {
    return (
        <View style={styles.formGroup}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={paymentStatus}
                    onValueChange={setPaymentStatus}
                    style={styles.picker}
                >
                    {paymentStatusList.map((item: PaymentStatus) => (
                        <Picker.Item key={item.id} label={item.paymentStatus} value={item.id} />
                    ))}
                </Picker>
            </View>
        </View>
    )
}