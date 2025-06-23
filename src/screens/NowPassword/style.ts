import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3EFFF',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 200,
        resizeMode: 'repeat',
        marginBottom: 10,
    },
    title: {
        color: '#256489',
        fontSize: 24,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 5,
    },
    subtitle: {
        color: '#256489',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 30,
    },
    instructionText: {
        color: '#256489',
        fontSize: 16,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
        paddingHorizontal: 20,
        lineHeight: 24,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C9EBFF',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: 'rgba(37, 100, 137, 0.3)',
        height: 50,
        width: '100%',
    },
    eyeIcon: {
        paddingRight: 10,
    },
    eyeIconImage: {
        width: 24,
        height: 24,
        opacity: 0.7,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#333',
        fontFamily: 'Montserrat-Medium',
        paddingVertical: 0,
    },
    confirmButton: {
        backgroundColor: '#256489',
        borderRadius: 30,
        padding: 15,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
        letterSpacing: 0.5,
    },
    backButton: {
        marginTop: 20,
    },
    backButtonText: {
        color: '#256489',
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        textDecorationLine: 'underline',
    },

    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },

    codeInput: {
        width: 40,
        height: 50,
        backgroundColor: '#C9EBFF',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(37, 100, 137, 0.3)',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        color: '#256489',
    },

    resendCodeButton: {
        marginTop: 25,
    },
    
    resendCodeText: {
        color: '#256489',
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        textDecorationLine: 'underline',
    },
});