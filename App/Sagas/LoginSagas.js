import { call, put } from 'redux-saga/effects';
import LoginActions from '../Redux/LoginRedux';

// attempts to login
export function* login(api, action) {

    const { email, password } = action;

    const response = yield call(api.login, email, password);

    if (response.ok) {
        // const { token } = response.data; // TODO save jwt token somewhere
        yield put(LoginActions.loginSuccess(email));
    } else {
        const { message } = response.data.error;
        yield put(LoginActions.loginFailure(message));
    }
};
