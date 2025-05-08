import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContainer: {
    paddingBottom: 80,
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
    backgroundColor: '#ECEAEA',
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
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 15,
    color: '#000000',
    fontWeight: "bold",
    marginTop: 4,
  },

  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },


  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  ratingText: {
    marginRight: 4,
    fontSize: 12,
    fontWeight: "semibold",
  },

});
