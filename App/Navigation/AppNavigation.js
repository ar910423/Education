import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import MSettingsScreen from '../Containers/MSettingsScreen'
import MCreditsScreen from '../Containers/MCreditsScreen'
import MCareerScreen from '../Containers/MCareerScreen'
import MOlympiadScreen from '../Containers/MOlympiadScreen'
import MDiscussScreen from '../Containers/MDiscussScreen'
import MPrepareScreen from '../Containers/MPrepareScreen'
import LessonScreen from '../Containers/LessonScreen'
import QuestionsScreen from '../Containers/QuestionsScreen'
import TestScreen from '../Containers/TestScreen'
import SearchScreen from '../Containers/SearchScreen'
import RangeScreen from '../Containers/RangeScreen'
import ChartScreen from '../Containers/ChartScreen'
import CalendarScreen from '../Containers/CalendarScreen'
import SkillScreen from '../Containers/SkillScreen'
import SignupScreen from '../Containers/SignupScreen'
import LoginScreen from '../Containers/LoginScreen'
import StartScreen from '../Containers/StartScreen'
import WelcomeScreen from '../Containers/WelcomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import Menu from '../Components/Menu'

const MenuNav = createDrawerNavigator({
  SkillScreen: { screen: SkillScreen },
  MPrepareScreen: { screen: MPrepareScreen }, 
  MDiscussScreen: { screen: MDiscussScreen },
  MOlympiadScreen: { screen: MOlympiadScreen },
  MCareerScreen: { screen: MCareerScreen },
  MCreditsScreen: { screen: MCreditsScreen },
  MSettingsScreen: { screen: MSettingsScreen },
},
{
  initialRouteName: 'SkillScreen',
  contentComponent: (props) => (
    <Menu props={props} />
  ),
  drawerWidth: Dimensions.get('window').width * 0.8
})

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  MenuScreen: {screen: MenuNav},
  LessonScreen: { screen: LessonScreen },
  TestScreen: { screen: TestScreen },
  QuestionsScreen: { screen: QuestionsScreen },
  SearchScreen: { screen: SearchScreen },
  RangeScreen: { screen: RangeScreen },
  ChartScreen: { screen: ChartScreen },
  CalendarScreen: { screen: CalendarScreen },
  SignupScreen: { screen: SignupScreen },
  LoginScreen: { screen: LoginScreen },
  StartScreen: { screen: StartScreen },
  WelcomeScreen: { screen: WelcomeScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MenuScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
