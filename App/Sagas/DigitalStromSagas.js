import { call, put, select } from 'redux-saga/effects'
import DigitalStromActions from '../Redux/DigitalStromRedux'

export const selectLogin = state => state.login

export function* callScene(api, id, groupID, sceneNumber, action) {
  console.tron.log(`DigitalStromSaga action:${JSON.stringify(action,null,2)}`)

  const { token } = yield select(selectLogin)
  // const { data } = action

  const res = yield call(api.callScene, token, id, groupID, sceneNumber)

  // success?
  if (res.ok) {
    yield put(DigitalStromActions.digitalstromSuccess(res.data))
  } else {
    yield put(DigitalStromActions.digitalstromFailure())
  }
}