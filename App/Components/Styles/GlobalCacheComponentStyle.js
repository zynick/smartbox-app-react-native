// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 160,

    marginTop: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin,
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,

    padding: Metrics.smallMargin,

    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#666'
  },

  text: {
    color: '#666',
    margin: Metrics.smallMargin,
    fontSize: Fonts.size.h6
  },

  description: {
    color: '#666',
    margin: Metrics.smallMargin,
    fontSize: Fonts.size.medium
  }

})
