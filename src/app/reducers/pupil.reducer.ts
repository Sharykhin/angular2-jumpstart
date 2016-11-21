import { ActionReducer, Action } from '@ngrx/store';
import { ReducerInterface } from './../interfaces/reducer.interface';
import { ActionInterface } from './../interfaces/action.interface';
import { PUPIL_ACTIONS } from './../actions/pupil.actions';
import {AppStateInterface} from './../interfaces/app-state.interface';
import {PupilCreateActionInterface} from './../interfaces/action-pupil.interface';

export interface State {
  pupils: any[];
};

const initialState: State = {
  pupils: []
};

export function pupilReducer(state = initialState, action: Action) : State {   
    switch (action.type) {
        case PUPIL_ACTIONS.CREATE:
            console.log(action);
            return { pupils: state.pupils.concat((<PupilCreateActionInterface>action).payload) };
        default:
            return state;
    }
}