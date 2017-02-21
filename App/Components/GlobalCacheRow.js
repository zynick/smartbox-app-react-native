// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/GlobalCacheRowStyle'

type GlobalCacheRowProps = {
  item: Object
};

export default class GlobalCacheRow extends React.Component {

  props: GlobalCacheRowProps;

  render () {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>GlobalCacheRow Component</Text>
        <Text style={styles.description}>{this.props.item.name}</Text>
      </View>
    )
  }
}

// // Prop type warnings
// GlobalCacheRow.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// GlobalCacheRow.defaultProps = {
//   someSetting: false
// }
