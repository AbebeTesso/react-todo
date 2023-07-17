  import React, { useEffect, useState } from "react";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import AddTodoForm from "./components/AddTodoForm";
  import TodoList from "./components/TodoList";

  function App() {
    const [todoList, setTodList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    async function fetchData() {
      const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
      };
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }
        const data = await response.json();
       
        const sortData = data.records.sort((objectA, objectB)=>{
            if(objectA.fields.title < objectB.fields.title){
              return -1;
            }else if(objectA.fields.title === objectB.fields.title){
              return 0;
            }else{
              return 1;
            }
        })
        const todos = sortData.map((todo) => {
          const newTodo = {
            title: todo.fields.title,
            id: todo.id,
          };
          
          return newTodo;
        });
        setTodList(todos);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }
    useEffect(() => {
      fetchData();
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
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1>Todo List</h1>
                  <AddTodoForm onAddTodo={addTodo} />
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                  )}
                </div>
              }
            />
            <Route path="/new" element={<h1>New Todo List</h1>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

  export default App;
