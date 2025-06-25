import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
  container: {
    paddingTop: 20
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 16
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#E8F4FD'
  },
  clientName: {
    fontSize: 20,
    color: '#2D3748',
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2
  },
  sectionHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2F7'
  },
  sectionTitle: {
    fontSize: 16,
    color: '#2D3748',
    fontFamily: 'Montserrat-SemiBold'
  },
  fieldContainer: {
    padding: 16
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  doubleFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 16
  },
  doubleField: {
    flex: 1
  },
  label: {
    fontSize: 13,
    color: '#718096',
    fontFamily: 'Montserrat-Medium',
    flex: 1
  },
  value: {
    fontSize: 14,
    color: '#2D3748',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'right',
    flex: 1
  },
  petsContainer: {
    padding: 16
  },
  petItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EDF2F7'
  },
  petInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  petIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#256489'
  },
  petName: {
    fontSize: 14,
    color: '#256489',
    fontFamily: 'Montserrat-Medium'
  },
  petButton: {
    backgroundColor: '#256489',
    borderRadius: 15,
    paddingVertical: 8,
    width: 70,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  petButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center'
  }
});
