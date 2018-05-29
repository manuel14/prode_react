import {ADD_MATCH, UPDATE_MATCH, DELETE_MATCH} from './action';

const defaultState = {
	matches: []
}

export default function(state=defaultState, action){
	switch(action.type){
		case ADD_MATCH:{
			return{
				...state,
				matches: [...state.matches, action.payload]
			}
		}
		case UPDATE_MATCH:{
			return{
				...state,
				matches: state.matches.map(item => item.id ===
					action.id ? action.payload: item)
			}
		}
		case DELETE_MATCH:{
			return{
				...state,
				matches: state.matches.filter(item =>
					item.id !== action.id)
			}
		}
		default:{
			return state;
		}
	}
}