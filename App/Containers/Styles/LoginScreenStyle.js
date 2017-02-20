// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const { login: loginColors } = Colors

export default StyleSheet.create({

  container: {
    // paddingTop: 250,
    // backgroundColor: Colors.background
  },

  flexContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.frost
  },

  flexBox: {
    width: Metrics.boxWidth,
    padding: Metrics.baseMargin,
    borderRadius: Metrics.buttonRadius,
    backgroundColor: Colors.ember
  },

  row: {
    padding: Metrics.baseMargin
  },

  logo: {
    alignSelf: 'center',
  },

  error: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: loginColors.error
  },

  label: {
    color: loginColors.label,
    paddingBottom: Metrics.smallMargin
  },

  input: {
    backgroundColor: loginColors.inputBackground,
    paddingVertical: 0,
    paddingHorizontal: Metrics.baseMargin,
    borderBottomWidth: 1,
    borderColor: loginColors.inputLine
  },

  inputEdit: {
    color: loginColors.input,
  },

  inputRead: {
    color: loginColors.inputReadOnly,
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: loginColors.button,
    height: Metrics.buttonHeight,
    borderRadius: Metrics.buttonRadius
  },

  buttonText: {
    color: loginColors.buttonText
  }
})
