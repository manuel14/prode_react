import { combineReducers } from "redux";
import competitionReducer from "./containers/competition/reducer";
import matchReducer from "./containers/match/reducer";
import appReducer from "./containers/App/reducer";

export default combineReducers({
  appReducer,
  competitionReducer,
  matchReducer
});
