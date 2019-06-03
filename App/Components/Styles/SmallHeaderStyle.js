import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

const {width, height} = Dimensions.get('window')
const headerHeight = Metrics.smallHeaderHeight;

export default StyleSheet.create({
  container: {
    width: width,
    height: headerHeight,
    paddingTop: (Platform.OS === 'ios') ? 46 : 10,
    flexDirection: 'row',
  },
  containerBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: headerHeight,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  iconContainer: {
    width: 40,
    height: 40,
  },
})
