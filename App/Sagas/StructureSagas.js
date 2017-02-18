import { call, put, select } from 'redux-saga/effects'
import StructureActions from '../Redux/StructureRedux'

export const selectLogin = state => state.login

export function* getStructure (api, action) {
  const { token } = yield select(selectLogin)

  const res = yield call(api.structure, token)

  if (res.ok) {
    yield put(StructureActions.structureSuccess(res.data))
  } else {
    yield put(StructureActions.structureFailure())
  }
}
