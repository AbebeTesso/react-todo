import React from "react";

function TodoListItem(props) {
  const {
    toDo: { title },
  } = props;
  return (
    <div>
      <li>{title}</li>
    </div>
  );
}

export default TodoListItem;
