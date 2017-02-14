import { call, put, select } from 'redux-saga/effects'
import StructureActions from '../Redux/StructureRedux'
import mergeStructure from '../Transforms/MergeStructure'

export const selectLogin = state => state.login

export function* getStructure (api, action) {
  const { token } = yield select(selectLogin)

  const dsRes = yield call(api.ds.zones, token)
  const gcRes = yield call(api.gc.settings, token)

  // console.tron.log(`StructureSaga ${dsRes.ok}, ${gcRes.ok}`)

  if (dsRes.ok && gcRes.ok) {
    const structure = mergeStructure(dsRes.data, gcRes.data)
    yield put(StructureActions.structureSuccess(structure))
  } else {
    yield put(StructureActions.structureFailure())
  }
}
