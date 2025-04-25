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
    marginBottom: 20
  },
  servicoImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginBottom: 16
  },
  servicoNome: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#333',
    marginBottom: 12,
    textAlign: 'center'
  },
  
  // Container de Horário centralizado com ícone à esquerda
  horarioContainer: {
    flexDirection: 'row',
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
    alignSelf: 'center'
  },
  relogioIcon: {
    width: 20,
    height: 20,
    tintColor: '#256489',
    marginRight: 8
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