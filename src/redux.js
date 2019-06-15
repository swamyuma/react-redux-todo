import { createStore } from "redux";
import uuid from "uuid/v4";

const initialState = {
  todos: [
    {
      id: uuid(),
      name: "Remove toxicity from your life",
      complete: false
    },
    {
      id: uuid(),
      name: "Meditate to happiness",
      complete: true
    }
  ]
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state, action) {
  const { type, payload } = action;
  console.log(type, payload);
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        )
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };

    default:
      return state;
  }
}

// return an object with type and payload
export const addTodoAction = todo => ({
  type: "ADD_TODO",
  payload: todo
});

export const toggleTodoAction = todoId => ({
  type: "TOGGLE_TODO",
  payload: todoId
});

export const deleteTodoAction = todoId => ({
  type: "DELETE_TODO",
  payload: todoId
});
