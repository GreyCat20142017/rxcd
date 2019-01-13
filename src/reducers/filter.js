import { ACTIONS } from '../actions';

const reducer = (state = 'ALL', action) => {
	switch (action.type) {
		case ACTIONS.SET_FILTER: 
			return action.filter
		default: 
			return state;
	}
};	

export default reducer;