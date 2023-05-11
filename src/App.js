import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const promise = new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve({ data: { todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [] } })
      }, 2000);
    });
    promise.then(function (result) {
      setTodList(result.data.todoList);
      setIsLoading(false);
    })
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodList(newList);
  };
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (<p>Loading...</p>) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;
