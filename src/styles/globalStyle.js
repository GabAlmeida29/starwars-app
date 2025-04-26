import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 100,
    justifyContent: 'center',
    backgroundColor: '#5E80AD',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFFFFF',
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#25318A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    gap: 10,
  },
  backButton: {
    fontSize: 16,
    color: '#2563EB',
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  cardText: {
    fontSize: 18,
    color: '#25318A'
  }
});
