import { ActionInterface } from './action.interface';

export interface StoreInterface {
	dispatch(action: ActionInterface)
}