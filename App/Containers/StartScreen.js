import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/StartScreenStyle'
import { Colors, Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'

class StartScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Colors.primaryStart, Colors.primary]} style={styles.logoContainerBackground} />
          <Image source={Images.logo} resizeMode="cover" style={styles.logo} />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.buttonsContainer}>
            <RoundedButton text="Sign Up" buttonStyle={styles.signupButton} textStyle={styles.signupButtonText} onPress={() => this.props.goSignupScreen()} />
            <RoundedButton text="Log in" buttonStyle={styles.loginButton} textStyle={styles.loginButtonText} onPress={() => this.props.goLoginScreen()} />
          </View>
          <View style={styles.textButtonsContainer}>
            <Text style={styles.label}>Log in with</Text>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['white', '#f3f3f3']} style={styles.separator} />
            <View style={styles.iconButtonsContainer}>
              <TouchableOpacity style={styles.iconButton}></TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}></TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}></TouchableOpacity>
            </View>
          </View>
        </View>
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
    goSignupScreen: () => dispatch(StackActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'SignupScreen'})]})),
    goLoginScreen: () => dispatch(StackActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'SignupScreen'})]}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen)
