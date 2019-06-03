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
  searchInputStyle: {
    fontSize: 16,
    color: Colors.text1,
  },
  searchContainer: {
    marginVertical: 16,
    marginHorizontal: 16,
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchInputContainer: {
    borderRadius: 19,
    paddingLeft: 4,
    backgroundColor: Colors.primaryBackground,
    width: width - 32,
    height: 38,
  },
  skillsRow: {
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  semiCircleButton: {
    marginHorizontal: 8,
  },
  semiCircleText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  coursesContainer: {
    marginHorizontal: 16,
    width: width - 32,
  },
  title: {
    fontSize: 24,
    color: Colors.text1,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 32,
    marginTop: 24,
    marginBottom: 14,
    lineHeight: 28,
  },
  coursesRow: {
    flexDirection: 'row',
  },
  courseContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  courseImage: {
    width: 48,
    height: 48,
  },
  label: {
    color: Colors.text1,
    marginTop: 12,
    marginBottom: 4,
    fontSize: 18,
    fontWeight: 'bold',
  },
  course: {
    color: Colors.text3,
    fontSize: 14,
  },
})
