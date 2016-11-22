import { ActionReducer, Action } from '@ngrx/store';
import { ActionInterface } from './../interfaces/action.interface';
import { PUPIL_ACTIONS } from './../actions/pupil.actions';
import {PupilCreateActionInterface} from './../interfaces/action-pupil.interface';
import { PupilInterface } from './../interfaces/pupil.interface';

const initialState: Array<PupilInterface> = [];

export function pupilReducer(state = initialState, action: Action) : Array<PupilInterface> {   
    switch (action.type) {
        case PUPIL_ACTIONS.CREATE:
            return state.concat((<PupilCreateActionInterface>action).payload);
        default:
            return state;
    }
}