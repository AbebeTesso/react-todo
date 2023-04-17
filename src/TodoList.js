import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList() {
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
  return (
    <div>
      <ul>
        {todoList.map(function (todo) {
          return <TodoListItem key={todo.id} toDo={todo} />;
        })}
      </ul>
    </div>
  );
}
export default TodoList;
