// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/DigitalStromLightStyle'

type DigitalStromLightProps = {
  item: Object,
  token: String,
};

export default class DigitalStromLight extends React.Component {

  props: DigitalStromLightProps;

  render() {
    const { item, token } = this.props
    const { zoneId, scenes, devices } = item
    const {
      scene0 = { name: '[Preset Off]' },
      scene5 = { name: '[Preset 1]' },
      scene17 = { name: '[Preset 2]' },
      scene18 = { name: '[Preset 3]' },
      scene19 = { name: '[Preset 4]' }
    } = scenes;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>DigitalStrom Light</Text>
        <Text style={styles.description}>Token: {token}</Text>
        <Text style={styles.description}>==============</Text>
        <Text style={styles.description}>Zone: {zoneId}</Text>
        <Text style={styles.description}>==============</Text>
        <Text style={styles.description}>{scene5.name}</Text>
        <Text style={styles.description}>{scene17.name}</Text>
        <Text style={styles.description}>{scene18.name}</Text>
        <Text style={styles.description}>{scene19.name}</Text>
        <Text style={styles.description}>{scene0.name}</Text>
        <Text style={styles.description}>==============</Text>
        <Text style={styles.description}>Total Deivce: {devices.length}</Text>
      </View>
    )
  }

}

// // Prop type warnings
// DigitalStromLight.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DigitalStromLight.defaultProps = {
//   someSetting: false
// }
