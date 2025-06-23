import React, { Dispatch, SetStateAction } from "react"
import { Text, View } from "react-native"

import { Picker } from "@react-native-picker/picker"

import { styles } from "./style"

type PetFormated = {
    id: string,
    name: string,
}

type InputPetsProps = {
    label: string
    petsToSelect: PetFormated[],
    petId: string,
    setPetId: Dispatch<SetStateAction<string>>
}

export const InputPets = ({ label, petsToSelect, petId, setPetId }: InputPetsProps) => {

    return (
        <View style={styles.formGroup}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={petId}
                    onValueChange={setPetId}
                    style={styles.picker}
                >
                    {petsToSelect.map((item: PetFormated) => (
                        <Picker.Item key={item.id} label={item.name} value={item.id} />
                    ))}
                </Picker>
            </View>
        </View>
    )
}