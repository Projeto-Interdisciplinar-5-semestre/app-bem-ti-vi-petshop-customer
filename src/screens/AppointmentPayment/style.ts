import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollContent: {
        padding: 16,
    },
    pageTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    sectionBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 16,
        elevation: 2,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
        color: '#444',
    },
    text: {
        fontSize: 14,
        color: '#555',
        marginBottom: 6,
    },
    serviceImage: {
        width: '100%',
        height: 80,
        borderRadius: 8,
        marginBottom: 8,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: '600',
    },
    serviceDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        color: '#28a745',
        fontWeight: 'bold',
    },
    qrContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    qrImage: {
        width: 280,
        height: 280,
        marginVertical: 10,
    },
    shareButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 8,
    },
    shareButtonText: {
        color: '#fff',
        marginLeft: 6,
    },
    infoBox: {
        padding: 12,
        backgroundColor: '#fff3cd',
        borderRadius: 8,
        marginBottom: 12,
    },
    statusBox: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#e2e3e5',
        marginBottom: 12,
    },
    paymentStatus: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 6,
    },
    statusApproved: {
        color: '#28a745',
    },
    statusPending: {
        color: '#dc3545',
    },
    reloadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#17a2b8',
        padding: 8,
        borderRadius: 6,
        marginTop: 8,
    },
    reloadButtonText: {
        color: '#fff',
        marginLeft: 5,
    },
    confirmButton: {
        backgroundColor: '#28a745',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    confirmButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
