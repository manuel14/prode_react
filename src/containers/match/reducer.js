import {
  ADD_MATCH,
  UPDATE_MATCH,
  DELETE_MATCH,
  MATCH_REQUEST,
  MATCH_RESPONSE
} from "./action";

const defaultState = {
  matches: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_MATCH: {
      return {
        ...state,
        matches: [...state.matches, action.payload]
      };
    }
    case UPDATE_MATCH: {
      return {
        ...state,
        matches: state.matches.map(
          item =>
            item.id === action.payload.id &&
            item.competitionId === action.payload.competitionId
              ? action.payload
              : item
        )
      };
    }
    case DELETE_MATCH: {
      return {
        ...state,
        matches: state.matches.filter(
          item =>
            item.id !== action.id &&
            item.competitionId !== action.payload.competitionId
        )
      };
    }
    case MATCH_RESPONSE: {
      const matches = action.response;
      return {
        ...state,
        matches
      };
    }
    case MATCH_REQUEST: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
}
