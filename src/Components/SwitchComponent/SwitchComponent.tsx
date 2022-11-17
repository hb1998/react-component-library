import React from "react";

import { ISwitchProps } from "./SwitchComponent.types";
import classnames from "../../../node_modules/classnames";
import "./SwitchComponent.css";

export const Switch: React.FC<ISwitchProps> = (props: ISwitchProps) => {
  const onChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLButtonElement;
  };
  const { value, size, label, disabled, error, className } = props;

  const resolvedClassName = classnames(
    "bf-ui-form-switch",
    "form-switch",
    { "is-error": error },
    { disabled: disabled },
    size,
    className
  );

  return (
    <label className={resolvedClassName}>
      {/* IMPORTANT: Known issue with tslint, refer - https://github.com/microsoft/tslint-microsoft-contrib/issues/749 */}
      {/* tslint:disable-next-line:react-a11y-input-elements */}
      <input
        placeholder={label}
        role="checkbox"
        type="checkbox"
        aria-checked={value}
        checked={value}
        disabled={disabled}
        onChange={onChange}
      />
      <i className="form-icon"></i>
      {label && <span>{label}</span>}
    </label>
  );
};

export default Switch