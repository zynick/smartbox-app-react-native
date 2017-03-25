// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  dsCallSceneRequest: ['zoneId', 'groupId', 'sceneNumber'],
  dsCallSceneSuccess: ['ok'],
  dsCallSceneFailure: ['error']
})

export const DsCallSceneTypes = Types
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

export const success = (state, action) => {
  const { ok } = action
  return state.merge({ fetching: false, error: null, success: ok })
}

export const failure = (state, action) => {
  const { error } = action
  return state.merge({ fetching: false, error, success: false })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DS_CALL_SCENE_REQUEST]: request,
  [Types.DS_CALL_SCENE_SUCCESS]: success,
  [Types.DS_CALL_SCENE_FAILURE]: failure
})
