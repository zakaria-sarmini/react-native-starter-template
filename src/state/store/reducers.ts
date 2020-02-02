import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { AnyAction, Reducer, ReducersMapObject } from 'redux';
import { PersistConfig } from 'redux-persist/es/types';
import { ModuleOneReducer } from '../moduleOne';
import { ModuleTwoReducer } from '../moduleTwo';

const persistConfig: PersistConfig<any> = {
	key: 'CREATION_BEYOND_TEMPLATE',
	storage: AsyncStorage,
};

const reducers: ReducersMapObject = {
	moduleOne: ModuleOneReducer,
	moduleTwo: ModuleTwoReducer,
};

const appReducer: Reducer<any, AnyAction> = persistCombineReducers(
	persistConfig,
	reducers,
);

export default function rootReducer(state: any, action: AnyAction) {
	return appReducer(state, action);
}
