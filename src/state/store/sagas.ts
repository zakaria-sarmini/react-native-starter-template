import { fork, all } from 'redux-saga/effects';
import { coreSaga } from '../core';

export default function* rootSaga() {
	yield all([fork(coreSaga)]);
}
