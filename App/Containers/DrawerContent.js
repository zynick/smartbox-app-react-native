// @flow

import React, { Component, PropTypes } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/DrawerContentStyle'
import LoginActions from '../Redux/LoginRedux'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer = () => {
    this.context.drawer.toggle()
  }

  handlePressPresentations = () => {
    this.toggleDrawer()
    NavigationActions.presentationScreen()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressUsage = () => {
    this.toggleDrawer()
    NavigationActions.usageExamples()
  }

  handlePressAPI = () => {
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
    NavigationActions.theme()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.deviceInfo()
  }

  handleLogout = () => {
    this.toggleDrawer()
    this.props.logout()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='PresentationScreen' onPress={this.handlePressPresentations} />
        <DrawerButton text='Component Examples' onPress={this.handlePressComponents} />
        <DrawerButton text='Usage Examples' onPress={this.handlePressUsage} />
        <DrawerButton text='API Testing' onPress={this.handlePressAPI} />
        <DrawerButton text='Themes' onPress={this.handlePressTheme} />
        <DrawerButton text='Device Info' onPress={this.handlePressDevice} />
        <DrawerButton text='Logout' onPress={this.handleLogout} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: PropTypes.object
}

DrawerContent.propTypes = {
  logout: PropTypes.func
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(LoginActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
