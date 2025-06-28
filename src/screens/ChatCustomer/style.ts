import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 20,

        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        padding: 10,
        borderRadius: 4,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    messageInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingTop: 10,
    },
    messageInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginRight: 10,
    },

    message: {
        borderRadius: 8,
        marginVertical: 4,
        padding: 8,
        maxWidth: '70%',
    },
    name: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14
    },
    content: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16
    }
});
