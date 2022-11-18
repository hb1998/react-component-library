import * as React from "react";
import { Component } from "react";
import classnames from "classnames";
import "./Input.css";
import { ITextareaProps } from "./Textarea.types";

const Textarea:React.FC<ITextareaProps> = (props: ITextareaProps) => {

  const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange(e.target.value, e);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    props?.onKeyDown?.(e);
  };

  {
    const { value, disabled, rows, placeholder, error, className, autoFocus } =
      props;

    const resolvedClassName = classnames(
      "bf-ui-form-textarea",
      "form-input",
      "form-textarea",
      { "is-error": error },
      { disabled: disabled },
      className
    );

    return (
      <textarea
        autoFocus={autoFocus}
        disabled={disabled}
        className={resolvedClassName}
        style={props.style}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        rows={rows || 4}
      />
    );
  }
};

export default Textarea;