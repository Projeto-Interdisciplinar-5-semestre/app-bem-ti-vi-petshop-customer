import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5d4f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  scroll: {
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderColor: '#c9d6d8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    color: '#007b83',
    fontSize: 16,
    marginBottom: 5,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  linkText: {
    color: '#007b83',
    marginRight: 5,
  },
});
