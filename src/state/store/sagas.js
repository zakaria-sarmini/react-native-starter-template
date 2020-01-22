import { fork, all } from 'redux-saga/effects';
import { moduleOneSaga } from '../moduleOne';
import { moduleTwoSaga } from '../moduleTwo';

export default function* rootSaga() {
	yield all([
		fork(moduleOneSaga),
		fork(moduleTwoSaga)
	]);
}
