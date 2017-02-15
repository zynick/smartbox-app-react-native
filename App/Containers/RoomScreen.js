// @flow

import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// import { Metrics } from '../Themes'

// external libs
// import Icon from 'react-native-vector-icons/FontAwesome'
// import Animatable from 'react-native-animatable'
// import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/RoomScreenStyle'

// I18n
// import I18n from 'react-native-i18n'

class RoomScreen extends Component {

  constructor(props) {
    super(props)
    console.tron.log(`RoomScreen ${JSON.stringify(props,null,2)}`)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>RoomScreen Container</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen)
