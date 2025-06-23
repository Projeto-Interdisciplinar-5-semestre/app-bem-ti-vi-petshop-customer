import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%'
    },

    button: {
        backgroundColor: '#006516',
        borderRadius: 35,
        width: '48%',
        padding: 8,
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
        width: 20,
        height: 20,
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