import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux";
import uuid from "uuid/v4";
import "bootstrap/dist/css/bootstrap.min.css";

const style = {
  theme: {
    margin: "auto 10 10 auto"
  }
};

const TodoInput = props => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = todo => dispatch(addTodoAction(todo));

  const onChange = event => {
    setTodo(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(todo);
    if (todo.trim() === "") return;
    addTodo({
      id: uuid(),
      name: todo,
      complete: false
    });
    setTodo("");
  };

  return (
    <div className="container card card-body mb-3 ml-6 mr-6">
      <div className="card-header mb-3">Add</div>
      <form onSubmit={onSubmit} className={style.theme}>
        <div class="form-group">
          <input
            className="form-control mb-3"
            type="text"
            name="todo"
            value={todo}
            placeholder="Normal input"
            onChange={onChange}
          />

          <div className="control">
            <button className="button is-link">Add Todo</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
