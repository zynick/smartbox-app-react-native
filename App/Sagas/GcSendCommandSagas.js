import { call, put, select } from 'redux-saga/effects'
import GcSendCommandActions from '../Redux/GcSendCommandRedux'

export const selectLogin = state => state.login

export function* sendCommand(api, action) {

  const { token } = yield select(selectLogin)
  const { command } = action

  const res = yield call(api.gc.command, token, command)

  if (!res.ok) {
    // TODO process what happens if token expired

    const { problem, data } = res;
    let message = (problem === 'SERVER_ERROR' || problem === 'CLIENT_ERROR')
      ? data.error.message
      : 'Unable to connect to SMARTBOX Server';

    return yield put(GcSendCommandActions.gcSendCommandFailure(message))
  }

  yield put(GcSendCommandActions.gcSendCommandSuccess())
}
