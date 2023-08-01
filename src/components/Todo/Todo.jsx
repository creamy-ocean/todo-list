import { BsFillTrashFill } from "react-icons/bs";
import { TodoListContext } from "../../context/TodoListContext";
import React, { useContext } from "react";
import styles from "./Todo.module.css";

export default function Todo({ todo }) {
  const { updateTodo, deleteTodo } = useContext(TodoListContext);

  const { id, text, status } = todo;

  const onUpdate = (event) => {
    const status = event.target.checked ? "완료" : "미완료";
    updateTodo({ ...todo, status });
  };

  const onDelete = () => {
    deleteTodo(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        id={id}
        className={styles.checkbox}
        type="checkbox"
        checked={status === "완료"}
        onChange={onUpdate}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={onDelete} className={styles.button}>
          <BsFillTrashFill />
        </button>
      </span>
    </li>
  );
}
