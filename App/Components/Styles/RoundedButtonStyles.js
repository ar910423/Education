import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 6,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.text1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
  }
})
