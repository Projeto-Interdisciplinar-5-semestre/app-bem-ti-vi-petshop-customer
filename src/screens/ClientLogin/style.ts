import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#D9F1FF",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    logo: {
        width: 300,
        height: 250,
        marginBottom: 12,
    },
    loginTitle: {
        fontSize: 24,
        fontFamily: "Montserrat-Bold",
        marginBottom: 20,
        color: "#256489",
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
    inputIcon: {
        width: 24,
        height: 24,
        tintColor: "#256489",
    },
    forgotPassword: {
        fontSize: 13,
        fontFamily: "Montserrat-Regular",
        color: "#256489",
        marginBottom: 16,
        textAlign: "right",
        width: "100%",
    },
    loginButton: {
        backgroundColor: "#256489",
        paddingVertical: 14,
        borderRadius: 25,
        width: "100%",
        alignItems: "center",
        marginTop: 8,
    },
    loginButtonText: {
        color: "#fff",
        fontFamily: "Montserrat-Bold",
        fontSize: 14,
    },
    registerText: {
        marginTop: 16,
        fontSize: 13,
        fontFamily: "Montserrat-Regular",
        color: "#444",
    },
    registerLink: {
        fontFamily: "Montserrat-SemiBold",
        color: "#256489",
    },
});
