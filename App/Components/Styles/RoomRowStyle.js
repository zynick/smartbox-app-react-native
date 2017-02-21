// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

const { roomRow: roomRowColor } = Colors
const { roomRow: roomRowMetric } = Metrics

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: roomRowColor.background,
    height: roomRowMetric.height,
    margin: Metrics.smallMargin,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: roomRowColor.color,
    margin: Metrics.smallMargin,
    fontSize: Fonts.size.regular
  }

})
