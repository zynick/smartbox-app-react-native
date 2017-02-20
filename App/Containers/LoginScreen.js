// @flow

// https://facebook.github.io/react/docs/react-component.html

import React from 'react'
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation,
  Dimensions,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import { Images, Metrics } from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import I18n from 'react-native-i18n'

type LoginScreenProps = {
  dispatch: () => any,
  error: string,
  fetching: boolean,
  attemptLogin: () => void
};

class LoginScreen extends React.Component {

  props: LoginScreenProps;

  state: {
    email: string,
    password: string,
    error: string,
    scrollViewHeight: number,
    scrollableHeight: number
  }

  isAttemptLogin: boolean
  keyboardDidShowListener: Object
  keyboardDidHideListener: Object;

  constructor(props: LoginScreenProps) {
    super(props)
    this.state = {
      error: ' ',
      scrollViewHeight: Metrics.screenHeight,
      scrollableHeight: Metrics.screenHeight
    }
    this.isAttemptLogin = false
  }

  componentWillMount() {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillReceiveProps(newProps) {
    console.tron.log(`LoginScreen.componentWillReceiveProps() ${JSON.stringify(newProps,null,2)}`)
    const { fetching, error } = newProps
    this.forceUpdate()

    // Did the login attempt complete?
    if (this.isAttemptLogin && !fetching) {
      this.isAttemptLogin = false
      if (error) {
        return this.setState({ error, password: '' })
      }
      NavigationActions.mainScreen({ type: 'replace' })
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    console.tron.log(` ####### keyboardShow scrollViewHeight:${newSize}`)
    this.setState({ scrollViewHeight: newSize })
  }

  keyboardDidHide = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    console.tron.log(` ####### keyboardHide scrollViewHeight:${Metrics.screenHeight}`)
    this.setState({ scrollViewHeight: Metrics.screenHeight })
  }

  handlePressLogin = () => {
    const { email, password } = this.state
    this.setState({ error: ' ' })
    this.isAttemptLogin = true
    this.props.attemptLogin(email, password)
  }

  handleChangeEmail = text => {
    this.setState({ email: text })
  }

  handleChangePassword = text => {
    this.setState({ password: text })
  }

  setScrollViewHeight(event) {
    // const keyboardHeight = event.nativeEvent.layout.height
    // const scrollViewHeight = this.state.scrollViewHeight
    // const windowHeight = Dimensions.get('window').height // - StatusBar.currentHeight - scrollViewHeight
    // console.tron.log(`^^^^^^^^^^^^^^ keyboard:${keyboardHeight}, scrollable:${scrollViewHeight} => window:${windowHeight}`)
    // this.setState({ scrollViewHeight:  })

    // TODO set dynamic height for scrollViewHeight and scrollableHeight
    // TODO set dynamic height for scrollViewHeight and scrollableHeight
    // TODO set dynamic height for scrollViewHeight and scrollableHeight
    // TODO set dynamic height for scrollViewHeight and scrollableHeight
    // TODO set dynamic height for scrollViewHeight and scrollableHeight
    // TODO set dynamic height for scrollViewHeight and scrollableHeight
    // TODO set dynamic height for scrollViewHeight and scrollableHeight
    // TODO set dynamic height for scrollViewHeight and scrollableHeight
    // TODO test this shit in iOS??
    // TODO test this shit in iOS??
    // TODO test this shit in iOS??
    // TODO test this shit in iOS??
    // TODO test this shit in iOS??
    // TODO test this shit in iOS??
    // TODO test this shit in iOS??
    // TODO test this shit in iOS??
    // TODO test this shit in iOS??
    // TODO test this shit in iOS??
  }

  setScrollableHeight(event) {
    const flexboxHeight = event.nativeEvent.layout.height;
    const windowHeight = Dimensions.get('window').height // - StatusBar.currentHeight;
    const scrollableHeight = flexboxHeight > windowHeight ? flexboxHeight : windowHeight;
    console.tron.log(`$$$$$$$$$$$$$$$$$$  flex:${flexboxHeight}, window:${windowHeight} => scrollable:${scrollableHeight}`)
    // this.setState({ scrollableHeight })
  }

  render() {
    const { email, password, error } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const inputTextStyle = editable ? Styles.inputEdit : Styles.inputRead

    return (
      <KeyboardAvoidingView behavior='position' onLayout={event => this.setScrollViewHeight(event)}>
        <ScrollView style={[Styles.container, { height: this.state.scrollViewHeight }]}
          contentContainerStyle={[Styles.flexContainer]}
          // contentContainerStyle={[Styles.flexContainer, { height: this.state.scrollableHeight }]}
          keyboardShouldPersistTaps>


          {/*
          <View style={[Styles.flexContainer]}>
          */}
          {/* <View style={[Styles.flexContainer, { height: this.state.scrollableHeight }]}> */}

            <View style={Styles.flexBox} onLayout={event => this.setScrollableHeight(event)}>
                <Image source={Images.logo} style={Styles.logo} />

              <View style={Styles.row}>
                <Text style={Styles.error}>{error}</Text>
              </View>

              <View style={Styles.row}>
                <Text style={Styles.label}>{I18n.t('email')}</Text>
                <TextInput
                  ref='email'
                  style={[Styles.input, inputTextStyle]}
                  value={email}
                  editable={editable}
                  keyboardType='default'
                  returnKeyType='next'
                  autoCapitalize='none'
                  autoCorrect={false}
                  onChangeText={this.handleChangeEmail}
                  underlineColorAndroid='transparent'
                  onSubmitEditing={() => this.refs.password.focus()}
                  />
              </View>

              <View style={Styles.row}>
                <Text style={Styles.label}>{I18n.t('password')}</Text>
                <TextInput
                  ref='password'
                  style={[Styles.input, inputTextStyle]}
                  value={password}
                  editable={editable}
                  keyboardType='default'
                  returnKeyType='go'
                  autoCapitalize='none'
                  autoCorrect={false}
                  secureTextEntry
                  onChangeText={this.handleChangePassword}
                  underlineColorAndroid='transparent'
                  onSubmitEditing={this.handlePressLogin}
                  />
              </View>

              <View style={Styles.row}>
                <TouchableOpacity onPress={this.handlePressLogin}>
                  <View style={Styles.button}>
                    <Text style={Styles.buttonText}>{I18n.t('signIn')}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

          {/*
          </View>
          */}

        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

}

// https://github.com/reactjs/react-redux/blob/master/docs/api.md
const mapStateToProps = state => {
  console.tron.log(`LoginScreen.mapStateToProps() ${JSON.stringify(state.login,null,2)}`)
  const { error, fetching } = state.login
  return { error, fetching }
}

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (email, password) => dispatch(LoginActions.loginRequest(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
