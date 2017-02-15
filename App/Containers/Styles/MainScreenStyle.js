// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

const { list: listColor } = Colors
const { list: listMetric } = Metrics

export default StyleSheet.create({

  ...ApplicationStyles.screen,

  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },

  listView: {
    marginTop: Metrics.smallMargin
  },

  row: {
    flex: 1,
    backgroundColor: listColor.background,
    // margin: Metrics.smallMargin,
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    height: listMetric.height,
    justifyContent: 'center',
    alignItems: 'center'
  },

  label: {
    color: listColor.color,
    margin: Metrics.smallMargin
  }

})
