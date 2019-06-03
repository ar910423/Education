import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './Styles/BigHeaderStyle'
import { Colors } from '../Themes'

export default class BigHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    onClickBack: PropTypes.func,
  }

  render () {
    return (
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[Colors.primaryStart, Colors.primary]} style={styles.containerBackground} />
        <TouchableOpacity style={styles.iconContainer} onPress={this.props.onClickBack}>
          <Icon name='chevron-left' size={36} color={'white'} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.subTitle}>{this.props.subTitle}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon size={36} color={'white'} />
        </TouchableOpacity>
      </View>
    )
  }
}
