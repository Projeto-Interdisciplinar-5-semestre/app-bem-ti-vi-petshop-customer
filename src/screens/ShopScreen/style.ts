import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PRIMARY_COLOR = '#256489';
const SECONDARY_COLOR = '#e3f2fd';
const ACCENT_COLOR = '#e74c3c';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingTop: 16,
    },

    subcontainer: {
        paddingHorizontal: 16,
    },

    buttonCategories: {
        borderRadius: 20,
        width: "70%",
        alignSelf: 'center',
        padding: 10,
        backgroundColor: PRIMARY_COLOR,
    },

    buttonTextCategories: {
        fontSize: 16,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        color: "#ffffff",
    },

    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        height: 50,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    searchInputBar: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#333',
        paddingVertical: 10,
    },
    searchIcon: {
        width: 20,
        height: 20,
        tintColor: '#7f8c8d',
    },
    categoriesContainer: {
        marginBottom: 20,
    },
    categoriesContent: {
        paddingRight: 16,
    },
    categoryButton: {
        alignItems: 'center',
        marginRight: 12,
        width: 80,
    },
    categoryImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    selectedCategoryImageContainer: {
        borderWidth: 2,
        borderColor: PRIMARY_COLOR,
    },
    categoryIcon: {
        width: 60,
        height: 60,
        borderRadius: 10
    },
    selectedCategoryIcon: {
        tintColor: PRIMARY_COLOR,
    },
    categoryText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: '#7f8c8d',
        textAlign: 'center',
    },
    selectedCategoryText: {
        fontFamily: 'Montserrat-SemiBold',
        color: PRIMARY_COLOR,
    },
    bannerContainer: {
        height: 160,
        marginBottom: 20,
        position: 'relative',
        borderRadius: 12,
        overflow: 'hidden',
    },
    bannerImage: {
        width: width - 32,
        height: 160,
    },
    indicatorContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginHorizontal: 4,
    },
    activeIndicator: {
        backgroundColor: '#fff',
        width: 16,
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 12,
    },
    sectionTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        color: PRIMARY_COLOR,
        marginHorizontal: 10,
    },
    sectionLine: {
        flex: 1,
        height: 1,
        backgroundColor: PRIMARY_COLOR,
    },
    productTypesContainer: {
        marginBottom: 15,
    },
    productTypesContent: {
        paddingRight: 16,
    },
    productTypeButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#ecf0f1',
        marginRight: 10,
    },
    selectedProductTypeButton: {
        backgroundColor: PRIMARY_COLOR,
    },
    productTypeText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: '#7f8c8d',
    },
    selectedProductTypeText: {
        color: '#fff',
        fontFamily: 'Montserrat-Medium',
    },
    productsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    productCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    discountProductCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        position: 'relative',
    },
    discountBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: ACCENT_COLOR,
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        zIndex: 1,
    },
    discountText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        color: '#fff',
    },
    productImage: {
        width: '100%',
        height: 100,
        marginBottom: 8,
    },
    productInfo: {
        marginBottom: 5,
    },
    productName: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: '#2c3e50',
        marginBottom: 5,
    },
    productPrice: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: PRIMARY_COLOR,
    },
    discountPrice: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: ACCENT_COLOR,
    },
    originalPrice: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: '#95a5a6',
        textDecorationLine: 'line-through',
        marginLeft: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
        width: '100%',
    },
    quantityButton: {
        backgroundColor: PRIMARY_COLOR,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
    },
    quantityText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: '#333',
        marginHorizontal: 10,
    },

    starIcon: {
        width: 16,
        height: 16,
        marginRight: 2,
    },

    ratingStarsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    ratingText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#333',
        marginLeft: 8,
    },
});