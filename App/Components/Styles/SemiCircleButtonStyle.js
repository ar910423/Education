import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    height: 28,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    color: Colors.text1,
  }
})
