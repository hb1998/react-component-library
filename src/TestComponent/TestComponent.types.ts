import { ReactNode } from "react";

export interface TestComponentProps {
  heading: string;
  content: ReactNode;
}


export interface IButtonProps {
  className?: string;
  onClick?: Function;
  title?: string;
  children?: string|number;
  primary?: string | boolean;
  secondary?: string | boolean;
  disabled?: boolean | boolean;
  size?: string;
  success?: string | boolean;
  error?: string | boolean;
}
