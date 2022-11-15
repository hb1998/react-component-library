import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';

interface IIconProps {
  icon?: string;
  size?: number;
  color?: string;
  onClick?: any;
  className?: string;
  fontSize?: number;
  style?: any;
  isSVGIcon?: boolean;
  title?: string;
}

export class Icon extends Component <IIconProps> {
  constructor(props) {
    super(props);
  }
  
  static defaultProps = {
      size: 14,
      style: {}
  };

  render() {
    const {
      icon,
      size,
      color,
      className,
      onClick,
      style,
      isSVGIcon,
      title
    } = this.props;

    const resolvedClassName = classnames(
      'icon',
      `icon--${icon}`,
      `icons8-${icon}`,
      className,
    );

    let linkClassName;
    if (isSVGIcon) {
        linkClassName = icon;
    } else {
        linkClassName = resolvedClassName;
    }
    return (
      <i role="link"
        title={title}
        style={{ fontSize: size, color, ...style }} 
        className={linkClassName}
        onClick={onClick}
      />
    );
  }
}
