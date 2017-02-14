// @flow

import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { connect } from 'react-redux'
// import LoginActions, { isLoggedIn } from '../Redux/LoginRedux'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

// type PresentationScreenProps = {
//     loggedIn: boolean
// }

class PresentationScreen extends React.Component {

  // props: PresentationScreenProps

  // constructor(props: PresentationScreenProps) {
  //     super(props)
  // }

  // componentWillMount() {
  //     if (!this.props.loggedIn) {
  //         NavigationActions.login()
  //     }
  // }

  // componentWillReceiveProps(nextProps) {
  //     /* comment copied from UsageExamplesScreen.js */
  //     // Request push premissions only if the user has logged in.
  //     const { loggedIn } = nextProps
  //     if (loggedIn) {

  //          * If you have turned on Push in Xcode, http://i.imgur.com/qFDRhQr.png
  //          * uncomment this code below and import at top

  //         // if (__DEV__) console.log('Requesting push notification permissions.')
  //         // PushNotification.requestPermissions()
  //     } else {
  //         NavigationActions.login()
  //     }
  // }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Default screens for development, debugging, and alpha testing
              are available below.
            </Text>
          </View>

          <RoundedButton onPress={NavigationActions.componentExamples}>
            Component Examples Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.usageExamples}>
            Usage Examples Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.apiTesting}>
            API Testing Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.theme}>
            Theme Screen
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.deviceInfo}>
            Device Info Screen
          </RoundedButton>

          <View style={styles.centered}>
            <Text style={styles.subtitle}>Made with ❤️ by Infinite Red</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // loggedIn: isLoggedIn(state.login)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
