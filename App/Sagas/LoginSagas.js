import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

export function* login(api, action) {

  const { email, password } = action

  const res = yield call(api.login, email, password)

  if (!res.ok) {
    // https://github.com/skellock/apisauce#problem-codes
    const { problem, data } = res;
    let message = (problem === 'SERVER_ERROR' || problem === 'CLIENT_ERROR')
      ? data.error.message
      : 'Unable to connect to SMARTBOX Server';

    return yield put(LoginActions.loginFailure(message))
  }

  const { token } = res.data
  yield put(LoginActions.loginSuccess(email, token))
}
