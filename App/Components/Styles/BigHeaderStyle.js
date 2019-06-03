import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

const {width, height} = Dimensions.get('window')
const headerHeight = Metrics.bigHeaderHeight;

export default StyleSheet.create({
  container: {
    width: width,
    height: headerHeight,
    paddingTop: (Platform.OS === 'ios') ? 32 : 10,
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
    paddingTop: 8,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  subTitle: {
    marginTop: 4,
    fontSize: 18,
    color: 'white',
  },
  iconContainer: {
    marginTop: 10,
    width: 40,
    height: 40,
  },
})
