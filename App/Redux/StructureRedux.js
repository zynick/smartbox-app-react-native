// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import R from 'ramda'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  structureRequest: null,
  structureSuccess: ['structure'],
  structureFailure: null
})

export const StructureTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  structure: null,
  fetching: false,
  error: null
})

/* ------------- Reducers ------------- */

export const request = state => {
  return state.merge({ fetching: true })
}

export const success = (state, { structure }) => {
  return state.merge({ fetching: false, structure, error: null })
}

export const failure = state => {
  return state.merge({ fetching: false, error: true })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STRUCTURE_REQUEST]: request,
  [Types.STRUCTURE_SUCCESS]: success,
  [Types.STRUCTURE_FAILURE]: failure
})

/* ------------- Selectors ------------- */

export const getStructure = structureState => {
  return structureState.structure
}

export const getStructureKeys = structureState => {
  return R.map(s => s.name, structureState.structure || [])
}
