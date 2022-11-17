import React from "react";
import classnames from "classnames";
import { ISelectProps } from "./SelectComponent.types";
import "./SelectComponent.css";

export const Select: React.FC<ISelectProps> = (props: ISelectProps) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange(event.target.value);
  };
  const onBlur = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onBlur?.(e.target.value);
  };

  const {
    icon,
    value,
    options,
    defaultValue,
    disabled,
    placeholder,
    error,
    title,
    className,
    showTooltip,
  } = props;

  const resolvedClassName = classnames(
    "bf-ui-form-select",
    { "has-icon-left": icon },
    { "is-error": error },
    { disabled: disabled },
    className
  );
  let selectedOption = { label: null, value: null, key: null };
  const optionsElement = (options || []).map((option) => {
    const optionValue = option.value || option.key;
    if (optionValue === value && showTooltip) {
      selectedOption = option;
    }
    return (
      <option
        role="option"
        disabled={option.disabled}
        key={optionValue || "Option_Placeholder"}
        value={optionValue}
        aria-selected={optionValue}
      >
        {option.label}
      </option>
    );
  });
  const label = title || selectedOption.label;
  return (
    <select
      title={label}
      className={resolvedClassName}
      placeholder={placeholder}
      disabled={disabled}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      key={value}
    >
      {placeholder ? (
        <option
          role="option"
          key="_placeholder"
          value={""}
          // aria-selected={optionValue}
        >
          {placeholder}
        </option>
      ) : null}
      {optionsElement}
    </select>
  );
};

export default Select;
