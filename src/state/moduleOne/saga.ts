import { take, put, fork, all, delay } from 'redux-saga/effects';

import { moduleOneActionCreators, ModuleOneActions } from './actions';
import { ModuleOneAction } from './interfaces';

export function* asyncAdd(action: ModuleOneAction) {
	const { payload } = action;

	yield delay(2000);
	yield put(moduleOneActionCreators.add(payload));
}

export function* watchAdd() {
	while (true) {
		const action: ModuleOneAction = yield take(ModuleOneActions.MODULE_ONE_ADD);
		yield* asyncAdd(action);
	}
}

export default function*() {
	yield all([fork(watchAdd)]);
}
