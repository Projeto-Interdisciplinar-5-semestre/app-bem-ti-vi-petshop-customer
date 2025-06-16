import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"

import { styles } from "./style"
import { useNavigation } from "@react-navigation/native"
import { NavigationProps } from "../../routes/AppRoute"

export const Header = (props: any) => {
    const { goBack } = useNavigation<NavigationProps>()
    return (
        <View style={styles.header}>

            {props.activateBackButton && 
                <TouchableOpacity style={styles.backButton} onPress={()=> goBack()}>
                    <Image
                        source={require('../../assets/icons/arrow_back.png')}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
            }

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Image
                    source={props.icon}
                    style={styles.menuIcon}
                />
            </View>
        </View>
    )
}