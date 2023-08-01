import { v4 as uuidv4 } from "uuid";
import { createContext, useEffect, useState } from "react";

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useState(readTodosFromLocalStorage);
  const addTodo = (text) => {
    setTodoList((todos) => [
      ...todos,
      {
        id: uuidv4(),
        text,
        status: "미완료",
      },
    ]);
  };
  const updateTodo = (updated) => {
    const changedTodos = todoList.map((todo) =>
      todo.id === updated.id ? updated : todo
    );
    setTodoList(changedTodos);
  };
  const deleteTodo = (deleted) => {
    const todos = todoList.filter((todo) => todo.id !== deleted.id);
    setTodoList(todos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoListContext.Provider
      value={{ todoList, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
