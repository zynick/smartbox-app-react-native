// @flow

import { Colors } from '../../Themes/'

const { navbar } = Colors;

export default {

  container: {
    flex: 1
  },

  navBar: {
    backgroundColor: navbar.background
  },

  title: {
    color: navbar.color
  },

  leftButton: {
    tintColor: navbar.color  // dafuq is tintColor?
  },

  rightButton: {
    color: navbar.color
  }

}