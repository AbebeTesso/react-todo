import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function InputWithLabel({
  id,
  name,
  type = "text",
  value,
  onInputChange,
  placeholder,
  children,
  autoFocus,
}) {
  const inputRef = useRef();

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  });
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef}
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
}
InputWithLabel.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  children: PropTypes.object,
  autoFocus: PropTypes.bool,

}
export default InputWithLabel;
