import {combineReducers} from 'redux';
import resultReducer from './result-reducer';

const allReducers = {
	results: resultReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;