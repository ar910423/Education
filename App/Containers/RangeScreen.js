import React, { Component } from 'react'
import { View, ScrollView, Text, Switch } from 'react-native'
import { SearchBar } from 'react-native-elements'
import RangeSlider from 'react-native-range-slider'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/RangeScreenStyle'
import SmallHeader from '../Components/SmallHeader'
import SemiCircleButton from '../Components/SemiCircleButton'
import { Colors, ApplicationStyles } from '../Themes'

class RangeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchString: '',
      highest: true,
      subjects: [
        'Mathematics', 'Science', 'Commerce', 'English', 'CSE', 'Applied Chemitry', 'Accounting', 'Banking', 'Sociology', 'Software Engineering', 'BBA', 'Law'
      ],
      skills: [
        {label: '', color: Colors.secondary, values: [false, false, false, false, false, false, false, false, false, false, false, false]},
      ],
    }
  }

  onClickSemiCircleButton(skillIndex, valueIndex) {
    let skills = this.state.skills;
    skills[skillIndex].values[valueIndex] = !skills[skillIndex].values[valueIndex];
    this.setState({skills});
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

  renderRange() {
    return (
      <View style={[styles.rangeContainer, ApplicationStyles.shadow]}>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Highest Rate First</Text>
          <Switch value={this.state.highest} onValueChange={(v) => this.setState({highest: v})} trackColor={{true: Colors.primary}} />
        </View>
        <View style={styles.rangeRow}>
          <Text style={styles.label}>Highest Rate First</Text>
          <RangeSlider
            minValue={0}
            maxValue={100}
            tintColor={Colors.primaryDeactive}
            handleColor='#ffffff'
            handleBorderWidth={3}
            handleBorderColor={Colors.primary}
            tintColorBetweenHandles={Colors.primary}
            minLabelColour={Colors.text1}
            maxLabelColour={Colors.text1}
            lineHeight={2}
            suffix='TK'
            selectedMinimum={20}
            selectedMaximum={40}
            style={styles.range}
            onChange={ (data)=>{ console.log(data);} }
          />
        </View>

      </View>
    )
  }

  renderSubjects() {
    return this.state.skills.map((skill, skillIndex) => {
      return (
        <View style={[styles.partyContainer, ApplicationStyles.shadow]} key={"Skill_" + skillIndex.toString()}>
          <View style={styles.panelContainer}>
            {
              this.state.subjects.map((subject, subjectIndex) => {
                if (subjectIndex % 3 == 0) {
                  return (
                    <View key={'SubjectRow_' + subjectIndex.toString()} style={styles.subjectsRow}>
                      {
                        this.state.subjects.filter((v, i) => i >= subjectIndex && i < subjectIndex + 3).map((s, si) => {
                          let selected = skill.values[subjectIndex + si];
                          return (
                            <SemiCircleButton 
                              key={"Subject_" + (subjectIndex + si).toString()} 
                              text={s} 
                              onPress={() => this.onClickSemiCircleButton(skillIndex, (subjectIndex + si))}
                              selected={selected} 
                              color={skill.color} 
                            />
                          )
                        })
                      }
                    </View>
                  )
                }
              })
            }
          </View>
          { skillIndex == this.state.skills.length - 1 ? null : <View style={styles.separator} /> }
        </View>
      );
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <SmallHeader onClickBack={() => this.goBack()} />
        <ScrollView style={styles.bodyContainer}>
          {this.renderSearch()}
          {this.renderRange()}
          {this.renderSubjects()}
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

export default connect(mapStateToProps, mapDispatchToProps)(RangeScreen)
