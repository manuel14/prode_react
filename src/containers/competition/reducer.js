import {ADD_COMPETITION, UPDATE_COMPETITION, DELETE_COMPETITION, COMPETITION_REQUEST, COMPETITION_RESPONSE} from './action';
const defaultState = {
	competitions: []
};

export default function Competition(state=defaultState, action){
	switch(action.type){
		case ADD_COMPETITION:{
			return{
				...state,
				competitions: [...state.competitions, action.payload]
			}
		}
		case UPDATE_COMPETITION:{
			return{
				...state,
				competitions: state.competitions.map(item => item.id ===
					action.payload.id ? action.payload : item)
			}
		}
		case DELETE_COMPETITION:{
			return{
				...state,
				competitions: state.competitions.filter(item =>
					item.id !== action.payload.id)
			}
		}
		case COMPETITION_RESPONSE:{
			const competitions = action.response;
			return{
				...state,
				competitions
			}
		}
		case COMPETITION_REQUEST:{
			return{
				...state
			}
		}
		default:{
			return state;
		}

	}
}