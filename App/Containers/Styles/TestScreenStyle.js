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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  courseImage: {
    width: 84,
    height: 84,
    marginRight: 24,
    marginLeft: 8,
  },
  infoCol: {
    justifyContent: 'space-between',
    height: 84,
    paddingVertical: 4,
  },
  courseLabel: {
    color: Colors.text1,
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    color: Colors.text3,
    fontSize: 28,
  },
  scoreContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 14,
    marginHorizontal: 72,
    marginVertical: 16,
  },
  scoreLabel: {
    fontSize: 24,
    color: Colors.text1,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 28,
    color: Colors.text1,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  resultsContainer: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outResultContainer: {
    marginHorizontal: 20,
    width: 120,
  },
  resultNumContainer: {
    backgroundColor: Colors.primaryBackground,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    marginBottom: 4,
  },
  resultNum: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultLabel: {
    color: Colors.text2,
  },
  detailsContainer: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  detailsCol: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 140,
    height: 132,
    marginVertical: 16,
  },
  text1: {
    color: Colors.text1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text2: {
    color: Colors.text1,
    fontSize: 22,
    fontWeight: 'bold',
  },
})
