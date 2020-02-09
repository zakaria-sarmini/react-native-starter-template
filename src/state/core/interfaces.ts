import { Action, ActionFunction1 } from 'redux-actions';

export interface ICoreState {
	counter: number;
}

export interface ICoreAddPayload {
	numberToAdd: number;
}

export interface ICoreActions {
	add: ActionFunction1<ICoreAddPayload, Action<ICoreAddPayload>>;
}

export interface ICorePayload extends ICoreAddPayload {}
