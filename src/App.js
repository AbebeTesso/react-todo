import React from "react";

const todoList = [
  {
    id: 1,
    title: "react project",
  },
  {
    id: 2,
    title: "JavaScript XML",
  },
  {
    id: 3,
    title: "react dove class",
  },
];
function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (list) {
          return <li key={list.id}>{list.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
