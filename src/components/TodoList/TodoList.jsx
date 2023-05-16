import { useContext, useState } from "react";
import { TodoListContext } from "../../context/TodoListContext";
import Todo from "../../components/Todo/Todo";
import AddTodo from "../../components/AddTodo/AddTodo";

export default function TodoList({ filter }) {
  const { todoList } = useContext(TodoListContext);
  const filtered = getFilteredTodos(todoList, filter);
  return (
    <div>
      {filtered.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <AddTodo />
    </div>
  );
}

function getFilteredTodos(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
