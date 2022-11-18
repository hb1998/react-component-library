import React, { ReactNode, useEffect } from 'react'
import classnames from "classnames";
import "./Input.css";
import { IProps } from './Input.types';

const Input: React.FC<IProps> = (props: IProps) => {
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef()

  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focus?.();
    }, 0);
  }, [props.autoFocus])

  const onChange = (e: any) => {
    const { type } = props;

    if (type == "number") {
      props.onChange(e.target.value ? parseFloat(e.target.value) : "");
    }

    props.onChange(e.target.value)
  };

  const onBlur = (e: { target: { value: string; }; }) => {
    const { type } = props;

    if (type == "number") {
      props.onBlur(e.target.value ? parseFloat(e.target.value) : "");
    }

    props.onBlur(e.target.value);
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
      onChange={onChange}
      onBlur={onBlur}
      step="any"
      autoComplete={autoComplete}
    />
  );
}

export default Input