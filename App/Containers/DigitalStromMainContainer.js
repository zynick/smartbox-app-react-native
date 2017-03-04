// @flow

import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity, Vibration } from 'react-native'
import { connect } from 'react-redux'
// import { Actions as NavigationActions } from 'react-native-router-flux'
// import DsCallSceneActions from '../Redux/DsCallSceneRedux'
import styles from './Styles/DigitalStromMainContainerStyle'


class DigitalStromMainContainer extends Component {

  pattern = [300, 50]
  isAttemptCall: boolean;

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  componentWillReceiveProps(newProps) {

    if (this.isAttemptCall && !newProps.fetching) { // TODO get fetching from mapStateToProps
      this.isAttemptCall = false
    }

  }

  onPressHome() {
    this.isAttemptCall = true
    Vibration.vibrate(this.pattern)
  }

  onPressLeave() {
    this.isAttemptCall = true
    Vibration.vibrate(this.pattern)
  }

  onPressDoorBell() {
    this.isAttemptCall = true
    Vibration.vibrate(this.pattern)
  }

  onPressPanic() {
    this.isAttemptCall = true
    Vibration.vibrate(this.pattern)
  }

  render () {
    const { name } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.button}>Power Consumption: 0 kWh</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={this.onPressHome.bind(this)}>
            <Text style={styles.button}>* Coming Home *</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onPressLeave.bind(this)}>
            <Text style={styles.button}>* Leaving Home *</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={this.onPressDoorBell.bind(this)}>
            <Text style={styles.button}>* Door Bell *</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.onPressPanic.bind(this)}>
            <Text style={styles.button}>* Panic *</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

DigitalStromMainContainer.propTypes = {
  name: PropTypes.string,
  success: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    // success: state.your-new-state.success
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // callScene: 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DigitalStromMainContainer)
