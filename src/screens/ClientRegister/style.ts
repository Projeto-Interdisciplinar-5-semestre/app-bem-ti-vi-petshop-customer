import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#D9F1FF",
        alignItems: "center",
        justifyContent: "center",
    },

    form: {
        padding: 15
    },

    logo: {
        width: 300,
        height: 200,
    },
    title: {
        fontSize: 18,
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
    button: {
        width: '60%',
        backgroundColor: "#256489",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        marginVertical: 5,
    },
    buttonText: {
        color: "#fff",
        fontFamily: "Montserrat-Bold",
        fontSize: 14,
    },
    loginRedirect: {
        fontSize: 13,
        fontFamily: "Montserrat-Regular",
        color: "#444",
        marginVertical: 20

    },
    loginLink: {
        fontFamily: "Montserrat-SemiBold",
        color: "#256489",
    },
    formGroup: {
        width: "100%",
        marginBottom: 16,
    },

    label: {
        fontSize: 14,
        fontFamily: "Montserrat-SemiBold",
        color: "#256489",
        marginBottom: 6,
    },

    imagePicker: {
        backgroundColor: "#EAF8FF",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#256489",
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center",
    },

    imagePickerActive: {
        backgroundColor: "#cbe8ff",
    },

    imagePickerText: {
        fontFamily: "Montserrat-Regular",
        color: "#256489",
        fontSize: 14,
    },

    imagePickerTextActive: {
        fontFamily: "Montserrat-SemiBold",
        color: "#144162",
    },

    imagePreviewContainer: {
        marginTop: 10,
        alignItems: "center",
    },

    imagePreview: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#256489",
    },

    hiddenButton: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#F0F8FF',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#D3E5F5'
    },
    
    hiddenButtonText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        color: '#256489',
    },
});
