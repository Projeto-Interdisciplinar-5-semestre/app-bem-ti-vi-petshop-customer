import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formGroup: {
        paddingHorizontal: 16,
        marginTop: 16,
        marginBottom: 8,
    },

    label: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#333',
        marginBottom: 6,
        marginLeft: 4,
    },

    inputField: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        backgroundColor: 'rgba(236, 234, 234, 0.4)',
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginTop: 4,
    },

    inputText: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        color: '#333',
        paddingVertical: 0,
    },

    inputIcon: {
        width: 24,
        height: 24,
        opacity: 0.65,
        marginLeft: 8,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#EAF8FF",
        borderRadius: 20,
        paddingHorizontal: 12,
        marginBottom: 12,
        width: "100%",
        height: 44,
        borderWidth: 1,
        borderColor: "#256489",
    },

    input: {
        flex: 1,
        marginLeft: 8,
        fontFamily: "Montserrat-Regular",
        fontSize: 14,
        color: "#256489",
    },
});
