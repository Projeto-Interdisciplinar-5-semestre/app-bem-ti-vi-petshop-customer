
import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: StatusBar.currentHeight,
        
      },
      header: {
        backgroundColor: '#EADDFF',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerText: {
        fontSize: 20,
        color: '#000000',
        textTransform:'uppercase',
        fontFamily:"Poppins-Bold",
      },
      productTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
        fontFamily:"Montserrat-Black",
      },
      productCard: {
        backgroundColor: '#ECEAEA',
        borderRadius: 10,
        padding: 15,
        margin: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      productImage: {
        width: 350,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 10,
        backgroundColor: '#ffffff',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      cardTitle: {
        fontSize: 24,
        marginBottom: 5,
        fontFamily:"Montserrat-SemiBold"
      },
      cardPrice: {
        fontSize: 34,
        color: '#000000',
        marginBottom: 15,
         fontFamily:"Montserrat-Bold"
      },
      addButton: {
        backgroundColor: '#41FF47',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,

      },
      addButtonText: {
        color: '#000000',
        fontFamily:"Montserrat-Medium"
      },
      descriptionCard:{
        backgroundColor:'#ffffff',
        width:350,
        borderWidth: 1,
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        padding:14
      },
      descriptionLabel:{
        fontSize: 18,
        textAlign:'left',
        fontFamily:"Montserrat-Medium"
      },
      description: {
        fontSize: 14,
        color: '#555',
        textAlign: 'left',
        fontFamily:"Montserrat-Medium"
      },
      sectionTitle: {
        fontSize: 18,
        textAlign: 'left',
        marginVertical: 15,
        marginLeft:15,
        fontFamily:"Montserrat-Bold"
      },
      relatedProductsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        marginBottom: 20,
      },
      relatedProductCard: {
        backgroundColor: '#ECEAEA',
        borderRadius: 8,
        padding: 10,
        width: '45%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      },
      relatedProductImage: {
        width: 140,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 5,
        backgroundColor: '#FFFFFF',
        borderRadius:10,
      },
      relatedProductTitle: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 5,
        fontFamily:"Montserrat-SemiBold"
      },
      relatedProductPrice: {
        fontSize: 18,
        color: '#000',
        marginTop: 5,
        fontFamily:"Montserrat-Bold"
      },
      rating: {
        marginVertical: 5,
      },
      starRatingContainer: {
        marginTop: 16,
        display:'flex',
        flexDirection:'row',
        marginHorizontal:15,
      },
      ratingContainer: {
        marginTop: 10,
        marginHorizontal:12,
        backgroundColor:'#ECEAEA',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
        borderRadius:10,
        marginBottom:10
      },
      ratingTitle:{
        fontSize:18,
        fontWeight:'600',
        fontFamily:"Montserrat-Medium"
      },
      averageRating: {
        marginBottom: 10,
        paddingLeft:20,
        paddingRight:20,
      },
      commentCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginHorizontal: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      commentStarRatingContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
      },
      commentName: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily:"Montserrat-SemiBold"
      },
      commentRating: {
        marginBottom: 5,
      },
      commentTitle: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily:"Montserrat-SemiBold"
      },
      commentText: {
        fontSize: 14,
        color: '#555',
        fontFamily:"Montserrat-Medium"
      },
})