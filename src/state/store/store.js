import { createStore, applyMiddleware, compose } from 'redux';
import { compact } from 'lodash';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

export default function initializeStore() {
	const sagaMiddleware = createSagaMiddleware();

	const middlewares = compact([
		sagaMiddleware,
		__DEV__ ? createLogger() : null
	]);

	const store = createStore(
		rootReducer,
		{},
		compose(applyMiddleware(...middlewares))
	);

	persistStore(
		store,
		null,
		() => {
			store.getState();
		}
	);

	sagaMiddleware.run(rootSaga);

	return store;
}
