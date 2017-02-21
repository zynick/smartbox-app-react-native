// @flow

import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './Styles/DigitalStromRowStyle'

type DigitalStromRowProps = {
  item: Object
    // text ? : string,
    // children ? : string,
    // onPress: () => void,
    // styles ? : Object
};


export default class DigitalStromRow extends React.Component {

  props: DigitalStromRowProps;

  renderLights() {
    const { zoneId, scenes, devices } = this.props.item
    const {
      scene0 = {},
      scene5 = {},
      scene17 = {},
      scene18 = {},
      scene19 = {}
    } = scenes;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>DigitalStrom Light</Text>
        <Text style={styles.description}>Zone: {zoneId}</Text>
        <Text style={styles.description}>==============</Text>
        <Text style={styles.description}>{scene5.name}</Text>
        <Text style={styles.description}>{scene17.name}</Text>
        <Text style={styles.description}>{scene18.name}</Text>
        <Text style={styles.description}>{scene19.name}</Text>
        <Text style={styles.description}>{scene0.name}</Text>
        <Text style={styles.description}>==============</Text>
        <Text style={styles.description}>Deivces: {devices.length}</Text>
      </View>
    )
  }

  renderDefault() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>DigitalStromRow Component (?)</Text>
      </View>
    )
  }

  render() {
    switch (this.props.item.groupId) {
      case 1: // light
        return this.renderLights()
      default:
        return this.renderDefault()
    }
  }
}

// // Prop type warnings
// DigitalStromRow.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DigitalStromRow.defaultProps = {
//   someSetting: false
// }
