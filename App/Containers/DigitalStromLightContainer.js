// @flow

import React, { Component, PropTypes} from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { getToken } from '../Redux/LoginRedux'
// import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/DigitalStromLightContainerStyle'

class DigitalStromLightContainer extends Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  constructor(props) {
    super(props)
  }

  render() {
    const { item, token } = this.props
    const { zoneId, scenes, devices } = item
    const {
      scene0 = { name: '[Preset Off]' },
      scene5 = { name: '[Preset 1]' },
      scene17 = { name: '[Preset 2]' },
      scene18 = { name: '[Preset 3]' },
      scene19 = { name: '[Preset 4]' }
    } = scenes

    return (
      <View style={styles.container}>
        <Text style={styles.text}>DigitalStrom Light Container</Text>
        <Text style={styles.description}>Token: {token}</Text>
        <Text style={styles.description}>==============</Text>
        <Text style={styles.description}>Zone: {zoneId}</Text>
        <Text style={styles.description}>==============</Text>
        <Text style={styles.description}>{scene5.name}</Text>
        <Text style={styles.description}>{scene17.name}</Text>
        <Text style={styles.description}>{scene18.name}</Text>
        <Text style={styles.description}>{scene19.name}</Text>
        <Text style={styles.description}>{scene0.name}</Text>
        <Text style={styles.description}>==============</Text>
        <Text style={styles.description}>Total Deivce: {devices.length}</Text>
      </View>
    )
  }
}

DigitalStromLightContainer.propTypes = {
  token: PropTypes.string,
  item: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    token: getToken(state.login)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DigitalStromLightContainer)
