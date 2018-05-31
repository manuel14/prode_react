export const ADD_MATCH = "ADD_MATCH";
export const UPDATE_MATCH = "UPDATE_MATCH";
export const DELETE_MATCH = "DELETE_MATCH";
export const GET_MATCHES = "GET_MATCHES";
import { get } from "../../api";

export function addMatch(competitionId, matchid, team1, team2, date) {
  return {
    type: ADD_MATCH,
    payload: { competitionId, matchid, team1, team2, date }
  };
}

export function updateMatch(competitionId, matchid, team1, team2, date) {
  return {
    type: UPDATE_MATCH,
    payload: { competitionId, matchid, team1, team2, date }
  };
}

export function deleteMatch(competitionId, matchid) {
  return {
    type: DELETE_MATCH,
    payload: { competitionId, matchid }
  };
}

export const MATCH_REQUEST = "prode/match/MATCH_REQUEST";
export function matchRequest() {
  return {
    type: MATCH_REQUEST
  };
}

export const MATCH_RESPONSE = "prode/match/MATCH_RESPONSE";
export function matchResponse(response) {
  return {
    type: MATCH_RESPONSE,
    response
  };
}

export const MATCH_ERROR = "prode/match/MATCH_ERROR";
export function matchError(error) {
  return {
    type: MATCH_ERROR,
    error
  };
}

export function getMatches(competitionId) {
  return dispatch => {
    dispatch(matchRequest());
    return get(`/api/competitions/${competitionId}/matches`)
      .then(res => dispatch(matchResponse(res)))
      .catch(err => dispatch(matchError(err)));
  };
}
