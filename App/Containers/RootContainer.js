// @flow

import React, { Component, PropTypes } from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import NavigationRouter from '../Navigation/NavigationRouter'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

import styles from './Styles/RootContainerStyle'


class RootContainer extends Component {

  componentDidMount = () => {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render = () => {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <NavigationRouter />
      </View>
    )
  }
}

RootContainer.propTypes = {
  startup: PropTypes.func
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
