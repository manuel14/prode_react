export const ADD_COMPETITION = 'ADD_COMPETITION';
export const UPDATE_COMPETITION = 'UPDATE_COMPETITION';
export const DELETE_COMPETITION = 'DELETE_COMPETITION';
import { get } from '../../api';


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

export const COMPETITION_REQUEST = 'COMPETITION_REQUEST';
export function competitionRequest(){
	return{
		type: COMPETITION_REQUEST
	}
}

export const COMPETITION_RESPONSE = 'COMPETITION_RESPONSE';
export function competitionResponse(response){
	return{
		type: COMPETITION_RESPONSE,
		response
	}
}

export const COMPETITION_ERROR = 'COMPETITION_ERROR';
export function competitionError(error){
	return{
		type: COMPETITION_ERROR,
		error
	}
}

export function getCompetitions(){
	return dispatch => {
        dispatch(competitionRequest());
        return get(`/api/competitions/`)
            .then(res => dispatch(competitionResponse(res)))
            .catch(err => dispatch(competitionError(err)))
    }
}