import React, { useEffect, useRef } from "react";

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

export default InputWithLabel;
