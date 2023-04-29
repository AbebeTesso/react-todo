import React from "react";

function TodoListItem(props) {
  const {
    toDo: { title, id },
  } = props;
  const { onRemoveTodo } = props;
  return (
    <div>
      <li>
        {title}
        {
          <button type="button" onClick={() => onRemoveTodo(id)}>
            Remove
          </button>
        }
      </li>
    </div>
  );
}

export default TodoListItem;
