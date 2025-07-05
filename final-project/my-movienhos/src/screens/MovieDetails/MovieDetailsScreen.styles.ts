import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#23272f',
  },
  header: {
    width: '100%',
    backgroundColor: '#23272f',
    paddingHorizontal: 0,
    paddingTop: 0,
    alignItems: 'flex-start',
  },
  posterRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 12,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  poster: {
    width: 110,
    height: 160,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#222',
  },
  infoBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  rating: {
    color: '#e3b341',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  metaText: {
    color: '#bdbdbd',
    fontSize: 14,
    marginRight: 16,
  },
  tabBar: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginTop: 16,
    marginBottom: 8,
    marginHorizontal: 0,
  },
  tabLabel: {
    color: '#bdbdbd',
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 8,
  },
  tabLabelActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 8,
  },
  tabContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  description: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 12,
    lineHeight: 22,
  },
  director: {
    color: '#bdbdbd',
    fontSize: 14,
    marginTop: 8,
  },
});
