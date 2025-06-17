import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3EFFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 280,  // Largura reduzida
    height: 200, // Altura reduzida significativamente
    resizeMode: 'contain',
    marginBottom: 25,  // Espaço reduzido abaixo da logo
  },
  instructionText: {
    color: '#256489',
    fontSize: 16, 
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    marginBottom: 25,  // Margem reduzida
    paddingHorizontal: 20,
    lineHeight: 24,
    marginTop: -5,  // Adicionado para subir o texto
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C9EBFF',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(37, 100, 137, 0.3)',
    height: 48,
    width: '100%',
  },
  inputIcon: {
    width: 28,
    height: 28,
    marginRight: 10,
    opacity: 0.65,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    fontFamily: 'Montserrat-Medium',
    paddingVertical: 0,
  },
  loginButton: {
    backgroundColor: '#256489',
    borderRadius: 30,
    padding: 12,
    width: 250,
    height: 50,  // Altura reduzida
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 8,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,  // Fonte um pouco menor
    fontFamily: 'Montserrat-Bold',
    letterSpacing: 0.5,
    textAlign: 'center',
    width: '100%',
  },
  backButton: {
    marginTop: 15,  // Espaço reduzido
  },
  backButtonText: {
    color: '#256489',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    textDecorationLine: 'underline',
  },
});