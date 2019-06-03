import React, { Component } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'
import { SearchBar } from 'react-native-elements'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/SearchScreenStyle'
import SmallHeader from '../Components/SmallHeader'
import { Colors, ApplicationStyles, Images } from '../Themes'
import SemiCircleButton from '../Components/SemiCircleButton'

class SearchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchString: '',
      skills: ['Popular courses', 'Top courses'],
      courses: [
        {image: Images.physics, label: 'Physics', num: 24},
        {image: Images.literature, label: 'Literature', num: 22},
        {image: Images.management, label: 'Management', num: 32},
        {image: Images.geografy, label: 'Geografy', num: 24},
      ],
    }
  }

  onClickCourse(index) {
    this.props.goQuestionsScreen(this.state.courses[index]);
  }

  goBack() {
    this.props.navigation.goBack()
  }

  renderSearch() {
    return(
      <View>
        <SearchBar
          placeholder="Search..."
          autoCapitalize='none'
          placeholderTextColor={Colors.text4}
          value={this.state.searchString}
          onChangeText={(searchString) => this.setState({searchString})}
          inputStyle={styles.searchInputStyle}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
        />
      </View>
    )
  }

  renderSkills() {
    return (
      <View style={styles.skillsContainer}>
        <View style={styles.skillsRow}>
          <SemiCircleButton text="Popular courses" color={Colors.secondary} selected={true} buttonStyle={styles.semiCircleButton} textStyle={styles.semiCircleText} />
          <SemiCircleButton text="Top courses" color={Colors.secondary} selected={true} buttonStyle={styles.semiCircleButton} textStyle={styles.semiCircleText} />
        </View>
      </View>
    )
  }

  renderCourses() {
    return (
      <View style={styles.coursesContainer}>
        <Text style={styles.title}>The most important principles of Physics</Text>
        {
          this.state.courses.map((c, ci) => {
            if (ci % 2 == 0) {
              return (
                <View key={'CourseRow_' + ci.toString()} style={styles.coursesRow}>
                  {
                    this.state.courses.filter((course, index) => index >= ci && index < ci + 2).map((course, index) => {
                      return (
                        <TouchableOpacity 
                          key={'Course_' + (ci + index).toString()} 
                          onPress={() => this.onClickCourse(ci + index)}
                          style={[styles.courseContainer, ApplicationStyles.shadow]}
                        >
                          <Image source={course.image} resizeMode="cover" style={styles.courseImage} />
                          <Text style={styles.label}>{course.label}</Text>
                          <Text style={styles.course}>{course.num.toString() + ' Courses'}</Text>
                        </TouchableOpacity>
                      )
                    })
                  }
                </View>
              )
            }
          })
        }
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <SmallHeader title="Search" onClickBack={() => this.goBack()} />
        <ScrollView style={styles.bodyContainer}>
          {this.renderSearch()}
          {this.renderSkills()}
          {this.renderCourses()}
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
    goQuestionsScreen: (course) => dispatch(StackActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'QuestionsScreen', params: {course}})]}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
