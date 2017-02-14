// @flow

import React, { PropTypes } from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import TemperatureActions from '../Redux/TemperatureRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Colors, Images, Metrics } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable'
// Enable when you have configured Xcode
// import PushNotification from 'react-native-push-notification'
import I18n from 'react-native-i18n'

// Styles
import styles from './Styles/UsageExamplesScreenStyle'

class UsageExamplesScreen extends React.Component {

  // fires when we tap the rocket!
  handlePressRocket = () => {
    this.props.requestTemperature('Boise')
  }

  // fires when tap send
  handlePressSend = () => {
    this.props.requestTemperature('Toronto')
  }

  // fires when tap star
  handlePressStar = () => {
    this.props.requestTemperature('New Orleans')
  }

  renderHeader (title) {
    return (
      <View style={styles.componentLabelContainer}>
        <Text style={styles.componentLabel}>{title}</Text>
      </View>
    )
  }

  renderUsageExamples () {
    const { temperature, city } = this.props
    return (
      <View>
        {this.renderHeader('I18n Locale')}
        <View style={styles.groupContainer}>
          <Text style={styles.locale}>{I18n.locale}</Text>
        </View>
        {this.renderHeader(I18n.t('api') + `: ${city}`)}
        <View style={[styles.groupContainer, {height: 50}]}>
          <Text style={styles.temperature}>{temperature && `${temperature} ${I18n.t('tempIndicator')}`}</Text>
        </View>
        {this.renderHeader(I18n.t('rnVectorIcons'))}
        <View style={styles.groupContainer}>
          <TouchableOpacity onPress={this.handlePressRocket}>
            <Icon name='rocket' size={Metrics.icons.medium} color={Colors.ember} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePressSend}>
            <Icon name='send' size={Metrics.icons.medium} color={Colors.error} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePressStar}>
            <Icon name='star' size={Metrics.icons.medium} color={Colors.snow} />
          </TouchableOpacity>
          <Icon name='trophy' size={Metrics.icons.medium} color={Colors.error} />
          <Icon name='warning' size={Metrics.icons.medium} color={Colors.ember} />
        </View>
        <View style={styles.groupContainer}>
          <Icon.Button name='facebook' style={styles.facebookButton} backgroundColor={Colors.facebook} onPress={() => window.alert('Facebook')}>
            {I18n.t('loginWithFacebook')}
          </Icon.Button>
        </View>
        {this.renderHeader(I18n.t('rnAnimatable'))}
        <View style={styles.groupContainer}>
          <Animatable.Text animation='fadeIn' iterationCount='infinite' direction='alternate' style={styles.subtitle}>{I18n.t('rnAnimatable')}</Animatable.Text>
          <Animatable.Image animation='pulse' iterationCount='infinite' source={Images.logo} />
          <Animatable.View animation='jello' iterationCount='infinite' >
            <Icon name='cab' size={Metrics.icons.medium} color={Colors.snow} />
          </Animatable.View>
        </View>
        {this.renderHeader(I18n.t('igniteGenerated'))}
        <RoundedButton text='Listview' onPress={NavigationActions.listviewExample} />
        <RoundedButton text='Listview Grid' onPress={NavigationActions.listviewGridExample} />
        <RoundedButton text='Listview Sections' onPress={NavigationActions.listviewSectionsExample} />
        <RoundedButton text='Listview Searching' onPress={NavigationActions.listviewSearchingExample} />
        <RoundedButton text='Mapview' onPress={NavigationActions.mapviewExample} />
      </View>
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText} >
              The Usage Examples screen is a playground for 3rd party libs and logic proofs.
              Items on this screen can be composed of multiple components working in concert.  Functionality demos of libs and practices
            </Text>
          </View>
          {this.renderUsageExamples()}
        </ScrollView>
      </View>
    )
  }
}

UsageExamplesScreen.propTypes = {
  temperature: PropTypes.number,
  city: PropTypes.string,
  requestTemperature: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    temperature: state.temperature.temperature,
    city: state.temperature.city
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestTemperature: (city) => dispatch(TemperatureActions.temperatureRequest(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsageExamplesScreen)
