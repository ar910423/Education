import React, { Component } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/WelcomeScreenStyle'
import RoundedButton from '../Components/RoundedButton'
import { Colors, Images } from '../Themes'

class WelcomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[Colors.primaryStart, Colors.primary]} style={styles.background} />
        <ScrollView style={styles.container}>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>WELCOME!</Text>
            <Text style={[styles.description]}>You can study various</Text>
            <Text style={[styles.description]}>sciences right at home</Text>
            <View style={styles.logoContainer}>
              <Image source={Images.logo} resizeMode="cover" style={styles.logo} />
            </View>
            <RoundedButton buttonStyle={styles.button} text="LET'S GO!" textStyle={styles.buttonText} onPress={() => this.props.goStartScreen()} />
          </View>
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
    goStartScreen: () => dispatch(StackActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'StartScreen'})]}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
