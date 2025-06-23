import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3EFFF',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    paddingTop: 10,
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
  },

  logo: {
    width: 500,
    height: 300,
  },

  logoSubText: {
    fontSize: 22,
    fontFamily: 'Montserrat-Black',
    color: '#256489',
    marginBottom: 2,
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

  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginRight: 15,
    marginBottom: 30,
    marginTop: -8,
  },

  forgotPasswordText: {
    color: '#256489',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },

  loginButton: {
    backgroundColor: '#256489',
    borderRadius: 30,
    padding: 12,
    width: 250,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignSelf: 'center',
    marginBottom: 8,
  },

  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: 0.5,
    textAlign: 'center',
    width: '100%',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  registerText: {
    color: '#256489',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },

  registerLink: {
    color: '#256489',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    textDecorationLine: 'underline',
  },

  error: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FF0000',
    marginVertical: 10
  }
  
});
