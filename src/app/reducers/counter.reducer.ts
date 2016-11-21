import { ActionReducer, Action } from '@ngrx/store';
import { ReducerInterface } from './../interfaces/reducer.interface';
import { ActionInterface } from './../interfaces/action.interface';
import { PUPIL_ACTIONS } from './../actions/pupil.actions';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';


export interface State {
  counter: number;
};

const initialState: State = {
  counter: 0
};

export function counterReducer(state = initialState, action: Action) : State {
    switch (action.type) {
        case INCREMENT:
            return state.counter + 1;

        case DECREMENT:
            return state.counter - 1;

        case RESET:
            return 0;

        default:
            return state.counter;
    }
}