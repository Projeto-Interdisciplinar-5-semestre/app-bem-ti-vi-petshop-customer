import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
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
  subtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#666',
    marginTop: 5,
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
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#EEE',
    overflow: 'hidden'
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
  divider: {
    height: 3,
    backgroundColor: '#000',
    width: 160,
    marginBottom: 10
  },
  
  // Card do Serviço
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
    overflow: 'hidden'
  },
  servicoImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginBottom: 16
  },
  
  // Container de Horário
  horarioContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    height: 48,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#256489',
    marginBottom: 20,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 200
  },
  horarioText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: '#256489'
  },
  
  // Tabela de Descrição
  descricaoTable: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 10
  },
  tableHeader: {
    backgroundColor: '#256489',
    padding: 12,
    alignItems: 'center'
  },
  tableHeaderText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16
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

  // Rating Section
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  ratingStarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  
  servicoNome: {
    fontFamily: 'Montserrat-Black',
    fontSize: 18,
    color: '#333',
    marginRight: 8
  }
  
});
