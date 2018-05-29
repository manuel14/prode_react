export const ADD_COMPETITION = 'ADD_COMPETITION';
export const UPDATE_COMPETITION = 'UPDATE_COMPETITION';
export const DELETE_COMPETITION = 'DELETE_COMPETITION';
export const GET_MATCHES = 'GET_MATCHES';


export function addCompetition(id, name, teams){
	return{
		type: ADD_COMPETITION,
		payload: {id, name, teams}
	}
}

export function updateCompetition(id, name, teams){
	return{
		type: UPDATE_COMPETITION,
		payload: {id, name, teams}
	}
}

export function deleteCompetition(id){
	return{
		type: DELETE_COMPETITION,
		payload: {id}
	}
}

export function getMatches(id){
	return{
		type: GET_MATCHES,
		payload: {id}
	}
}

