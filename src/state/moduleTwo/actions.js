import { createAction } from 'redux-actions';

export const MODULE_TWO_ADD = 'moduleTwo/MODULE_TWO_ADD';
export const MODULE_TWO_REDUCE = 'moduleTwo/MODULE_TWO_REDUCE';

export const moduleTwoActionCreators = {
	add: createAction(MODULE_TWO_ADD),
	reduce: createAction(MODULE_TWO_REDUCE)
};
