import React from "react";
import style from "./TodoListItem.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types";

function TodoListItem(props) {
  const {
    toDo: { title, id },
  } = props;
  const { onRemoveTodo } = props;
  return (
    <div>
      <li className={style.ListItem}>
        {title}
        {
          <button className={style.btn} type="button" onClick={() => onRemoveTodo(id)}>
            <FontAwesomeIcon icon={faTrash}/>
          </button>
        }
      </li>
    </div>
  );
}
TodoListItem.propTypes = {
  toDo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
}
export default TodoListItem;
