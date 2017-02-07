
import { call, put } from 'redux-saga/effects';
import StructureActions from '../Redux/StructureRedux';
import mergeStructure from '../Transforms/MergeStructure';

export function* getStructure(api, action) {
    const { token } = action;

    const dsRes = yield call(api.ds.zones, token);
    const gcRes = yield call(api.gc.settings, token);

    if (dsRes.ok && gcRes.ok) {
        const structure = mergeStructure(dsRes.data, gcRes.data);
        yield put(StructureActions.structureSuccess(structure));
    } else {
        yield put(StructureActions.structureFailure());
    }

}
