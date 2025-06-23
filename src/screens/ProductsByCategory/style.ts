import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9F9F9",
        paddingTop: 10,
        justifyContent: 'space-between'
    },

    subcontainer: {
        paddingHorizontal: 12,
    },
    
    subtitle: {
        fontSize: 22,
        textAlign: "center",
        marginVertical: 15,
        color: "#333",
        fontWeight: "700",
    },
    listContent: {
        paddingBottom: 20,
    },
    rowWrapper: {
        justifyContent: 'space-between',
    },
    productCard: {
        width: '47%',
        backgroundColor: "#FFFFFF",
        marginBottom: 15,
        borderRadius: 12,
        padding: 12,
        alignItems: "center",
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    productImage: {
        width: 110,
        height: 110,
        resizeMode: "contain",
        marginBottom: 8,
    },
    productName: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
        marginBottom: 4,
    },
    productRating: {
        fontSize: 12,
        color: "#FFA500",
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#00796B",
    },
    emptyText: {
        textAlign: "center",
        fontSize: 16,
        color: "#888",
        marginTop: 20,
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
