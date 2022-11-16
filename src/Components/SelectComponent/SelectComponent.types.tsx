
export interface ISelectProps {
  [x: string]: any;
  onChange?: any;
  // onChange?: (data:string|number|undefined)=>void;
  icon?: string;
  value?: any;
  showTooltip?: boolean;
  title?: any;
  options?: any[];
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  defaultValue?: any;
  // onChange: Function;
  className?: string;
}
