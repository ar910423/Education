import React, { Component } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { DrawerActions } from 'react-navigation'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/SkillScreenStyle'
import BigHeader from '../Components/BigHeader'
import { Images, Colors } from '../Themes'
import SemiCircleButton from '../Components/SemiCircleButton';

class SkillScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Skills',
    drawerIcon: ({ tintColor }) => {
      return (
        <Image
          source={Images.olympiad}
          style={{width: 36, height: 36, marginRight: 0}}
        />
      )
    },
  };

  constructor (props) {
    super(props)
    this.state = {
      subjects: [
        'Mathematics', 'Science', 'Commerce', 'English', 'CSE', 'Applied Chemitry', 'Accounting', 'Banking', 'Sociology', 'Software Engineering', 'BBA', 'Law'
      ],
      skills: [
        {label: 'My Interests', color: Colors.secondary, values: [false, false, false, false, false, false, false, false, false, false, false, false]},
        {label: 'My Skills', color: Colors.primary, values: [false, false, false, false, false, false, false, false, false, false, false, false]},
      ],
    }
  }

  onClickSemiCircleButton(skillIndex, valueIndex) {
    let skills = this.state.skills;
    skills[skillIndex].values[valueIndex] = !skills[skillIndex].values[valueIndex];
    this.setState({skills});
  }

  goBack() {
    // this.props.navigation.goBack()
    this.props.navigation.dispatch(DrawerActions.openDrawer())
  }

  renderSkill() {
    return this.state.skills.map((skill, skillIndex) => {
      return (
        <View style={styles.partyContainer} key={"Skill_" + skillIndex.toString()}>
          <Text style={styles.skillLabel}>{skill.label}</Text>
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
        <BigHeader title="Milly Groam" subTitle="New York" onClickBack={() => this.goBack()} />
        <ScrollView style={styles.bodyContainer}>
          <View style={styles.imageContainer}>
            <Image source={Images.skill} style={styles.image} />
          </View>
          {this.renderSkill()}
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillScreen)
