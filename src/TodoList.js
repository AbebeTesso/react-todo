import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  const { todoList } = props;
  const { onRemoveTodo } = props;
  return (
    <div>
      <ul>
        {todoList.map(function (todo) {
          return (
            <TodoListItem
              key={todo.id}
              toDo={todo}
              onRemoveTodo={onRemoveTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default TodoList;
