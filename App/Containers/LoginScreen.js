// @flow

/**
 * 2016-02-21 was trying to tune the login sreen but it was so hassle
 * couldn't able to make the scrollbar scorll most probably due to conflicting
 * attribute when using scrollview + flex + keyboard switching all together..
 * spent too much time on this, moving on, come back to this later.
 * does not support potrait mode, but who cares
 */

import React, { Component, PropTypes } from 'react'
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import { Images, Metrics } from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'


class LoginScreen extends Component {

  state: {
    email: string,
    password: string,
    error: string,
    scrollViewHeight: number
  }

  isAttemptLogin: boolean

  constructor(props) {
    super(props)
    this.state = {
      error: ' ',
      scrollViewHeight: Metrics.screenHeight
    }
    this.isAttemptLogin = false
  }

  componentWillReceiveProps = newProps => {
    const { fetching, error } = newProps
    this.forceUpdate()

    if (this.isAttemptLogin && !fetching) {
      this.isAttemptLogin = false
      if (error) {
        return this.setState({ error, password: '' })
      }
      NavigationActions.tabScreen({ type: 'replace' })
    }
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

  render = () => {
    const { email, password, error } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const inputTextStyle = editable ? Styles.inputEdit : Styles.inputRead

    return (
      <KeyboardAvoidingView behavior='padding'>
        <ScrollView style={[Styles.container, { height: this.state.scrollViewHeight }]}
          contentContainerStyle={[Styles.flexContainer]}
          keyboardShouldPersistTaps>

          <View>
            <View style={Styles.flexBox}>

              <Image source={Images.logo} style={Styles.logo} />

              <View style={Styles.row}>
                <Text style={Styles.error}>{error}</Text>
              </View>

              <View style={Styles.row}>
                <Text style={Styles.label}>Email</Text>
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
                <Text style={Styles.label}>Password</Text>
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
                    <Text style={Styles.buttonText}>Sign In</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

LoginScreen.propTypes = {
  attemptLogin: PropTypes.func,
  isAttemptLogin: PropTypes.bool,
  fetching: PropTypes.bool
}

const mapStateToProps = state => {
  const { error, fetching } = state.login
  return { error, fetching }
}

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (email, password) => dispatch(LoginActions.loginRequest(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
