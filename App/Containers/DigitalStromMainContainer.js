// @flow

import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/DigitalStromMainContainerStyle'


class DigitalStromMainContainer extends React.Component {

  pattern = [300, 50]
  isAttemptCall: boolean;

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>DigitalStromMainContainer Container</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DigitalStromMainContainer)
