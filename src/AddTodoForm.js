import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

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
        <InputWithLabel
          autoFocus={true}
          name="title"
          id="todoTitle"
          type="text"
          placeholder="Type here"
          value={todoTitle}
          onInputChange={handleTitleChange}
        >
          <strong>Title:</strong>
        </InputWithLabel>

        <button>Add</button>
      </form>
    </div>
  );
}
export default AddTodoForm;
