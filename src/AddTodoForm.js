import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle("");
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title: </label>
        <input
          name="title"
          id="todoTitle"
          type="text"
          value={todoTitle}
          onChange={handleTitleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default AddTodoForm;
