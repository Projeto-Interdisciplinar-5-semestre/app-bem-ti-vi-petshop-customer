import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  
  
});
