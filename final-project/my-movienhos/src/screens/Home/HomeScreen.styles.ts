import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#23272f',
    paddingVertical: 32,
    height: '100%',
  },
  highlightsSection: {
    alignItems: 'center',
    marginBottom: 8,
    width: '100%',
  },
  highlightsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
    color: '#fff',
  },
  sectionText: {
    fontSize: 16,
    color: '#bdbdbd',
    marginHorizontal: 16,
  },
});
