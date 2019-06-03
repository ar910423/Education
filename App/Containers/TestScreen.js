import React, { Component } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/TestScreenStyle'
import { Colors, ApplicationStyles, Images } from '../Themes'
import SmallHeader from '../Components/SmallHeader'

class TestScreen extends Component {
  constructor (props) {
    super(props)

    const { state: {params}} = this.props.navigation;

    this.state = {
      course: params.course,
    }
  }

  goBack() {
    this.props.navigation.goBack()
  }

  renderTestTitle() {
    return (
      <View style={[styles.titleContainer, ApplicationStyles.shadow]}>
        <Image source={this.state.course.image} resizeMode='cover' style={styles.courseImage} />
        <View style={styles.infoCol}>
          <Text style={styles.courseLabel}>{this.state.course.label}</Text>
          <Text style={styles.title}>Test</Text>
        </View>
      </View>
    )
  }

  renderDetails() {
    const accuracy = 50, speed = 64;

    return (
      <View style={styles.detailsContainer}>
        <View style={styles.detailsCol}>
          <Text style={styles.text1}>ACCURACY</Text>
          <ProgressCircle
            percent={accuracy}
            radius={50}
            borderWidth={8}
            color={Colors.primary}
            shadowColor={Colors.primaryBackground}
            bgColor="#fff"
          >
            <Text style={styles.text2}>{accuracy.toString() + "%"}</Text>
          </ProgressCircle>
        </View>
        <View style={styles.detailsCol}>
          <Text style={styles.text1}>SPEED</Text>
          <ProgressCircle
            percent={speed}
            radius={50}
            borderWidth={8}
            color={Colors.primary}
            shadowColor={Colors.primaryBackground}
            bgColor="#fff"
          >
            <Text style={styles.text2}>{speed.toString() + "%"}</Text>
          </ProgressCircle>
        </View>
      </View>
    )
  }

  renderScore() {
    return (
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreLabel}>YOUR SCORE</Text>
        <Text style={styles.score}>4</Text>
      </View>
    )
  }

  renderResults() {
    return (
      <View style={styles.resultsContainer}>
        <View style={[styles.resultContainer, styles.outResultContainer]}>
          <View style={styles.resultNumContainer}><Text style={styles.resultNum}>4</Text></View>
          <Text style={styles.resultLabel}>Correct Answer</Text>
        </View>
        <View style={[styles.resultContainer]}>
          <View style={styles.resultNumContainer}><Text style={styles.resultNum}>2</Text></View>
          <Text style={styles.resultLabel}>Incorrect</Text>
        </View>
        <View style={[styles.resultContainer, styles.outResultContainer]}>
          <View style={styles.resultNumContainer}><Text style={styles.resultNum}>6</Text></View>
          <Text style={styles.resultLabel}>Not Attempted</Text>
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <SmallHeader title="Test" onClickBack={() => this.goBack()} />
        <ScrollView style={styles.bodyContainer}>
          {this.renderTestTitle()}
          {this.renderDetails()}
          {this.renderScore()}
          {this.renderResults()}
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

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen)
