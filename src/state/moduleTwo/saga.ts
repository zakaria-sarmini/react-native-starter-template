import { take, put, fork, all, delay } from 'redux-saga/effects';

import { moduleTwoActionCreators, ModuleTwoActions } from './actions';
import { ModuleTwoAction } from './interfaces';

export function* asyncAdd(action: ModuleTwoAction) {
	const { payload } = action;

	yield delay(2000);
	yield put(moduleTwoActionCreators.add(payload));
}

export function* watchAdd() {
	while (true) {
		const action: ModuleTwoAction = yield take(ModuleTwoActions.MODULE_TWO_ADD);
		yield* asyncAdd(action);
	}
}

export default function*() {
	yield all([fork(watchAdd)]);
}
