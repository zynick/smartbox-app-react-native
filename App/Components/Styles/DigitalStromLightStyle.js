// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: Metrics.titlePadding
    backgroundColor: Colors.darkYellow, // TODO change
    minHeight: 160, // TODO move to Metrics?
    margin: Metrics.smallMargin
  },

  text: {
    color: Colors.white, // TODO change
    margin: Metrics.smallMargin,
    fontSize: Fonts.size.regular
  },

  description: {
    color: Colors.white
  }

})
