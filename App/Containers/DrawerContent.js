// @flow

import React, { Component, PropTypes } from 'react'
import { ScrollView, Image, BackAndroid, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/DrawerContentStyle'
import LoginActions, { isLoggedIn } from '../Redux/LoginRedux'
import StructureActions, { getStructure, getStructureKeys } from '../Redux/StructureRedux'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

type DrawerContentProps = {
  loggedIn: boolean,
  structure: any,
  structureKeys: string[],
};

class DrawerContent extends Component {

  props: DrawerContentProps;

  // constructor (props: DrawerContentProps) {
  //   super(props)
  // }

  // componentWillMount() {
  //     console.tron.log(`DrawerContent.componentWillMount() - loggedIn: ${this.props.loggedIn}`)
  //     if (!this.props.loggedIn) {
  //         NavigationActions.login()
  //     }
  // }

  componentWillReceiveProps (nextProps) {
    console.tron.log(`DrawerContent.componentWillMount() - nextProps: ${JSON.stringify(nextProps, null, 2)}`)

    /* comment copied from UsageExamplesScreen.js */
    // Request push premissions only if the user has logged in.
    const { loggedIn } = nextProps
    if (loggedIn) {
      /*
       * If you have turned on Push in Xcode, http://i.imgur.com/qFDRhQr.png
       * uncomment this code below and import at top
       */
      // if (__DEV__) console.log('Requesting push notification permissions.')
      // PushNotification.requestPermissions()

      if (!this.props.structure) {
        return this.props.getStructure()
      }

      console.tron.log(`DrawerContent.componentWillMount() HAS STRUCTURE!!!!! ${JSON.stringify(this.props.structure, null, 2)}`)

      // this.forceUpdate() // TODO do i need this?
    } else {
      NavigationActions.login()
    }
  }

  componentDidMount () {
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

  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????
  // TODO how to do the dynamic drawerbutton????

  renderKey = (key: string) => {
    console.tron.log(`DrawerContent.renderKey() key: ${key}`)
    return (<Text key={key}>{key}</Text>)
  }

  renderStructures = () => {
    console.tron.log(`DrawerContent.renderStructures() structureKeys: ${JSON.stringify(this.props.structureKeys, null, 2)}`)
    return this.props.structureKeys.map(key => this.renderKey(key))
  }

  render () {
    console.tron.log(`DrawerContent.render() ${JSON.stringify(this.props.structure, null, 2)}`)
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='Component Examples' onPress={this.handlePressComponents} />
        <DrawerButton text='Usage Examples' onPress={this.handlePressUsage} />
        <DrawerButton text='API Testing' onPress={this.handlePressAPI} />
        <DrawerButton text='Themes' onPress={this.handlePressTheme} />
        <DrawerButton text='Device Info' onPress={this.handlePressDevice} />
        <DrawerButton text='Logout' onPress={this.handleLogout} />
        {this.renderStructures()}
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

DrawerContent.propTypes = {
  logout: PropTypes.func
}

const mapStateToProps = (state) => {
  console.tron.log(`DrawerContent.mapStateToProps() state.login: ${JSON.stringify(state.login, null, 2)}, state.structure: ${JSON.stringify(state.structure, null, 2)}`)
  return {
    loggedIn: isLoggedIn(state.login),
    structure: getStructure(state.structure),
    structureKeys: getStructureKeys(state.structure)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStructure: () => dispatch(StructureActions.structureRequest()),
    logout: () => dispatch(LoginActions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
