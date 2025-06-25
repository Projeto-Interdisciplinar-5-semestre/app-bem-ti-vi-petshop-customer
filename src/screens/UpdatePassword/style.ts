import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    formContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        marginTop: 20,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },

    inputContainer: {
        width: '100%'
    },

    buttonsContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    errorContainer: {
        marginTop: 20,
        backgroundColor: '#ffe5e5',
        borderRadius: 8,
        padding: 12,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ff4d4f',
    },
    errorText: {
        color: '#b00020',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 2,
    },

    
});
