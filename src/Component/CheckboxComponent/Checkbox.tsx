import React from "react";
import { ICheckboxProps } from "./CheckboxComponent.types";
import "./CheckboxComponent.css";
import classnames from "classnames";

const Checkbox = (props: ICheckboxProps) => {
  const onChange = (e: any) => {
    onChange(e.target.checked);
  };

  const {
    value,
    label,
    disabled,
    className,
    error,
    title
  } = props;

  const resolvedClassName = classnames(
    "bf-ui-form-checkbox",
    "form-checkbox",
    { "is-error": error },
    { disabled: disabled },
    className
  );

  const checkboxLabel = typeof label === "string" ? <span>{label}</span> : label;

  return (
    <label className={resolvedClassName} title={title}>
      {/* IMPORTANT: Known issue with tslint, refer - https://github.com/microsoft/tslint-microsoft-contrib/issues/749 */}
      {/* tslint:disable-next-line:react-a11y-input-elements */}
      <input
        placeholder=""
        type="checkbox"
        role="checkbox"
        checked={value}
        aria-checked={value}
        disabled={disabled}
        onChange={onChange}
      />
      <i className="form-icon"></i>
      {checkboxLabel || null}
    </label>
  )
};

export default Checkbox;

