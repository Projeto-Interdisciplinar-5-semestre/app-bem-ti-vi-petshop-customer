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
        paddingBottom: 20,
    },
    itemContainer: {
        marginTop: 16,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 3, // sombra Android
        shadowColor: '#000', // sombra iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    clientName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    info: {
        fontSize: 15,
        color: '#555',
        marginBottom: 4,
    },
    noResult: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        marginTop: 20,
        color: '#777',
        fontSize: 14,
    },
    errorContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});
