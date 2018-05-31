import {ADD_COMPETITION, UPDATE_COMPETITION, DELETE_COMPETITION, COMPETITION_REQUEST, COMPETITION_RESPONSE} from './action';
export const defaultState = {
	items: []
};

export default function competitions(state=defaultState, action){
	switch(action.type){
		case ADD_COMPETITION:{
			return{
				...state,
				items: [...state.competitions, action.payload]
			}
		}
		case UPDATE_COMPETITION:{
			return{
				...state,
				items: state.competitions.map(item => item.id ===
					action.payload.id ? action.payload : item)
			}
		}
		case DELETE_COMPETITION:{
			return{
				...state,
				items: state.competitions.filter(item =>
					item.id !== action.payload.id)
			}
		}
		case COMPETITION_RESPONSE:{
			return{
				...state,
				items: action.response.competitions
			}
		}
		case COMPETITION_REQUEST:{
			return{
				...state,
			}
		}
		default:{
			return state;
		}

	}
}