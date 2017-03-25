// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['email', 'token'],
  loginFailure: ['error'],
  logout: null
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  email: null,
  token: null,
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

export const request = state =>
  state.merge({ fetching: true })

export const success = (state, { email, token }) =>
  state.merge({ fetching: false, error: null, email, token })

export const failure = (state, { error }) =>
  state.merge({ fetching: false, error })

export const logout = state =>
  INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */

export const isLoggedIn = loginState => loginState.email !== null

export const getToken = loginState => loginState.token;