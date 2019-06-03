import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { DrawerItems } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Styles/MenuStyle'
import { Images } from '../Themes'

export default class Menu extends Component {
  static propTypes = {
    props: PropTypes.object,
  }

  render () {
    console.log(this.props.props);

    return (
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#64d4f1', '#36c7ec']} style={styles.headerBackground} />
        <View style={styles.headerContainer}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#58b9da', '#32afd6']} style={styles.headerBackground} />
          <TouchableOpacity style={styles.clearButton} onPress={() => this.props.props.navigation.closeDrawer()}>
            <Icon name='close' size={40} color={'white'} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.profileContainer}>
            <Image source={Images.profile} resizeMode='cover' style={styles.profileImage} />
            <View style={styles.infoCol}>
              <Text style={styles.text1}>Milly Groam</Text>
              <Text style={styles.text2}>Student</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.bodyContainer}>
          <DrawerItems 
            {...this.props.props}
            labelStyle={{fontSize: 20, color: 'white'}}
            iconContainerStyle={{width: 36, height: 36, marginRight: 0}}
          />
        </ScrollView>
      </View>
    )
  }
}
