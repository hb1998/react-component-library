import { ReactNode } from "react";

export interface IRadioProps {
  name?: string;
  label: string;
  disabled?: boolean;
  value: boolean;
  error?: string | boolean;
  onChange: Function;
  className?: string;
}
