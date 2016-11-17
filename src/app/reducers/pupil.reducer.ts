import { ActionReducer, Action } from '@ngrx/store';
import { ReducerInterface } from './../interfaces/reducer.interface';
import { ActionInterface } from './../interfaces/action.interface';
import { PUPIL_ACTIONS } from './../actions/pupil.actions';
import {AppStateInterface} from './../interfaces/app-state.interface';
import {PupilCreateActionInterface} from './../interfaces/action-pupil.interface';


export const pupilReducer: ReducerInterface<AppStateInterface> = (state: AppStateInterface, action: Action) : AppStateInterface => {
    switch (action.type) {
        case PUPIL_ACTIONS.CREATE:
            return {
                pupils: state.pupils.concat(
                    (<PupilCreateActionInterface>action).pupil
                )
            }   

        default:
            return state;
    }
}