// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/SampleComponentStyle'

export default class SampleComponent extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>SampleComponent Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// SampleComponent.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// SampleComponent.defaultProps = {
//   someSetting: false
// }
