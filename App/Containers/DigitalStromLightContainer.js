// @flow

import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import uuidV4 from 'uuid/v4'

// import { getToken } from '../Redux/LoginRedux'
import DsCallSceneActions from '../Redux/DsCallSceneRedux'
// import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/DigitalStromLightContainerStyle'


class DigitalStromLightContainer extends Component {

  constructor(props) {
    super(props)

    this.props.id = uuidV4()

    console.tron.log(`DigitalStromLightContainer.constructor() ${JSON.stringify(props,null,2)}`)
  }

  componentWillReceiveProps(newProps) {
    console.tron.log(`DigitalStromLightContainer.componentWillReceiveProps() ${JSON.stringify(newProps,null,2)}`)
  }

  onPressPreset1() {
    const { zoneId, groupId } = this.props.item
    this.props.callScene(zoneId, groupId, 5)
  }

  onPressPreset2() {
    const { zoneId, groupId } = this.props.item
    this.props.callScene(zoneId, groupId, 17)
  }

  onPressPreset3() {
    const { zoneId, groupId } = this.props.item
    this.props.callScene(zoneId, groupId, 18)
  }

  onPressPreset4() {
    const { zoneId, groupId } = this.props.item
    this.props.callScene(zoneId, groupId, 19)
  }

  onPressOff() {
    const { zoneId, groupId } = this.props.item
    this.props.callScene(zoneId, groupId, 0)
  }

  render() {
    const { scenes } = this.props.item
    const {
      scene0 = { name: 'Off' },
      scene5 = { name: 'Preset 1' },
      scene17 = { name: 'Preset 2' },
      scene18 = { name: 'Preset 3' },
      scene19 = { name: 'Preset 4' }
    } = scenes

    return (
      <View style={styles.container}>
        <Text style={styles.text}>DigitalStrom Light Container</Text>
        <TouchableOpacity onPress={this.onPressPreset1.bind(this)}>
          <Text style={styles.text}>* {scene5.name} *</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressPreset2.bind(this)}>
          <Text style={styles.text}>* {scene17.name} *</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressPreset3.bind(this)}>
          <Text style={styles.text}>* {scene18.name} *</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressPreset4.bind(this)}>
          <Text style={styles.text}>* {scene19.name} *</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressOff.bind(this)}>
          <Text style={styles.text}>* {scene0.name} *</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

DigitalStromLightContainer.propTypes = {
  id: PropTypes.string,
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
    callScene: (zoneId, groupId, sceneNumber) =>
      dispatch(DsCallSceneActions.DsCallSceneRequest(zoneId, groupId, sceneNumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DigitalStromLightContainer)
