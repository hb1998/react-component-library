import { ReactNode } from "react";

export interface ICheckboxProps {
  value: boolean;
  onChange?: (value: boolean) => void;
  label?: string | JSX.Element;
  disabled?: boolean;
  className?: string;
  error?: string | boolean;
  title?: string;
}
