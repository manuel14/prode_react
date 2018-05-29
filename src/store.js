import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer';
import {addCompetition, updateCompetition, deleteCompetition} from './containers/competition/action';
import {addMatch, updateMatch, deleteMatch} from './containers/match/action';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [];

const enhancers = [applyMiddleware(...middlewares)];

const initialState = {}

const store = createStore(rootReducer,
	initialState,
	composeEnhancers(...enhancers)
)

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addCompetition(1, "Mundial", 32));
store.dispatch(addCompetition(2, "Nba", 32));
store.dispatch(updateCompetition(2, "Nba", 50));
store.dispatch(addMatch(1, 0, "arg", "isl", "01-01-2018"));
unsubscribe();