import { createAction } from 'redux-actions';
import { ICoreActions, ICoreAddPayload } from './interfaces';

export enum CoreActions {
	ADD = 'core.add',
}

export const coreActionCreators: ICoreActions = {
	add: createAction<ICoreAddPayload>(CoreActions.ADD),
};
