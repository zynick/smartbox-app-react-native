import { call, put, select } from 'redux-saga/effects'
import DsCallSceneActions from '../Redux/DsCallSceneRedux'

export const selectLogin = state => state.login

export function* callScene(api, action) {

  const { token } = yield select(selectLogin)
  const { zoneId, groupId, sceneNumber } = action

  const res = yield call(api.callScene, token, zoneId, groupId, sceneNumber)

  if (!res.ok) {
    // TODO process what happens if token expired

    const { problem, data } = res;
    let message = (problem === 'SERVER_ERROR' || problem === 'CLIENT_ERROR')
      ? data.error.message
      : 'Unable to connect to SMARTBOX Server';

    yield put(DsCallSceneActions.DsCallSceneFailure(message))
  }

  yield put(DsCallSceneActions.DsCallSceneSuccess(res.data))
}
