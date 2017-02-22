// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/GlobalCacheComponentStyle'

type GlobalCacheComponentProps = {
  item: Object
};

export default class GlobalCacheComponent extends React.Component {

  props: GlobalCacheComponentProps;

  render () {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>GlobalCacheComponent Component</Text>
        <Text style={styles.description}>{this.props.item.name}</Text>
      </View>
    )
  }
}

// // Prop type warnings
// GlobalCacheComponent.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// GlobalCacheComponent.defaultProps = {
//   someSetting: false
// }
