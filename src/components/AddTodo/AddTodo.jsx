import { useContext, useState } from "react";
import { TodoListContext } from "../../context/TodoListContext";
import styles from "./AddTodo.module.css";

export default function AddTodo() {
  const { addTodo } = useContext(TodoListContext);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    setText(text);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    if (text.trim().length === 0) return;
    addTodo(text);
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={handleAdd}>
      <input
        className={styles.input}
        type="text"
        name="text"
        value={text}
        placeholder="Add Todo"
        onChange={handleChange}
      ></input>
      <button className={styles.button}>Add</button>
    </form>
  );
}
