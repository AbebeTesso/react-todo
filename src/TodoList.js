import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
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
