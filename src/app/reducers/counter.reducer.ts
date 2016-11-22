import { ActionReducer, Action } from '@ngrx/store';
import { ActionInterface } from './../interfaces/action.interface';
import { PUPIL_ACTIONS } from './../actions/pupil.actions';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';


const initialState: number = 0;

export function counterReducer(state = initialState, action: Action) : number {
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