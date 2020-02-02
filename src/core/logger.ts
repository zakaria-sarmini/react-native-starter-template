export default class Logger {
	public static logDebug(text: string): void {
		console.log(text);
	}

	public static logInfo(text: string): void {
		this.outputLog(`%c ${text}`, 'background-color: #5794e0; color: white');
	}

	public static logWarning(text: string): void {
		this.outputLog(`%c ${text}`, 'background-color: #ffc107; color: white');
	}

	public static logError(text: string): void {
		this.outputLog(`%c ${text}`, 'background-color: #9c0000; color: white');
	}

	private static outputLog(text: string, type: string): void {
		if (__DEV__) {
			console.log(text, type);
		}
	}
}
