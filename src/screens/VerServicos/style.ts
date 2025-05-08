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
    paddingBottom: 40
  },
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 4
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
    marginTop: 2
  },
  greetingContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center'
  },
  greetingText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: '#333',
    textAlign: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 45,
    marginHorizontal: 16,
    marginBottom: 30, // Aumentado o espaçamento inferior
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
  servicosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  servicoCard: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  cardContent: {
    width: '100%',
  },
  servicoImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  servicoInfo: {
    padding: 12,
  },
  servicoNome: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
    height: 40, // Altura fixa para alinhar os preços
  },
  precoContainer: {
    marginTop: 'auto' // Alinha no fundo do card
  },
  precoLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
    textAlign: 'left',
  },
  servicoPreco: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#4CAF50',
    textAlign: 'left',
  },
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