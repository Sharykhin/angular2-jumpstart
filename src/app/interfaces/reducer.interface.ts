import {ActionInterface} from './action.interface';

export interface ReducerInterface<T> {
	(state: T, action: ActionInterface);
}