import React, { Component } from 'react'
import { ScrollView, Text, Image } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/MDiscussScreenStyle'
import { Images, Colors } from '../Themes'

class MDiscussScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Discuss',
    drawerIcon: ({ tintColor }) => {
      return (
        <Image
          source={Images.discuss}
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
        <Text>MDiscussScreen Container</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(MDiscussScreen)
