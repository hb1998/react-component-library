export interface ITileProps {
    onClick?: (data:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;    
    icon?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    primary?: string|boolean;
    secondary?: string|boolean;
    disabled?: boolean;
    className?: string;
  }
