import { Action } from 'redux-actions';

export interface ModuleOneState {
	counter: number;
}

export interface ModuleOnePayload {
	counter: number;
}

export interface ModuleOneAction extends Action<ModuleOnePayload> {}
