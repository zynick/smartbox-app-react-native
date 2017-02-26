// @flow

import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'

// import { getToken } from '../Redux/LoginRedux'
import DigitalStromActions from '../Redux/DigitalStromRedux'
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

  onPress() {
    console.tron.log(`DigitalStromLightContainer.onPress() ${JSON.stringify(this.props.item,null,2)}`)
    const { zoneId, groupId } = this.props.item
    const action = { zoneId, groupId, sceneNumber: 18 }
    this.props.callScene(action)
  }

  render() {
    // console.tron.log('DigitalStromLightContainer.render(): onPress:' + this.onPress);

    const { item } = this.props
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
        <Text style={styles.description}>Zone: {zoneId}</Text>
        <Text style={styles.description}>==============</Text>
        <Text style={styles.description}>{scene5.name}</Text>
        <Text style={styles.description}>{scene17.name}</Text>
        <Text style={styles.description}>{scene18.name}</Text>
        <Text style={styles.description}>{scene19.name}</Text>
        <Text style={styles.description}>{scene0.name}</Text>
        <Text style={styles.description}>==============</Text>
        <Text style={styles.description}>Total Deivce: {devices.length}</Text>
        <Text style={styles.description}>==============</Text>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Text style={styles.text}>* TEST *</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

DigitalStromLightContainer.propTypes = {
  item: PropTypes.object,
  callScene: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    // token: getToken(state.login)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    callScene: (action) => dispatch(DigitalStromActions.digitalStromRequest(action))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DigitalStromLightContainer)
