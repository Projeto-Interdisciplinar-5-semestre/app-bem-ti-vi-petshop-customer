import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  header: {
    backgroundColor: '#EAD9F4',
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginHorizontal: 16,
  },
  appointmentCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 10,
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  appointmentPet: {
    marginTop: 4,
    color: '#666',
  },
  appointmentDate: {
    marginTop: 2,
    color: '#666',
  },
  appointmentStatus: {
    marginTop: 4,
    color: '#258952',
  },
  viewMore: {
    marginTop: 8,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#256489',
    padding: 12,
    borderRadius: 14,
    margin: 16,
    alignItems: 'center',
  },
  buttonSmall: {
    backgroundColor: '#256489',
    padding: 8,
    borderRadius: 14,
    marginHorizontal: 16,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
  },
  productList: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  productCard: {
    width: 120,
    backgroundColor: '#fff',
    marginRight: 16,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  productImagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 12,
    color: 'green',
    marginTop: 4,
  },

  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
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


});
