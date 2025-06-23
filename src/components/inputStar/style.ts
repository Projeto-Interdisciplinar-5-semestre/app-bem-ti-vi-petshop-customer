import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    starRow: {
        flexDirection: 'row',
    },
    starIcon: {
        width: 32,
        height: 32,
        margin: 4,
    },
    label: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#333',
        marginBottom: 6,
        marginLeft: 4
    },
    ratingText: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
});