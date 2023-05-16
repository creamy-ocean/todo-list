import { useContext, useState } from "react";
import { TodoListContext } from "../../context/TodoListContext";

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
    <form onSubmit={handleAdd}>
      <div className="add-todo-box">
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Add Todo"
          onChange={handleChange}
        ></input>
        <button>Add</button>
      </div>
    </form>
  );
}
