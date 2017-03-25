// @flow

import React, { Component, PropTypes } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import { connect } from 'react-redux'
// import { Actions as NavigationActions } from 'react-native-router-flux'

import LoginActions from '../Redux/LoginRedux'
import DrawerButton from '../Components/DrawerButton'
import { Images } from '../Themes'

import styles from './Styles/DrawerContentStyle'


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

  toggleDrawer() {
    this.context.drawer.toggle()
  }

  // handlePressPresentations() {
  //   this.toggleDrawer()
  //   NavigationActions.presentationScreen()
  // }

  handleLogout = () => {
    this.toggleDrawer()
    this.props.logout()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        {/*<DrawerButton text='PresentationScreen' onPress={this.handlePressPresentations} />*/}
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
