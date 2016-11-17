import { ActionReducer, Action } from '@ngrx/store';
import { ReducerInterface } from './../interfaces/reducer.interface';
import { ActionInterface } from './../interfaces/action.interface';
import { PUPIL_ACTIONS } from './../actions/pupil.actions';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';


export const counterReducer: ReducerInterface<number> = (state: number = 0, action: ActionInterface) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        case RESET:
            return 0;

        default:
            return state;
    }
}