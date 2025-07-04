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
        fontFamily: 'Montserrat-Bold',
    },
    sectionBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 16,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 16,
        marginBottom: 4,
        color: '#444',
        fontFamily: 'Montserrat-SemiBold',
    },
    text: {
        fontSize: 14,
        color: '#555',
        marginBottom: 6,
        fontFamily: 'Montserrat-Regular',
    },
    price: {
        fontSize: 16,
        color: '#28a745',
        fontFamily: 'Montserrat-Bold',
    },
    itemBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    itemDetails: {
        marginLeft: 10,
    },
    itemName: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Montserrat-SemiBold',
    },
    itemPrice: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'Montserrat-Regular',
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 6,
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
        fontFamily: 'Montserrat-Medium',
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
        marginLeft: 25,
        marginTop: 6,
        fontFamily: 'Montserrat-Bold',
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
        fontFamily: 'Montserrat-Medium',
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
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
    },
});