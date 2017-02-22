// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/DigitalStromLightStyle'

type DigitalStromLightProps = {
  item: Object
};

export default class DigitalStromLight extends React.Component {

  props: DigitalStromLightProps;

  render () {
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
        <Text style={styles.description}>{scene5.name || '[Preset 1]'}</Text>
        <Text style={styles.description}>{scene17.name || '[Preset 2]'}</Text>
        <Text style={styles.description}>{scene18.name || '[Preset 3]'}</Text>
        <Text style={styles.description}>{scene19.name || '[Preset 4]'}</Text>
        <Text style={styles.description}>{scene0.name || '[Preset Off]'}</Text>
        <Text style={styles.description}>==============</Text>
        <Text style={styles.description}>Deivces: {devices.length}</Text>
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
