// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

import LoginScreen from '../Containers/LoginScreen'
import MainScreen from '../Containers/MainScreen'
import RoomScreen from '../Containers/RoomScreen'
import TabScreen from '../Containers/TabScreen'

import Styles from './Styles/NavigationContainerStyle'


class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>

          <Scene key='drawerChildrenWrapper'
            navigationBarStyle={Styles.navBar}
            titleStyle={Styles.title}
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton}
            >

            <Scene key='tabScreen'
              title='SMARTBOX'
              component={TabScreen}
              renderLeftButton={NavItems.hamburgerButton} />

            <Scene key='mainScreen'
              title='SMARTBOX'
              component={MainScreen}
              // initial
              renderLeftButton={NavItems.hamburgerButton} />

            <Scene key='loginScreen'
              title='Login'
              component={LoginScreen}
              hideNavBar
              type='replace'
              duration={1} />

            <Scene key='roomScreen'
              title='Room'
              component={RoomScreen} />

          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
