import React from "react";
import { IRadioProps } from "./RadioComponent.types";
import "./RadioComponent.css";
import classnames from "classnames";

const Radio:React.FC<IRadioProps> = (props:IRadioProps)=>{
  const onChange = (event: React.ChangeEvent) => {
    const target= event.target as
    HTMLButtonElement;
  }

  const { name, label, disabled, value, error, className } = props;

  const resolvedClassName = classnames(
    'bf-ui-form-radio',
    'form-radio',
    { 'is-error': error },
    { 'disabled': disabled },
    className,
  );
 
  return (
    <label className={resolvedClassName}>
      {/* IMPORTANT: Known issue with tslint, refer - https://github.com/microsoft/tslint-microsoft-contrib/issues/749 */}
      {/* tslint:disable-next-line:react-a11y-input-elements */}
      <input
        placeholder={label}
        role="radio"
        name={name}
        type="radio"
        disabled={disabled}
        checked={value}
        aria-checked={value}
        onChange={onChange}
      />
      <i className="form-icon"></i>
      {label && <span>{label}</span>}
    </label>
  )
};

export default Radio;

