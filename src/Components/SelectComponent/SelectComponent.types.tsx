export interface ISelectProps {
  onBlur?: (value:string)=>void
  onChange:(value:string)=>void
  icon?: string;
  value?: any;
  showTooltip?: boolean;
  title?: any;
  options?: any[];
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  defaultValue?: any;
  className?: string;
}
