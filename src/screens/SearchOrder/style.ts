import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#555',
    },
    inputField: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    itemContainer: {
        marginTop: 16,
    },
    errorContainer: {
        backgroundColor: '#ffe5e5',
        padding: 12,
        borderRadius: 8,
        marginVertical: 10,
    },
    errorText: {
        color: '#d00',
        textAlign: 'center',
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },

    cardSubtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 2,
    },

    cardText: {
        fontSize: 14,
        color: '#111',
    },

    cardSection: {
        marginTop: 10,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },

    itemRow: {
        marginLeft: 8,
        marginBottom: 4,
    },

});
