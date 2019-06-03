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
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  infoContainer: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  infoTitle: {
    color: Colors.text1,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1.0,
  },
  infoText: {
    color: Colors.primary,
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 3.2,
  },
  chartContainer: {
    marginVertical: 16,
    marginRight: 32,
  },
  chartTitle: {
    color: Colors.text1,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'right',
    marginBottom: 4,
  }
})
