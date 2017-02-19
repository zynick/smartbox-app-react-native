import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

// attempts to login
export function* login(api, action) {

  const { email, password } = action

  const response = yield call(api.login, email, password)

  if (!response.ok) {
    // https://github.com/skellock/apisauce#problem-codes
    const { problem, data } = response;
    let message = (problem === 'SERVER_ERROR' || problem === 'CLIENT_ERROR')
      ? data.error.message
      : 'Unable to connect to SMARTBOX Server';

    return yield put(LoginActions.loginFailure(message))
  }

  const { token } = response.data
  yield put(LoginActions.loginSuccess(email, token))
}
