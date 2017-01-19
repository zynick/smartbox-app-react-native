import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    sampleRdxSgRequest: ['data'],
    sampleRdxSgSuccess: ['payload'],
    sampleRdxSgFailure: null
});

export const SampleRdxSgTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    data: null,
    fetching: null,
    payload: null,
    error: null
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
    state.merge({ fetching: true, data, payload: null });

// successful api lookup
export const success = (state, action) => {
    const { payload } = action;
    return state.merge({ fetching: false, error: null, payload });
};

// Something went wrong somewhere.
export const failure = state =>
    state.merge({ fetching: false, error: true, payload: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.Sample_Rdx_Sg_REQUEST]: request,
    [Types.Sample_Rdx_Sg_SUCCESS]: success,
    [Types.Sample_Rdx_Sg_FAILURE]: failure
});
