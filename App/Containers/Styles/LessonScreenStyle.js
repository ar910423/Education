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
    fontSize: 28,
    fontWeight: 'bold',
  },
  text2: {
    color: Colors.text1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subjectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  videoContainer: {

  },
  lessonsContainer: {
    marginHorizontal: 24,
    marginVertical: 16,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  lessonRow: {
    marginVertical: 4,
    marginLeft: -32,
    marginRight: 28,
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 4,
    marginHorizontal: 12,
    backgroundColor: Colors.secondary,
  },
  videoContainer: {
    marginBottom: 16,
    marginHorizontal: 24,
    borderRadius: 16,
  },
  video: {
    width: width - 48,
    height: 160,
    borderRadius: 16,
  },
})
