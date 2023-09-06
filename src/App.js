        import React, { useEffect, useState } from "react";
        import { BrowserRouter, Routes, Route } from "react-router-dom";
        import AddTodoForm from "./components/AddTodoForm";
        import TodoList from "./components/TodoList";

        function App() {
          const [todoList, setTodList] = useState([]);
          const [isLoading, setIsLoading] = useState(true);

          const tableName = "Default";
          const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/?sort[0][field]=title&sort[0][direction]=asc`;

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
              const todos = data.records.map((todo) => {
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
          const postTodo = async({title}) =>{
            const airtableData = {
              fields: {
                title: title,
              }
            }
            const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}\\`;
            const options = {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify(airtableData)
            };
            try{
              const response = await fetch(url, options);
              if(!response.ok){
                const message = `Error has occured: ${response.status}`;
                throw new Error(message);
              }
              const data = await response.json();
              const newTodo = {
                title: data.fields.title,
                id: data.id,
              }
              return newTodo;
            }catch(error){
              console.log(error.message);
            }
          }
          useEffect(() => {
            fetchData();
          }, [tableName]);

          useEffect(() => {
            if (!isLoading) {
              localStorage.setItem("savedTodoList", JSON.stringify(todoList));
            }
          }, [todoList, isLoading]);

          const addTodo = async (todo) => {
            const newTodo = await postTodo(todo);
            if(typeof newTodo === "object"){

              setTodList([...todoList, newTodo]);
            }
          };

          const removeTodo = async (id) => {
            const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}\\`;
            const options = {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
              },
            };
            try{
              const response = await fetch(url, options);
              if(!response.ok){
                const message = `Error has occured: ${response.status}`;
                throw new Error(message);
              }
              const data = await response.json();
              if(data.deleted){
                const newList = todoList.filter((item) => item.id !== id);
            setTodList(newList);
              }
            }catch(error){
              console.log(error.message)
            }
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
