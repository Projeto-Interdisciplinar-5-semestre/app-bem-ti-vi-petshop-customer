import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  voltar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  voltarTexto: {
    marginLeft: 8,
    fontSize: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#EDE1F5',
    padding: 10,
    borderRadius: 8,
  },
  subtitulo: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    borderWidth: 1,
    borderColor: '#1985A1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  servico: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#1985A1',
  },
  data: {
    marginTop: 5,
    color: '#1985A1',
  },
  verItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  verItemTexto: {
    marginRight: 5,
    color: '#1985A1',
  },
});
