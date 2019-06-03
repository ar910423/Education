import React, { Component } from 'react'
import { ScrollView, Text, Image } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/MOlympiadScreenStyle'
import { Images, Colors } from '../Themes'

class MOlympiadScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Olympiad',
    drawerIcon: ({ tintColor }) => {
      return (
        <Image
          source={Images.olympiad}
          style={{width: 36, height: 36, marginRight: 0}}
        />
      )
    },
  };
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>MOlympiadScreen Container</Text>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MOlympiadScreen)
