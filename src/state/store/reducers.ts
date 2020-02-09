import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { Reducer, ReducersMapObject } from 'redux';
import { PersistConfig } from 'redux-persist/es/types';

import { CoreReducer } from '../core';
import { Action } from 'redux-actions';
import { IState } from '..';

const persistConfig: PersistConfig<any> = {
	key: 'CREATION_BEYOND_TEMPLATE',
	storage: AsyncStorage,
};

const reducers: ReducersMapObject<IState, Action<any>> = {
	core: CoreReducer
};

const appReducer: Reducer<IState, Action<any>> = persistCombineReducers(
	persistConfig,
	reducers,
);

export default function rootReducer(state: any, action: Action<any>) {
	return appReducer(state, action);
}
