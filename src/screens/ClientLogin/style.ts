import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#D9F2FF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 300,
    height: 230,
    marginBottom: 15,
  },
  loginTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F4E6C',
    marginBottom: 20,
    fontFamily: 'Montserrat-Bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    width: '100%',
    maxWidth: 320,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#333',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#1F4E6C',
    fontFamily: 'Montserrat-Regular',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#1F4E6C',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  registerText: {
    fontSize: 12,
    color: '#1F4E6C',
    fontFamily: 'Montserrat-Regular',
  },
  registerLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontFamily: 'Montserrat-Bold',
  },
});
