import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../redux";

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const disptach = useDispatch();
  const toggleTodo = todoId => disptach(toggleTodoAction(todoId));
  const deleteTodo = todoId => disptach(deleteTodoAction(todoId));

  return (
    <div className="container card card-body mb-3 ml-6 mr-6">
      <div className="card-header mb-3">Todos</div>
      {todos.map(todo => {
        const { id, name, complete } = todo;
        return (
          <div className="card card-body mb-3 ml-6 mr-6">
            <div>
              <input
                className="mr-3"
                type="checkbox"
                checked={complete}
                onClick={toggleTodo.bind(null, id)}
              />
              <span className={complete ? "complete mr-6" : null}>
                {complete ? <del>{name}</del> : name}
              </span>
              <span
                className="delete-button"
                onClick={deleteTodo.bind(null, id)}
                style={{ cursor: "pointer", color: "red", float: "right" }}
              >
                X
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
