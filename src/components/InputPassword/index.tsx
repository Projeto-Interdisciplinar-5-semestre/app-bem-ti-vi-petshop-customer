import React, { Dispatch, SetStateAction } from "react";
import { TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./style";

type InputPasswordProps = {
    showPassword: boolean;
    toggleShowPassword: () => void;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    placeholder: string;
};

export const InputPassword = ({
    showPassword,
    toggleShowPassword,
    password,
    setPassword,
    placeholder,
}: InputPasswordProps) => {
    return (
        <View style={styles.inputContainer}>
            <TouchableOpacity onPress={toggleShowPassword}>
                <Image
                    source={
                        showPassword
                            ? require("../../assets/icons/open_eye.png")
                            : require("../../assets/icons/close_eye.png")
                    }
                    style={{ width: 24, height: 24, tintColor: "#256489" }}
                />
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#256489"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
            />
        </View>
    );
};
