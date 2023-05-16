import { BsFillTrashFill } from "react-icons/bs";
import { TodoListContext } from "../../context/TodoListContext";
import React, { useContext } from "react";

export default function Todo({ todo }) {
  const { updateTodo, deleteTodo } = useContext(TodoListContext);

  const { id, text, status } = todo;

  const onUpdate = (event) => {
    const status = event.target.checked ? "completed" : "active";
    updateTodo({ ...todo, status });
  };

  const onDelete = () => {
    deleteTodo(todo);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={status === "completed"}
        onChange={onUpdate}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={onDelete}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
