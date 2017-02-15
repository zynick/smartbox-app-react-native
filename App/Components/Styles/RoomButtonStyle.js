// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

const { roomButton: roomButtonColor } = Colors
const { roomButton: roomButtonMetric } = Metrics

export default StyleSheet.create({

  button: {
    flex: 1,
    backgroundColor: roomButtonColor.background,
    height: roomButtonMetric.height,
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: roomButtonColor.color,
    margin: Metrics.smallMargin
  }

})
