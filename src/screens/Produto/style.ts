import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: "#FFF",

     },

     
    title:{
        backgroundColor: "#EADDFF", 
        color: "#000",           
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        padding: 15,    

     },

     subtitle:{
        fontSize: 20,
        textAlign: "center",
        marginTop: 15,
        marginBottom: 15,
        color: "#000",
        fontWeight: "900"
     },

     productCard:{
        width: "45%", 
        backgroundColor: "#ECEAEA",
        margin: "2.5%", 
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        elevation: 2, 
        shadowColor: "#000", 
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },

     },
     productImage:{
        width: 100,
        height: 100,

     },
     productName:{
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,

     },

     productRating:{
        fontSize: 12,
        marginTop: 2,
        textAlign: "center",
    
     },

     productPrice:{
        fontSize: 15,
        fontWeight: "bold",
     },

     menu:{
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
       paddingVertical: 15,

     },

     menuItem:{
        alignItems:"center",
     },

     menuText:{
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 5,
     }
        
     
    
})