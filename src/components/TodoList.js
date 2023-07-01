import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

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
TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
}
export default TodoList;
