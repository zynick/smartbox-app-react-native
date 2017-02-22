// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoomComponentStyle'

type RoomComponentProps = {
  text ? : string,
  children ? : string,
  onPress: () => void,
  styles ? : Object
};

export default class RoomComponent extends React.Component {

  props: RoomComponentProps;

  getText() {
    return this.props.text || this.props.children || ''
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }

}

// // Prop type warnings
// RoomComponent.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// RoomComponent.defaultProps = {
//   someSetting: false
// }
