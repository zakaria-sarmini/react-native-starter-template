import { createAction } from 'redux-actions';

export const MODULE_ONE_ADD = 'moduleOne/MODULE_ONE_ADD';
export const MODULE_ONE_REDUCE = 'moduleOne/MODULE_ONE_REDUCE';

export const moduleOneActionCreators = {
	add: createAction(MODULE_ONE_ADD),
	reduce: createAction(MODULE_ONE_REDUCE)
};
