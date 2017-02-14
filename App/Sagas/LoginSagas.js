import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

// attempts to login
export function* login (api, action) {
  const { email, password } = action

  const response = yield call(api.login, email, password)

  if (response.ok) {
    const { token } = response.data
    yield put(LoginActions.loginSuccess(email, token))
  } else {
    const { message } = response.data.error
    yield put(LoginActions.loginFailure(message))
  }
}
