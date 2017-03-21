// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({

  ...ApplicationStyles.screen, // TODO do i need this? remove/refactor?

  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },

  tabbar: {
    backgroundColor: '#222'
  },

  // tab: {
  //   // padding: 5
  //   borderWidth: 1,
  //   borderColor: '#F00'
  //   // backgroundColor: '#666'
  //   // borderTopWidth: 5,
  // },

  indicator: {
    flex: 1,
    margin: 4,
    borderTopWidth: 4,
    borderColor: '#FFF',
    // backgroundColor: '#138833',
    // borderWidth: 5,
    // borderRadius: 5,
  },

  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  listView: {
    borderWidth: 5,
    borderColor: '#FF0000',
    paddingTop: Metrics.smallMargin,
    paddingBottom: Metrics.smallMargin
  }

})
