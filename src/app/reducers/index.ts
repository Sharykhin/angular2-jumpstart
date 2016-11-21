import {counterReducer} from './counter.reducer';
import {pupilReducer} from './pupil.reducer';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { AppStateInterface } from './../interfaces/app-state.interface';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers, ActionReducer } from '@ngrx/store';

const reducers = {
  counter: counterReducer,
  pupils: pupilReducer
};


const developmentReducer: ActionReducer<AppStateInterface> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppStateInterface> = combineReducers(reducers);

export function reducer(state: any, action: any) {
	return developmentReducer(state, action);
}
