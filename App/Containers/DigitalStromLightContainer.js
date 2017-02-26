// @flow

import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity, Vibration } from 'react-native'
import { connect } from 'react-redux'
import DsCallSceneActions from '../Redux/DsCallSceneRedux'
import styles from './Styles/DigitalStromLightContainerStyle'

const pattern = [300, 50]


class DigitalStromLightContainer extends Component {

  constructor(props) {
    super(props)
    // console.tron.log(`DigitalStromLightContainer.constructor() ${JSON.stringify(props,null,2)}`)
  }

  isAttemptCall: boolean;

  componentWillReceiveProps(newProps) {
    // console.tron.log(`DigitalStromLightContainer.componentWillReceiveProps() newProps: ${JSON.stringify(newProps,null,2)}`)
    if (this.isAttemptCall && !newProps.fetching) {
      this.isAttemptCall = false
      if (newProps.success) {
        // do something here to indicate success if needed
      }
    }

    console.tron.log(`DigitalStromLightContainer.componentWillReceiveProps() ${JSON.stringify(newProps,null,2)}`)
  }

  onPressPreset1() {
    const { zoneId, groupId } = this.props.item
    this.isAttemptCall = true
    this.props.callScene(zoneId, groupId, 5)
    Vibration.vibrate(pattern)
  }

  onPressPreset2() {
    const { zoneId, groupId } = this.props.item
    this.isAttemptCall = true
    this.props.callScene(zoneId, groupId, 17)
    Vibration.vibrate(pattern)
  }

  onPressPreset3() {
    const { zoneId, groupId } = this.props.item
    this.isAttemptCall = true
    this.props.callScene(zoneId, groupId, 18)
    Vibration.vibrate(pattern)
  }

  onPressPreset4() {
    const { zoneId, groupId } = this.props.item
    this.isAttemptCall = true
    this.props.callScene(zoneId, groupId, 19)
    Vibration.vibrate(pattern)
  }

  onPressOff() {
    const { zoneId, groupId } = this.props.item
    this.isAttemptCall = true
    this.props.callScene(zoneId, groupId, 0)
    Vibration.vibrate(pattern)
  }

  render() {
    const { scenes, devices } = this.props.item
    const {
      scene0 = { name: 'Off' },
      scene5 = { name: 'Preset 1' },
      scene17 = { name: 'Preset 2' },
      scene18 = { name: 'Preset 3' },
      scene19 = { name: 'Preset 4' }
    } = scenes

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Lights</Text>
          <Text style={styles.button}>Device: {devices.length}</Text>
        </View>

        <TouchableOpacity onPress={this.onPressPreset1.bind(this)}>
          <Text style={styles.button}>* {scene5.name} *</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPressPreset2.bind(this)}>
          <Text style={styles.button}>* {scene17.name} *</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPressPreset3.bind(this)}>
          <Text style={styles.button}>* {scene18.name} *</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPressPreset4.bind(this)}>
          <Text style={styles.button}>* {scene19.name} *</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPressOff.bind(this)}>
          <Text style={styles.button}>* {scene0.name} *</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

DigitalStromLightContainer.propTypes = {
  item: PropTypes.object,
  callScene: PropTypes.func,
  success: PropTypes.bool
}

const mapStateToProps = (state) => {
  // console.tron.log(`DigitalStromLightContainer.mapStateToProps() ${JSON.stringify(state,null,2)}`)
  console.tron.log(`DigitalStromLightContainer.mapStateToProps() ${JSON.stringify(state.dsCallScene.payload,null,2)}`)
  return {
    success: state.dsCallScene.success
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    callScene: (zoneId, groupId, sceneNumber) =>
      dispatch(DsCallSceneActions.dsCallSceneRequest(zoneId, groupId, sceneNumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DigitalStromLightContainer)
