// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoomButtonStyle'

type RoomButtonProps = {
  text ? : string,
  children ? : string,
  onPress: () => void,
  styles ? : Object
};

export default class RoomButton extends React.Component {

  props: RoomButtonProps;

  getText() {
    return this.props.text || this.props.children || ''
  }

  render() {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }

}

// // Prop type warnings
// RoomButton.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// RoomButton.defaultProps = {
//   someSetting: false
// }
