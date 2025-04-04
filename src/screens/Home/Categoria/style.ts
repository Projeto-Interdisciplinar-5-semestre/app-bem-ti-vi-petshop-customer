import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#FFF",
   },

   title:{
    backgroundColor: "#EADDFF", 
    color: "#000",           
    fontSize: 20,
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
    fontWeight: "bold"
 },
 
 categoryCard: {
    width: "45%", 
    margin: "2.5%", 
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 2, 
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
 },

 


 categoryText: {
    fontSize: 15,
    color: "#FFF",
    fontWeight: "bold",
 },

 menu:{
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
   paddingVertical: 80,

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