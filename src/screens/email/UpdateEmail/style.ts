import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        marginTop: 20,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30,
    },
    codeInput: {
        width: 50,
        height: 60,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    errorContainer: {
        marginBottom: 15,
        backgroundColor: '#ffe5e5',
        borderRadius: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ff4d4f',
    },
    errorText: {
        color: '#b00020',
        fontSize: 14,
        marginBottom: 2,
    },
    buttonsContainer: {
        marginTop: 10,
    },
    resendContainer: {
        marginTop: 25,
        alignItems: 'center',
    },
    resendText: {
        color: '#007aff',
        fontSize: 15,
        fontWeight: '500',
    },
});
