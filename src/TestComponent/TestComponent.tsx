import React from "react";
import { IButtonProps } from "./TestComponent.types";
import "./TestComponent.scss";
import classnames from "classnames";

function Button(props:IButtonProps) {

  const {disabled,onClick} = props;
  
  const onClickAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled) {
      return ;
    }
    onClick(e);
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

Button.defaultProps = {
  onClick: () => {}
}; 


export default Button