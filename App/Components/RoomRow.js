// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/RoomRowStyle'

type RoomRowProps = {
  text ? : string,
  children ? : string,
  onPress: () => void,
  styles ? : Object
};

export default class RoomRow extends React.Component {

  props: RoomRowProps;

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
// RoomRow.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// RoomRow.defaultProps = {
//   someSetting: false
// }
