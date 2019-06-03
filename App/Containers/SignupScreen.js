import React, { Component } from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/SignupScreenStyle'
import { Colors } from '../Themes'
import RoundedButton from '../Components/RoundedButton';

class SignupScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {remember: true}
  }

  goSkillScreen() {
    this.props.navigation.navigate("SkillScreen");
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Colors.primaryStart, Colors.primary]} style={styles.headerContainerBackground} />
          <Text style={styles.headerText}>Registration</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.controlsContainer}>
            <TextInput placeholder="Name" style={[styles.input, styles.name]}></TextInput>
            <TextInput placeholder="E-mail" style={[styles.input, styles.email]}></TextInput>
            <TextInput placeholder="Password" style={[styles.input, styles.password]}></TextInput>
            <View style={styles.forgotRow}>
              <CheckBox 
                containerStyle={styles.checkboxContainer} 
                wrapperStyle={styles.checkboxWrapper} 
                checkedColor="#FF647E"
                textStyle={styles.checkboxText}
                title='Remember' 
                checked={this.state.remember} 
                onPress={() => this.setState({remember: !this.state.remember})} 
              />
              <TouchableOpacity>
                <Text style={styles.textButtonText}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
            <RoundedButton onPress={() => this.goSkillScreen()} text="Sign Up" buttonStyle={styles.signupButton} textStyle={styles.signupButtonText} />
          </View>
          <View style={styles.rememberContainer}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['white', '#f3f3f3']} style={styles.separator} />
            <Text style={styles.label}>Don't remember the password?</Text>
            <TouchableOpacity style={styles.newPasswordButton}>
              <Text style={styles.textButtonText}>New Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goSkillScreen: () => dispatch(StackActions.reset({index: 0, actions: [NavigationActions.navigate({routeName: 'SkillScreen'})]}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
