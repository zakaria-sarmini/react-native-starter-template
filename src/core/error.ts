export interface Error {
	code: number;
	message: string;
}

export const Errors = {
	KEYBOARD_DISMISS_FAILED: {
		code: 100,
		message: 'Couldn\'t dismiss keyboard'
	}
};

export default class ErrorHandler {

}
