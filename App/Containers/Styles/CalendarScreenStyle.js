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
  blogPanelContainer: {
    marginBottom: 16,
  },
  blogContainer: {
    marginVertical: 10,
    marginHorizontal: 24,
    width: width - 48,
    borderRadius: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 20,
    paddingRight: 12,
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    color: Colors.text1,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: Colors.text3,
  },
  content: {
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 20,
  },
  calendarContainer: {
    marginHorizontal: 24,
    marginVertical: 16,
    borderRadius: 16,
    backgroundColor: 'white',
  },
  calendar: {
    borderRadius: 16,
  },
})
