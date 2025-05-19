import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputData: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 12,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  conteudoCard: {
    flex: 1,
  },
  servico: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  dataHora: {
    fontSize: 14,
    color: '#444',
  },
  status: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statusAgendado: {
    backgroundColor: '#1E4C3A',
  },
  statusConfirmado: {
    backgroundColor: '#C19732',
  },
  botoesArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  botaoVer: {
    backgroundColor: '#007A1C',
    padding: 12,
    borderRadius: 14,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  textoVer: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botaoCancelar: {
    backgroundColor: '#B30000',
    padding: 12,
    borderRadius: 14,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  textoCancelar: {
    color: '#fff',
    fontWeight: 'bold',
  },

  botaoFiltrar: {
  backgroundColor: '#6200EE',
  padding: 10,
  borderRadius: 5,
  marginTop: 10,
  alignItems: 'center',
},
textoFiltrar: {
  color: '#fff',
  fontFamily: 'Montserrat-SemiBold'
}

});
