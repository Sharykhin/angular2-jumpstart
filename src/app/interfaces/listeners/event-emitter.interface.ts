export interface EventEmitterInterface {
	addListener(event: string, fn);

	removeListener(event: string, fn);

	emitEvent(event: string, parameters);
}