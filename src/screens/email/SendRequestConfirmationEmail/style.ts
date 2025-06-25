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
    formContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        marginTop: 20,
    },
    buttonsContainer: {
        marginTop: 25,
    },
    errorContainer: {
        marginTop: 15,
        backgroundColor: '#ffe5e5',
        borderRadius: 8,
        padding: 12,
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
