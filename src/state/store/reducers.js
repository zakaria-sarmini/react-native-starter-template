import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import moduleOneReducer from '../moduleOne/reducer';
import moduleTwoReducer from '../moduleTwo/reducer';

const persistConfig = {
	key: 'CREATION_BEYOND_TEMPLATE',
	storage: AsyncStorage
};

const appReducer = persistCombineReducers(persistConfig, {
	moduleOneReducer, moduleTwoReducer
});

export default function rootReducer(state, action) {
	return appReducer(state, action);
}
