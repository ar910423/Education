import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

const {width, height} = Dimensions.get('window');
const headerHeight = Metrics.bigHeaderHeight;
const bodyHeight = height - headerHeight;

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  headerContainer: {
    width: width,
    height: headerHeight,
    paddingTop: (Platform.OS === 'ios') ? 32 : 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainerBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: headerHeight,
  },
  headerText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  bodyContainer: {
    width: width,
    height: bodyHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlsContainer: {
    alignItems: 'center',
  },
  input: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.secondary,
    width: width - 48,
    height: 52,
    paddingHorizontal: 16,
    fontSize: 20,
    color: Colors.text1,
  },
  name: {
    marginTop: 24,
  },
  email: {
    marginVertical: 16,
  },
  password: {
    marginBottom: 24,
  },
  forgotRow: {
    marginVertical: 20,
    width: width,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxContainer: {
    margin: 0, 
    marginLeft: 4,
    padding: 0, 
    backgroundColor: 'transparent', 
    borderWidth: 0,
  },
  checkboxWrapper: {
    margin: 0, 
    padding: 0, 
  },
  checkboxText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: Colors.text1,
  },
  signupButton: {
    width: width * 0.68,
    marginTop: 16,
    borderRadius: 10,
  },
  signupButtonText: {
    fontSize: 28,
  },
  rememberContainer: {
    alignItems: 'center',
    height: 96,
  },
  separator: {
    height: 16,
    width: width,
  },
  label: {
    marginTop: 8,
    marginBottom: 4,
    fontSize: 18,
    color: Colors.text5,
  },
  textButtonText: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: 'bold',
  },
})
