import {combineReducers} from 'redux'
import competitionReducer from './containers/competition/reducer';
import matchReducer from './containers/match/reducer';

export default combineReducers({
	competitionReducer,
	matchReducer
})



