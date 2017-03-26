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

    borderWidth: 1,
    borderColor: '#666'
  },

  row: {
    // flex: 1, // css is weird, extra space will shown with this attribute
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },

  title: {
    color: '#666',
    margin: Metrics.smallMargin,
    fontSize: Fonts.size.h6
  },

  listView: {
    paddingTop: Metrics.smallMargin,
    paddingBottom: Metrics.smallMargin
  },

  button: {
    color: '#666',
    margin: Metrics.baseMargin,
    fontSize: Fonts.size.regular
  }

})
