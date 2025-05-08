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
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
  filledStar: {
    tintColor: '#FFD700',
  },
  emptyStar: {
    tintColor: '#C0C0C0',
  },
  ratingText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  reviewsText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  
  // Botão de Comentários
  commentsButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#F0F8FF',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#D3E5F5'
  },
  commentsButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
    color: '#256489',
  },
  
  // Comments Section
  commentsContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 10,
  },
  commentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  commentAuthor: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: '#333',
  },
  commentRating: {
    flexDirection: 'row',
  },
  commentText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
    marginBottom: 8,
  },
  commentDate: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: '#999',
    textAlign: 'right',
  },
  
  // Container do Botão
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  
  // Botão Agendar Serviço
  agendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#258952',
    borderRadius: 35,
    width: '100%',
    maxWidth: 300,
    height: 55,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  agendarButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: 0.5,
    marginRight: 10
  },
  checkIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF'
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