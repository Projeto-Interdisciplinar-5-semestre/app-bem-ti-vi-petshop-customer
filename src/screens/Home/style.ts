import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f9fc',
    },
    scrollContainer: {
        padding: 16,
        paddingBottom: 20,
    },
    greetingContainer: {
        backgroundColor: '#4A90E2',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    greeting: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    subGreeting: {
        color: '#e0e0e0',
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
    },
    appointmentCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    appointmentTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 4,
    },
    appointmentPet: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 4,
    },
    appointmentDate: {
        fontSize: 14,
        color: '#3498db',
        marginBottom: 4,
    },
    appointmentStatus: {
        fontSize: 12,
        paddingVertical: 2,
        paddingHorizontal: 8,
        alignSelf: 'flex-start',
        borderRadius: 6,
        color: '#fff',
    },
    statusPending: {
        backgroundColor: '#f39c12',
    },
    button: {
        backgroundColor: '#2980b9',
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 12,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    section: {
        marginTop: 16,
    },
    productList: {
        flexDirection: 'row',
    },
    productCard: {
        width: 140,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginRight: 12,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    productImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 6,
    },
    productName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2c3e50',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 13,
        color: '#27ae60',
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    ratingStarsContainer: {
        flexDirection: 'row',
        marginRight: 4,
    },
    ratingText: {
        fontSize: 12,
        color: '#f1c40f',
    },
    starIcon: {
        width: 12,
        height: 12,
        marginRight: 2,
    },
});
