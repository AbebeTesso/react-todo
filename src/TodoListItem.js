import React from "react";

function TodoListItem(props) {
  return (
    <div>
      <li>{props.toDo.title}</li>
    </div>
  );
}

export default TodoListItem;
