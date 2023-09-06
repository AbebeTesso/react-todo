import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./TodoListItem.module.css"
import PropTypes from "prop-types";

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
    });
    setTodoTitle("");
  };
  return (
    <div className={styles.forms}>
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

        <button className={styles.add}> + </button>
      </form>
    </div>
  );
}
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
}
export default AddTodoForm;
