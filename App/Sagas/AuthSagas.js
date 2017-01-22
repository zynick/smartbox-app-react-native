/* ***********************************************************
 * A short word on how to use this automagically generated file.
 * We're often asked in the ignite gitter channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to Sagas/index.js
 *  - This template uses the api declared in Sagas/index.js, so
 *    you'll need to define a constant in that file.
 *************************************************************/

import { call, put } from 'redux-saga/effects';
import AuthActions from '../Redux/AuthRedux';

export function* authenticate(api, action) {

    console.tron.log(`AuthSaga args: ${JSON.stringify(arguments)}`);

    const { data } = action;
    // make the call to the api
    const response = yield call(api.login, data);

    console.tron.log(`response.data: ${JSON.stringify(response.data)}`);
    // success?
    if (response.ok) {
        // You might need to change the response here - do this with a 'transform',
        // located in ../Transforms/. Otherwise, just pass the data back from the api.
        yield put(AuthActions.authSuccess(response.data));
    } else {
        yield put(AuthActions.authFailure());
    }
};
