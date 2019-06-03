import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  title: {
    marginBottom: 12,
    fontSize: 42,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 2,
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  logoContainer: {
    marginVertical: 52,
  },
  logo: {
    width: width * 0.6,
    height: width * 0.6 * Metrics.logoRate,
  },
  button: {
    width: width * 0.72,
    height: 88,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 40,
  },
})
