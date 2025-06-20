import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  messagesList: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },

  // Mensagem do usuário (VOCÊ)
  user: {
    backgroundColor: '#DCF8C6', // verde claro
    alignSelf: 'flex-end',
  },

  // Mensagem do bot (ADMIN)
  bot: {
    backgroundColor: '#ECECEC', // cinza claro
    alignSelf: 'flex-start',
  },

  // Nome "Você"
  messageAuthorUser: {
    fontSize: 12,
    color: '#34A853', // verde Google/WhatsApp
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 2,
  },

  // Nome "Admin"
  messageAuthorBot: {
    fontSize: 12,
    color: '#4285F4', // azul Google
    fontFamily: 'Montserrat_700Bold',
    marginBottom: 2,
  },

  messageText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Montserrat_400Regular',
  },

  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },

  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: '#333',
  },

  sendButton: {
    backgroundColor: '#34B7F1',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EADCF3',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  headerTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat_700Bold',
    color: '#333',
  },
});
