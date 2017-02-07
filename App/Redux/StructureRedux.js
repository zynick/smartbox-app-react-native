import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    structureRequest: ['token'],
    structureSuccess: ['structure'],
    structureFailure: null
});

export const StructureTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    structure: null,
    fetching: false,
    error: null
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => {
    console.tron.log(`StructureRedux request`);
    return state.merge({ fetching: true });
}

// successful api lookup
export const success = (state, { structure }) => {
    console.tron.log(`StructureRedux success ${JSON.stringify(structure, null, 2)}`);
    return state.merge({ fetching: false, structure, error: null });
}

// Something went wrong somewhere
export const failure = state => {
    console.tron.log(`StructureRedux failure ${JSON.stringify(state, null, 2)}`);
    return state.merge({ fetching: false, structure: null, error: true });
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.STRUCTURE_REQUEST]: request,
    [Types.STRUCTURE_SUCCESS]: success,
    [Types.STRUCTURE_FAILURE]: failure
});
