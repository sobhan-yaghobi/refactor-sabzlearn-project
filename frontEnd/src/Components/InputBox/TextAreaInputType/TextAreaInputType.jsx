import React from "react";

const TextAreaInputType = ({
  onChange,
  focusHandler,
  blurHandler,
  placeholder,
  children,
  value,
  className,
}) => {
  return (
    <>
      <div className="login-form__input-box login-form__textarea-box">
        <textarea
          onChange={(e) => onChange(e)}
          onFocus={(e) => focusHandler(e)}
          onBlur={(e) => blurHandler(e)}
          id="login-form__textarea-input"
          value={value}
          className={`input-box__input login-form__textarea ${className}`}
        ></textarea>
        <span className="input-box__placeholder">
          {placeholder ? placeholder : children}
        </span>
        <i className="input-box__shape"></i>
      </div>
    </>
  );
};

export default TextAreaInputType;