import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (text) => {
    setTodoList((todos) => [
      ...todos,
      {
        id: uuidv4(),
        text,
        status: "active",
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
  return (
    <TodoListContext.Provider
      value={{ todoList, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
