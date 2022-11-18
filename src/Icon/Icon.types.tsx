export interface IIconProps {
    icon?: string;
    size?: number;
    color?: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    className?: string;
    fontSize?: number;
    style?: React.CSSProperties;
    isSVGIcon?: boolean;
    title?: string;
  }