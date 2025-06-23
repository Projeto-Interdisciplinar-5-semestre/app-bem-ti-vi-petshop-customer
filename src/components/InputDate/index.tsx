import React, { Dispatch, SetStateAction, useState } from "react";
import { Pressable, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./style";

export type InputProps = {
    label: string;
    moment: Date;
    setMoment: Dispatch<SetStateAction<Date>>;
};

export const InputDate = ({ label, moment, setMoment }: InputProps) => {
    const [showPicker, setShowPicker] = useState<boolean>(false);

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${label}: ${day}/${month}/${year}`;
    };

    const handleChange = (event: any, selectedDate?: Date) => {
        setShowPicker(false);
        if (selectedDate) setMoment(selectedDate);
    };

    return (
        <View style={styles.inputContainer}>
            <FontAwesome5 name="calendar-alt" size={16} color="#256489" />
            <Pressable
                onPress={() => setShowPicker(true)}
                style={styles.input}
            >
                <Text style={{ color: "#256489", fontFamily: "Montserrat-Regular", fontSize: 14 }}>
                    {formatDate(moment)}
                </Text>
            </Pressable>

            {showPicker && (
                <DateTimePicker
                    value={moment}
                    mode="date"
                    display="default"
                    onChange={handleChange}
                />
            )}
        </View>
    );
};
