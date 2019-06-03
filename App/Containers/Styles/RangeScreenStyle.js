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
  partyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 16,
  },
  panelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  subjectsRow: {
    width: width - 64,
    // paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
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
  rangeContainer: {
    backgroundColor: 'white',
    width: width - 32,
    marginVertical: 10,
    marginHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: Colors.text1,
  },
  rangeRow: {
    marginTop: 4,
  },
  range: {
    flex: 1, 
    height: 60, 
    paddingHorizontal: 10, 
    marginTop: 8, 
    backgroundColor: 'transparent',
  }
})
