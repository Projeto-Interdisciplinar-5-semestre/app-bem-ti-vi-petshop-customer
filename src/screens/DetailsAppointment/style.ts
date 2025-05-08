import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
  card: {
    borderWidth: 1,
    borderColor: '#1985A1',
    padding: 15,
    borderRadius: 10,
  },
  imagens: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  imagemPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  servico: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: '#1985A1',
  },
  preco: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  descricao: {
    marginBottom: 10,
  },
  data: {
    color: '#1985A1',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  botaoCancelar: {
    backgroundColor: '#D90000',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoCancelar: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
