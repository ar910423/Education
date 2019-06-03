import React, { Component } from 'react'
import { View, ScrollView, Text, Image, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/ChartScreenStyle'
import BigHeader from '../Components/BigHeader'
import { Images, Colors } from '../Themes'

class ChartScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  goBack() {
    this.props.navigation.goBack()
  }

  renderChart() {
    return (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>MARCH</Text>
        <LineChart
          data={{
            labels: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
            datasets: [
              {
                data: [
                  Math.random() * 100, 
                  Math.random() * 100, 
                  Math.random() * 100, 
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
                color: (opacity = 1) => Colors.secondary,
                strokeWidth: 4,
              }
            ]
          }}
          width={Dimensions.get('window').width - 32}
          height={220}
          fromZero={true}
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            strokeWidth: 10,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => Colors.text1,
          }}
          bezier
        />
      </View>
    );
  }

  renderInfo() {
    return (
      <View style={styles.infoRow}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Average Score</Text>
          <Text style={styles.infoText}>70%</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Exams Token</Text>
          <Text style={styles.infoText}>12</Text>
        </View>
      </View>
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <BigHeader title="Milly Groam" subTitle="New York" onClickBack={() => this.goBack()} />
        <ScrollView style={styles.bodyContainer}>
          <View style={styles.imageContainer}>
            <Image source={Images.skill} style={styles.image} />
          </View>
          {this.renderChart()}
          {this.renderInfo()}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartScreen)
