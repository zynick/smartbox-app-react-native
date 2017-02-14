// @flow

// https://www.npmjs.com/package/reduxsauce
import { createReducer, createActions } from 'reduxsauce'
// https://www.npmjs.com/package/seamless-immutable
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

// we're attempting to login
export const request = (state: Object) =>
  state.merge({ fetching: true })

// we've successfully logged in
export const success = (state: Object, { email, token }: Object) =>
  state.merge({ fetching: false, error: null, email, token })

// we've had a problem logging in
export const failure = (state: Object, { error }: Object) =>
  state.merge({ fetching: false, error })

// we've logged out
export const logout = (state: Object) =>
  INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = (loginState: Object) => {
  // console.tron.log(`LoginRedux isLoggedIn: ${JSON.stringify(loginState,null,2)}`)
  return loginState.email !== null
}
