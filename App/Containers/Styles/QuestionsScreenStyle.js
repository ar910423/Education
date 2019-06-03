import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  bodyContainer: {
    flex: 1,
  },
  text1: {
    color: Colors.text1,
    fontSize: 24,
    fontWeight: 'bold',
  },
  text2: {
    color: Colors.text1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  text3: {
    color: Colors.text1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text4: {
    marginTop: 4,
    color: '#222222',
  },
  questionNumbersContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  numRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 48,
    marginTop: 24,
  },
  num: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passedNum: {
    borderColor: Colors.secondary,
    borderWidth: 2,
  },
  curNum: {
    backgroundColor: Colors.secondary,
  },
  notPassedNum: {
    borderColor: '#e6e6e6',
    borderWidth: 2,
  },
  questionContainer: {
    backgroundColor:'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginHorizontal: 24,
    borderRadius: 16,
  },
  answersContainer: {
    marginTop: 24,
    backgroundColor:'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginHorizontal: 24,
    borderRadius: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 36,
  },
  button: {
    width: 140,
    borderRadius: 12,
    height: 40,
  },
  checkboxContainer: {
    marginVertical: 8,
    marginRight: 0, 
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

})
