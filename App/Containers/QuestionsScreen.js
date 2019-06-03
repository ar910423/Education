import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/QuestionsScreenStyle'
import SmallHeader from '../Components/SmallHeader'
import RoundedButton from '../Components/RoundedButton'
import { ApplicationStyles } from '../Themes'

class QuestionsScreen extends Component {
  constructor (props) {
    super(props)

    const { state: {params}} = this.props.navigation;

    this.state = {
      curNum: 5,
      course: params.course,
      check: [true, false, false],
    }
  }

  goBack() {
    this.props.navigation.goBack()
  }

  onClickCheckboxes(index) {
    let arr = this.state.check;
    this.state.check.forEach((c, i) => {
      arr[i] = index == i;
    });
    this.setState({check: arr});
  }

  onClickNext() {
    this.props.goTestScreen(this.state.course);
  }

  renderQuestionNumbersContainer() {
    return (
      <View style={styles.questionNumbersContainer}>
        <Text style={styles.text1}>Questions</Text>
        <View style={styles.numRow}>
          {
            [1, 2, 3, 4, 5, 6, 7].map((num) => {
              return (
                <View style={[styles.num, num > this.state.curNum ? styles.notPassedNum : num == this.state.curNum ? styles.curNum : styles.passedNum]} key={"Num_" + num.toString()}>
                  <Text style={styles.text2}>{num.toString()}</Text>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }

  renderQuestion() {
    return (
      <View style={[styles.questionContainer, ApplicationStyles.shadow]}>
        <Text style={styles.text3}>Question #3</Text>
        <Text style={styles.text4}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut?</Text>
      </View>
    )
  }

  renderAnswer() {
    return (
      <View style={[styles.answersContainer, ApplicationStyles.shadow]}>
        <Text style={styles.text3}>Choose any one option</Text>
        <CheckBox 
          containerStyle={styles.checkboxContainer} 
          wrapperStyle={styles.checkboxWrapper} 
          checkedColor="#49ccee"
          uncheckedColor="#cccccc"
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          textStyle={styles.checkboxText}
          title='Whole Number' 
          checked={this.state.check[0]} 
          onPress={() => this.onClickCheckboxes(0)} 
        />
        <CheckBox 
          containerStyle={styles.checkboxContainer} 
          wrapperStyle={styles.checkboxWrapper} 
          checkedColor="#49ccee"
          uncheckedColor="#cccccc"
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          textStyle={styles.checkboxText}
          title='Natural Number' 
          checked={this.state.check[1]} 
          onPress={() => this.onClickCheckboxes(1)} 
        />
        <CheckBox 
          containerStyle={styles.checkboxContainer} 
          wrapperStyle={styles.checkboxWrapper} 
          checkedColor="#49ccee"
          uncheckedColor="#cccccc"
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          textStyle={styles.checkboxText}
          title='Integer Number' 
          checked={this.state.check[2]} 
          onPress={() => this.onClickCheckboxes(2)} 
        />

      </View>
    )
  }

  renderButton() {
    return (
      <View style={styles.buttonContainer}>
        <RoundedButton onPress={() => this.onClickNext()} text="NEXT" buttonStyle={styles.button} textStyle={styles.text2} />
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <SmallHeader title={this.state.course.label + " Test"} onClickBack={() => this.goBack()} />
        <ScrollView style={styles.bodyContainer}>
          {this.renderQuestionNumbersContainer()}
          {this.renderQuestion()}
          {this.renderAnswer()}
          {this.renderButton()}
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
    goTestScreen: (course) => dispatch(StackActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'TestScreen', params: {course}})]}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsScreen)
