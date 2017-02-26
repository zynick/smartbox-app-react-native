// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  DsCallSceneRequest: ['zoneId', 'groupId', 'sceneNumber'],
  DsCallSceneSuccess: ['payload'],
  DsCallSceneFailure: ['error']
})

export const DsCallSceneTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  payload: null,
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, action) =>
  state.merge({ fetching: true, error: null, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action
  return state.merge({ fetching: false, error, payload: null })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DS_CALL_SCENE_REQUEST]: request,
  [Types.DS_CALL_SCENE_SUCCESS]: success,
  [Types.DS_CALL_SCENE_FAILURE]: failure
})
