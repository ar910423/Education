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
  imageContainer: {
  },
  image: {
    width: width,
    height: width * 0.524737,
  },
  partyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  skillLabel: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.text1,
    marginTop: 16,
    marginBottom: 8,
  },
  panelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  subjectsRow: {
    width: width,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
  },
  separator: {
    width: width,
    height: 1,
    backgroundColor: '#BEE2EA',
  }
})
