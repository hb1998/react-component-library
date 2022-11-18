export interface ITileProps {
    onClick: (data:React.MouseEvent<HTMLDivElement, MouseEvent>,props:ITileProps) => void;    
    icon?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    primary?: string|boolean;
    secondary?: string|boolean;
    disabled?: boolean;
    className?: string;
  }
