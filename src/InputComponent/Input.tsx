import React, {ReactNode, useEffect } from 'react'
import classnames from "classnames";
import "./Input.css";
import { IProps } from './Input.types';

const Input = (props: IProps) => {
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef()

  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focus?.();
    }, 0);
  }, [props.autoFocus])


  const onEventChange = (e: { target: { value: string; }; }) => {
    const { type } = props;

    if (type == "number") {
      props.onChange(e.target.value ? parseFloat(e.target.value) : "");
      return;
    }

    props.onChange(e.target.value);
    return;
  };

  const onEventBlur = (e: { target: { value: string; }; }) => {
    const { type } = props;

    if (type == "number") {
      props.onBlur(e.target.value ? parseFloat(e.target.value) : "");
      return;
    }

    props.onBlur(e.target.value);
    return;
  };
  const {
    icon,
    value,
    disabled,
    type,
    placeholder,
    error,
    className,
    min,
    max,
    maxLength,
    onKeyPress,
    autoComplete,
    title,
  } = props;

  const resolvedClassName = classnames(
    "bf-ui-form-input",
    "form-input",
    { "has-icon-left": icon },
    { "is-error": error },
    { disabled: disabled },
    className
  );

  return (
    <input
      ref={inputRef}
      title={title}
      className={resolvedClassName}
      type={type || "text"}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      min={min}
      max={max}
      maxLength={maxLength}
      onKeyDown={onKeyPress}
      onChange={onEventChange}
      onBlur={onEventBlur}
      step="any"
      autoComplete={autoComplete}
    />
  );
}

export default Input