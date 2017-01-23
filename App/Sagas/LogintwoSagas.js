import { put } from 'redux-saga/effects';
import LoginActions from '../Redux/LogintwoRedux';

// attempts to login
export function* logintwo({ username, password }) {

    if (password === '') {
        // dispatch failure
        yield put(LoginActions.logintwoFailure('WRONG'));
    } else {
        // dispatch successful logins
        yield put(LoginActions.logintwoSuccess(username));
    }
}
