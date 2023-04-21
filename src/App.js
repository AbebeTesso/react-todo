import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function useSemiPersistentState() {
  const [todoList, setTodList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodList];
}
function App() {
  const [todoList, setTodList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodList([...todoList, newTodo]);
  };
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
