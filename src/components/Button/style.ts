import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: '#006516',
        borderRadius: 35,
        width: '48%',
        height: 55,
        padding: 16,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        flexDirection: 'row',
        marginVertical: 20
    },

    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: '#fff'
    },

    text: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        letterSpacing: 0.5
    },

}) 