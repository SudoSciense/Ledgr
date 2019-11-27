import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    padding: 20,
  },
  breakdownItem: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  breakdownSection: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Style;
