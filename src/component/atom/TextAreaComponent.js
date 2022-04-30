import React from "react";

function TextAreaComponent({
  onChange = () => {},
  className = "",
  placeholder = "Short Discription goes here",
  error = false,
  onBlur = () => {},
  value = "",
}) {
  return (
    <div>
      <textarea
        onChange={onChange}
        className={`${
          error ? "text_area_error" : "text_area_style"
        } ${className}`}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
      ></textarea>
    </div>
  );
}

export default TextAreaComponent;
