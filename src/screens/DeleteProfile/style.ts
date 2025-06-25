import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f4f6f8',
    },
    scrollContent: {
        padding: 20,
        flexGrow: 1,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginTop: 16,
    },
    description: {
        fontSize: 15,
        color: '#444',
        marginBottom: 16,
        textAlign: 'center',
        lineHeight: 22,
    },
    buttonsContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    errorContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
    },
});
