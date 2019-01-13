export const ACTIONS = {
	ADD_TODO: 'ADD_TODO',
	EDIT_TODO: 'EDIT_TODO',
	TOGGLE_TODO: 'TOGGLE_TODO',
	DELETE_TODO: 'DELETE_TODO',
  SET_FILTER: 'SET_FILTER'
};

let nextId = 5;

export const addTodo = (title) => ({
  type: ACTIONS.ADD_TODO,
  id: nextId++,
  title: title
});

export const deleteTodo = (id) => ({
  type: ACTIONS.DELETE_TODO,
  id: id 
});

export const editTodo = (id, title) => ({
  type: ACTIONS.EDIT_TODO,
  id: id,
  title: title
});

export const toggleTodo = (id) => ({
  type: ACTIONS.TOGGLE_TODO,
  id: id
});

export const setFilter = (filter) => ({
  type: ACTIONS.SET_FILTER,
  filter: filter
});