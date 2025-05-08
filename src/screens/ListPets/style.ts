import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollView: {
    flex: 1,
    marginBottom: 70
  },
  scrollContent: {
    paddingBottom: 30,
    paddingHorizontal: 16
  },
  
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor: '#EADDFF',
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Montserrat-Black',
    fontSize: 18,
    color: '#333',
    marginRight: 8
  },
  menuIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginBottom: 5
  },
  
  // Seção "Meus Serviços"
  sectionHeader: {
    paddingTop: 35,
    paddingBottom: 6,
    alignItems: 'center',
    marginBottom: 8
  },
  sectionTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#333',
    textAlign: 'center'
  },
  cadastrarButton: {
    backgroundColor: '#256489',
    borderRadius: 30,
    padding: 16,
    width: 250,
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignSelf: 'center',
    marginBottom: 20
  },
  cadastrarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: 0.5,
    marginLeft: 8
  },
  cadastrarButtonIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#fff'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 45,
    marginHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#666',
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#333',
    paddingVertical: 0,
    paddingTop: 0,
    includeFontPadding: false,
    textAlignVertical: 'center',
    marginTop: 0,
    paddingBottom: 0,
  },
  petsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    marginTop: 10
  },
  petCard: {

    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20
  },
  petContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    flexShrink: 1
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
    overflow: 'hidden',
  },
  petImageStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  petInfo: {
    flex: 1,
    paddingVertical: 0,
    flexShrink: 1,
    minWidth: 0
  },
  petLabel: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    color: '#666',
    marginBottom: 2
  },
  petValue: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#333',
    marginBottom: 10,
    flexShrink: 1,
    minWidth: 0
  },
  petActions: {
    flexDirection: 'row',
    marginLeft: 8,
    alignItems: 'center'
  },
  actionButton: {
    padding: 2.5,
    marginHorizontal: 2
  },
  actionIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain'

  },
  tableBody: {
    backgroundColor: '#FFFFFF',
    padding: 12
  },
  descricaoText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#666',
    lineHeight: 20
  },
  
  // Container do Botão
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  
  // Botão Cancelar estilizado
  deleteButton: {
    backgroundColor: '#B40000',
    borderRadius: 35,
    width: 200,
    height: 55,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: 0.5
  },
  
  // Navegação Inferior
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 60,
    padding: 5,
    position: 'relative'
  },
  navIconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36
  },
  activeIndicator: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#D3E5F5',
    zIndex: 0
  },
  navIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    zIndex: 1
  },
  navLabel: {
    fontSize: 12,
    color: '#333',
    fontFamily: 'Montserrat-Medium',
    marginTop: 2
  }
});

export default styles;