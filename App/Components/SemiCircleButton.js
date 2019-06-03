import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/SemiCircleButtonStyle'

export default class SemiCircleButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    buttonStyle: PropTypes.object,
    textStyle: PropTypes.object,
  }

  render () {
    return (
      <TouchableOpacity 
        onPress={this.props.onPress} 
        style={[styles.container, {borderColor: this.props.color}, this.props.selected ? {backgroundColor: this.props.color} : null, this.props.buttonStyle]}
      >
        <Text style={[styles.textStyle, this.props.textStyle]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
