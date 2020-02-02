import { createAction } from 'redux-actions';
import { ModuleOnePayload } from './interfaces';

export enum ModuleOneActions {
	MODULE_ONE_ADD = 'module_one.module_one_add',
	MODULE_ONE_REDUCE = 'module_one.module_one_reduce',
}

export const moduleOneActionCreators = {
	add: createAction(
		ModuleOneActions.MODULE_ONE_ADD,
		(payload: ModuleOnePayload) => payload,
	),
	reduce: createAction(
		ModuleOneActions.MODULE_ONE_REDUCE,
		(payload: ModuleOnePayload) => payload,
	),
};
