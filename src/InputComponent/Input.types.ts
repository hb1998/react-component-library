import { ReactNode } from "react";

export interface IProps {
  onBlur(arg0: string | number): unknown;
  icon?: string;
  value?: string | number;
  disabled?: boolean;
  autoFocus?: boolean;
  type?: string;
  placeholder?: string;
  error?: boolean;
  className?: string;
  min?: number;
  max?: number;
  maxLength?: number;
  onChange?: (data: string | number) => void
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  title?: string;
  autoComplete?: string;
  heading: string;
  content: ReactNode;
}
