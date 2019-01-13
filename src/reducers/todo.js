import {ACTIONS} from '../actions';
import {FILTER_VALUES} from '../constants';

export const getFilteredTodos = (state, filter) => {
  switch (filter) {
    case FILTER_VALUES.ALL:
      return state;
    case FILTER_VALUES.COMPLETED:
      return state.filter(todo => todo.completed);
    case FILTER_VALUES.UNCOMPLETED:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        id: action.id,
        title: action.title,
        completed: false
      };

    case ACTIONS.TOGGLE_TODO:
        return (state.id !== action.id) ?
        state:
        Object.assign({}, state, { completed: !state.completed });

    case ACTIONS.EDIT_TODO:
      return (state.id !== action.id) ?
       state:
       Object.assign({}, state, { title: action.title });

    default:
      return state;
  }
};

const reducer = (state = [], action) => {

	switch (action.type) {

		case ACTIONS.ADD_TODO:
      return [...state, todoReducer(null, action)];

    case ACTIONS.EDIT_TODO:
      return state.map(todo => todoReducer(todo, action));

    case ACTIONS.TOGGLE_TODO:
      return state.map(todo => todoReducer(todo, action));

    case ACTIONS.DELETE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);
      return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
      ];

  default:
    return state;
  }
}

export default reducer;
