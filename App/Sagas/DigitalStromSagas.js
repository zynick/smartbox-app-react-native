import { call, put, select } from 'redux-saga/effects'
import DigitalStromActions from '../Redux/DigitalStromRedux'

export const selectLogin = state => state.login

export function* callScene(api, action) {

  // TODO check what's inside action, so is it next time we can just pass in 'apiName' in action
  console.tron.log(`DigitalStromSaga action: ${JSON.stringify(action,null,2)}`)

  const { token } = yield select(selectLogin)
  const { zoneId, groupId, sceneNumber } = action.data

  const res = yield call(api.callScene, token, zoneId, groupId, sceneNumber)

  // success?
  if (res.ok) {
    yield put(DigitalStromActions.digitalStromSuccess(res.data))
  } else {
    yield put(DigitalStromActions.digitalStromFailure())
  }

}
