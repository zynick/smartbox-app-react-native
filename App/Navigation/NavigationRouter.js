// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'

// screens identified by the router
import LoginScreen from '../Containers/LoginScreen'
import MainScreen from '../Containers/MainScreen'
import RoomScreen from '../Containers/RoomScreen'

import TabScreen from '../Containers/TabScreen'

import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import ListviewSearchingExample from '../Containers/ListviewSearchingExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'

/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/

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




            <Scene key='presentationScreen'
              title='Presentation'
              component={PresentationScreen} />

            <Scene key='componentExamples'
              title='Components'
              component={AllComponentsScreen} />

            <Scene key='usageExamples'
              title='Usage'
              component={UsageExamplesScreen}
              rightTitle='Example'
              onRight={() => window.alert('Example Pressed')} />

            <Scene key='listviewExample'
              title='Listview Example'
              component={ListviewExample} />

            <Scene key='listviewGridExample'
              title='Listview Grid'
              component={ListviewGridExample} />

            <Scene key='listviewSectionsExample'
              title='Listview Sections'
              component={ListviewSectionsExample} />

            <Scene key='listviewSearchingExample'
              title='Listview Searching'
              component={ListviewSearchingExample}
              navBar={CustomNavBar} />

            <Scene key='mapviewExample'
              title='Mapview Example'
              component={MapviewExample} />

            <Scene key='apiTesting'
              title='API Testing'
              component={APITestingScreen} />

            <Scene key='theme'
              title='Theme'
              component={ThemeScreen} />

            {/* Custom navigation bar example */}
            <Scene key='deviceInfo'
              title='Device Info'
              component={DeviceInfoScreen} />

          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
