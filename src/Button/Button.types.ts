import { ReactNode } from "react";

export interface IButtonProps {
  className?: string;
  onClick: (data:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;    
  title?: string;
  children?: string|number;
  primary?: string | boolean;
  secondary?: string | boolean;
  disabled?: boolean | boolean;
  size?: string;
  success?: string | boolean;
  error?: string | boolean;
}
