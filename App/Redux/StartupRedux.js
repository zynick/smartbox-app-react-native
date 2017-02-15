// @flow

import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  startupComplete: null
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  started: false
})

/* ------------- Reducers ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: state => state.merge({ started: false }),
  [Types.STARTUP_COMPLETE]: state => state.merge({ started: true })
})