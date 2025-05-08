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
 
 cardContent: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  padding: 10,
  margin: 2, 
  width: "45%",
  alignSelf: "center", 
 
 },
 categoryImage: {
   width: 200, 
   height:64,
   resizeMode: "contain",
 },

 

 menu:{
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
   paddingVertical: 85,

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