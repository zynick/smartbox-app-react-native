// @flow

import React from 'react'
import { View, Text } from 'react-native'

import DigitalStromLightContainer from '../Containers/DigitalStromLightContainer'
import styles from './Styles/DigitalStromComponentStyle'


type DigitalStromComponentProps = {
  item: Object,
};


export default class DigitalStromComponent extends React.Component {

  props: DigitalStromComponentProps;

  renderDefault() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Unrecognized DigitalStromComponent</Text>
      </View>
    )
  }

  render() {
    const { item } = this.props;
    switch (item.groupId) {
      case 1: // light
        return (
          <DigitalStromLightContainer item={item} />
        )
      default:
        return this.renderDefault()
    }
  }
}

// // Prop type warnings
// DigitalStromComponent.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// DigitalStromComponent.defaultProps = {
//   someSetting: false
// }
