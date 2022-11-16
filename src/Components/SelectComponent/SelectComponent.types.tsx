
export interface ISelectProps {
  onBlur(value: any): unknown;
  onChange: (data:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void ;
  // onChange?: (data:string|number|undefined)=>void;
  // onChange: Function;
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
