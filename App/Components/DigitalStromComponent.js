// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/DigitalStromComponentStyle'
import DigitalStromLightContainer from '../Containers/DigitalStromLightContainer'

type DigitalStromComponentProps = {
  item: Object,
  // text ? : string,
  // children ? : string,
  // onPress: () => void,
  // styles ? : Object
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
