import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

const {width, height} = Dimensions.get('window');
const height1 = 0.316;
const height2 = 1 - height1;

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  logoContainer: {
    width: width,
    height: height * height1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: height * height1 * 0.14,
  },
  logoContainerBackground: {
    position: 'absolute',
    height: height * height1,
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: width * 0.6,
    height: width * 0.6 * Metrics.logoRate,
  },
  bodyContainer: {
    width: width,
    height: height * height2,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsContainer: {

  },
  signupButton: {
    width: width * 0.68,
    marginTop: height * 0.08,
    borderWidth: 4,
    borderColor: Colors.secondary,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  signupButtonText: {
    fontSize: 28,
  },
  loginButton: {
    width: width * 0.68,
    marginTop: 24,
    borderRadius: 10,
  },
  loginButtonText: {
    fontSize: 32,
  },
  textButtonsContainer: {
    width: width,
    alignItems: 'center',
  },
  label: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  separator: {
    height: 16,
    width: width,
  },
  iconButtonsContainer: {
    width: width * 0.42,
    height: 80,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
