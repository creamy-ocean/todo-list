import "./App.css";
import { useState } from "react";
import { TodoListProvider } from "./context/TodoListContext";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <TodoListProvider>
      <div className="todo-box">
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </div>
    </TodoListProvider>
  );
}

export default App;
