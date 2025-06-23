import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    listContent: {
        paddingBottom: 20,
    },
    rowWrapper: {
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    cardContent: {
        flex: 1,
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 5,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    categoryImage: {
        width: "90%",
        height: 100,
        borderRadius: 30,
        marginBottom: 8,
    },
    categoryName: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
        textAlign: "center",
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginVertical: 10,
        fontSize: 16,
    },
});
