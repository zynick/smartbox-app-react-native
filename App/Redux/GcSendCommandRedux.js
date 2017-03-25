// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  gcSendCommandRequest: ['command'],
  gcSendCommandSuccess: null,
  gcSendCommandFailure: ['error']
})

export const GcSendCommandTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  success: false,
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

export const request = (state, action) =>
  state.merge({ fetching: true, error: null, success: false })

export const success = (state) =>
  state.merge({ fetching: false, error: null, success: true })

export const failure = (state, { error }) =>
  state.merge({ fetching: false, error, success: false })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GC_SEND_COMMAND_REQUEST]: request,
  [Types.GC_SEND_COMMAND_SUCCESS]: success,
  [Types.GC_SEND_COMMAND_FAILURE]: failure
})
