export interface EventsInterface {

	addListener(eventName: string, callback);

	removeListener(eventName: string, callback);

	emit(eventName: string, params: any);

	new(): EventsInterface;
}
