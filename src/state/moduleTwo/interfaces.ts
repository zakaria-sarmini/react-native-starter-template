import { Action } from 'redux-actions';

export interface ModuleTwoState {
	counter: number;
}

export interface ModuleTwoPayload {
	counter: number;
}

export interface ModuleTwoAction extends Action<ModuleTwoPayload> {}
