import { createStore, applyMiddleware, compose, Store, AnyAction } from 'redux';
import { compact } from 'lodash';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';
import { Action } from 'redux-actions';
import { IState } from '..';
import { DEFAULT_CORE_STATE } from '../core/reducer';

export default function initializeStore(): Store<IState, Action<any>> {
	const sagaMiddleware = createSagaMiddleware();

	const middlewares = compact([
		sagaMiddleware,
		__DEV__ ? createLogger() : null,
	]);

	const store: Store<IState, Action<any>> = createStore(
		rootReducer,
		{
			core: DEFAULT_CORE_STATE
		},
		compose(applyMiddleware(...middlewares)),
	);

	persistStore(store as unknown as Store<IState, AnyAction>, null, () => {
		store.getState();
	});

	sagaMiddleware.run(rootSaga);

	return store;
}
