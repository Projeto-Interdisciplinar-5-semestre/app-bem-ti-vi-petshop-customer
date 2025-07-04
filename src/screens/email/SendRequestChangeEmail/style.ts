import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f4f6f8',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 16,
    },
    scrollContent: {
        flexGrow: 1,
        paddingVertical: 24,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginTop: 10,
    },
    buttonsContainer: {
        marginTop: 24,
        alignItems: 'center',
    },
    errorContainer: {
        marginTop: 12,
        alignItems: 'center',
    },
    errorText: {
        color: '#b00020',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 2,
    },
});
