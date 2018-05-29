export const ADD_MATCH = 'ADD_MATCH';
export const UPDATE_MATCH = 'UPDATE_MATCH';
export const DELETE_MATCH = 'DELETE_MATCH';
export const GET_MATCHES_BY_COMPETITION = 'GET_MATCHES_BY_COMPETITION';

export function addMatch(competitionId, matchid, team1, team2, date){
	return{
		type: ADD_MATCH,
		payload: {competitionId, matchid, team1, team2, date}
	}
}

export function updateMatch(competitionId, matchid, team1, team2, date){
	return{
		type: UPDATE_MATCH,
		payload: {competitionId, matchid, team1, team2, date}
	}
}

export function deleteMatch(competitionId, matchid){
	return{
		type: DELETE_MATCH,
		payload: {competitionId, matchid}
	}
}