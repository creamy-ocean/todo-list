import "./App.css";
import { useState } from "react";
import { TodoListProvider } from "./context/TodoListContext";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["전체", "미완료", "완료"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <TodoListProvider>
      <DarkModeProvider>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </TodoListProvider>
  );
}

export default App;
