import { createAction } from 'redux-actions';
import { ModuleTwoPayload } from './interfaces';

export enum ModuleTwoActions {
	MODULE_TWO_ADD = 'module_two.module_two_add',
	MODULE_TWO_REDUCE = 'module_two.module_two_reduce',
}

export const moduleTwoActionCreators = {
	add: createAction(
		ModuleTwoActions.MODULE_TWO_ADD,
		(payload: ModuleTwoPayload) => payload,
	),
	reduce: createAction(
		ModuleTwoActions.MODULE_TWO_REDUCE,
		(payload: ModuleTwoPayload) => payload,
	),
};
