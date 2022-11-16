import React from "react";
import { IButtonProps } from "./Button.types";
import "./Button.css";
import classnames from "classnames";

function Button(props: IButtonProps) {
  const { disabled } = props;
  const onClickAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (disabled) {
      return;
    }
    props.onClick(e);
  };

  const {
    className,
    title,
    children,
    primary,
    secondary,
    size,
    success,
    error,
  } = props;

  const resolvedClassName = classnames(
    "btn",
    "bf-ui-button",
    { "btn-primary": primary },
    { "btn-secondary": secondary },
    { "btn-disabled": disabled },
    { "btn-success": success },
    { "btn-error": error },
    { "btn-lg": size === "lg" },
    { "btn-sm": size === "sm" },
    className
  );

  return (
    <button
      title={title || ""}
      className={resolvedClassName}
      onClick={onClickAction}
    >
      {children}
    </button>
  );
}



export default Button;
