import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import Video from 'react-native-video'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/LessonScreenStyle'
import SmallHeader from '../Components/SmallHeader'
import { ApplicationStyles } from '../Themes';

class LessonScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  goBack() {
    this.props.navigation.goBack()
  }

  renderSubject() {
    return (
      <View style={styles.subjectContainer}>
        <Text style={styles.text1}>Physics</Text>
      </View>
    )
  }

  renderMovie() {
    return (
      <View style={styles.videoContainer}>
        <Video
          source={require('../Images/diy.mp4')}
          style={styles.video}
          controls={true}
          resizeMode={"cover"}
          volume={1.0}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
      </View>
    )
  }

  renderLessons() {
    return (
      <View style={[styles.lessonsContainer, ApplicationStyles.shadow]}>
        <Text style={styles.text2}>Lessons #3</Text>
        <View style={styles.lessonRow}>
          <View style={styles.dot} />
          <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut?</Text>
        </View>
        <View style={styles.lessonRow}>
          <View style={styles.dot} />
          <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut?</Text>
        </View>
        <View style={styles.lessonRow}>
          <View style={styles.dot} />
          <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut?</Text>
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <SmallHeader title="Lessons" onClickBack={() => this.goBack()} />
        <ScrollView style={styles.bodyContainer}>
          {this.renderSubject()}
          {this.renderMovie()}
          {this.renderLessons()}
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

export default connect(mapStateToProps, mapDispatchToProps)(LessonScreen)
