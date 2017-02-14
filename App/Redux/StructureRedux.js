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

// request the data from an api
export const request = state => {
  // console.tron.log(`StructureRedux request`)
  return state.merge({ fetching: true })
}

// successful api lookup
export const success = (state, { structure }) => {
  // console.tron.log(`StructureRedux success ${JSON.stringify(structure, null, 2)}`)
  return state.merge({ fetching: false, structure, error: null })
}

// Something went wrong somewhere
export const failure = state => {
  // console.tron.log(`StructureRedux failure ${JSON.stringify(state, null, 2)}`)
  return state.merge({ fetching: false, error: true })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STRUCTURE_REQUEST]: request,
  [Types.STRUCTURE_SUCCESS]: success,
  [Types.STRUCTURE_FAILURE]: failure
})

/* ------------- Selectors ------------- */

export const getStructure = (structureState: Object) => {
  // console.tron.log(`StructureRedux getStructure: ${JSON.stringify(structureState,null,2)}`)
  return structureState.structure
}

export const getStructureKeys = (structureState: Object) => {
  // console.tron.log(`StructureRedux.getStructureKeys() structure: ${JSON.stringify(structureState,null,2)}`)
  return R.map(s => s.name, structureState.structure || [])
}
