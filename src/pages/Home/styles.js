import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  view: {
    flex: 1,
  },
  insertContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  header: {
    height: 70,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
