import {combineReducers} from 'redux';

import  todosReducer, * as fromTodos from './todo';
import {default as filterReducer} from './filter';

const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

export default reducer;

export const getFilteredTodos = (state) => fromTodos.getFilteredTodos(state.todos, state.filter);
