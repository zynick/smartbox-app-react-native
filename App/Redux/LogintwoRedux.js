// @flow

// https://www.npmjs.com/package/reduxsauce
import { createReducer, createActions } from 'reduxsauce';
// https://www.npmjs.com/package/seamless-immutable
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    logintwoRequest: ['username', 'password'],
    logintwoSuccess: ['username'],
    logintwoFailure: ['error'],
    logouttwo: null
});

export const LogintwoTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    username: null,
    error: null,
    fetching: false
});

/* ------------- Reducers ------------- */

// we're attempting to login
export const request = (state: Object) =>
    state.merge({ fetching: true });

// we've successfully logged in
export const success = (state: Object, { username }: Object) =>
    state.merge({ fetching: false, error: null, username });

// we've had a problem logging in
export const failure = (state: Object, { error }: Object) =>
    state.merge({ fetching: false, error });

// we've logged out
export const logout = (state: Object) =>
    INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGINTWO_REQUEST]: request,
    [Types.LOGINTWO_SUCCESS]: success,
    [Types.LOGINTWO_FAILURE]: failure,
    [Types.LOGOUTTWO]: logout
});

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = (loginState: Object) =>
    loginState.username !== null;
