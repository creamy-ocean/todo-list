import { useContext } from "react";
import { TodoListContext } from "../../context/TodoListContext";
import Todo from "../../components/Todo/Todo";
import AddTodo from "../../components/AddTodo/AddTodo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const { todoList } = useContext(TodoListContext);
  const filtered = getFilteredTodos(todoList, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      <AddTodo />
    </section>
  );
}

function getFilteredTodos(todos, filter) {
  if (filter === "전체") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
