import { put } from 'redux-saga/effects';
import LoginActions from '../Redux/LoginRedux';

// https://www.npmjs.com/package/redux-saga

// attempts to login
export function* login({ username, password }) {

    if (password === '') {
        // dispatch failure
        yield put(LoginActions.loginFailure('WRONG'));
    } else {
        // dispatch successful logins
        yield put(LoginActions.loginSuccess(username));
    }
}
