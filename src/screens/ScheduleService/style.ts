import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    scrollContent: {
        paddingBottom: 30,
        paddingHorizontal: 16,
    },

    continueShoppingContainer: {
        alignItems: 'center',
        marginVertical: 16,
    },

    continueShoppingButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#256489',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 25,
    },

    cartIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
        tintColor: '#FFFFFF',
    },

    continueText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
    },

    itemCard: {
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        borderRadius: 15,
        padding: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },

    productImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 10,
    },

    productInfoContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    itemName: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#333',
        marginBottom: 4,
    },

    itemPrice: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
        color: '#666',
        marginBottom: 6,
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    quantityButton: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#256489',
        justifyContent: 'center',
        alignItems: 'center',
    },

    quantityText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
    },

    quantity: {
        marginHorizontal: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#333',
    },

    trashButton: {
        justifyContent: 'center',
        paddingLeft: 10,
    },

    trashIcon: {
        width: 20,
        height: 20,
        tintColor: '#E53935',
    },

    totalCard: {
        backgroundColor: '#256489',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 16,
    },

    totalLabel: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },

    totalValue: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        marginTop: 6,
    },

    section: {
        marginVertical: 16,
    },

    sectionTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },

    deliveryOptionsContainer: {},

    deliveryOptionCard: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 10,
        padding: 12,
    },

    deliveryOptionCardActive: {
        borderColor: '#256489',
        backgroundColor: '#E3F2FD',
    },

    deliveryOptionContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    deliveryRadio: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#256489',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

    deliveryRadioSelected: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#256489',
    },

    deliveryOptionText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#333',
    },

    deliveryAddressText: {
        marginTop: 8,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#666',
    },

    paymentMethodsContainer: {},

    paymentMethodCard: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 10,
        padding: 12,
    },

    paymentMethodCardActive: {
        borderColor: '#256489',
        backgroundColor: '#E3F2FD',
    },

    paymentMethodContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    paymentMethodImage: {
        width: 30,
        height: 30,
        marginRight: 12,
    },

    paymentMethodText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#333',
    },

    paymentMethodSubtext: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#666',
    },

    confirmButtonContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },

    confirmButton: {
        backgroundColor: '#258952',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
    },

    confirmButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },

    formGroup: {
        marginBottom: 16,
        marginHorizontal: 20,
    },

    label: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#333',
        marginBottom: 6,
        marginLeft: 4,
    },

    inputField: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
    },


});
