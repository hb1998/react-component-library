import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import {IIconProps} from './Icon.types'

const Icon:React.FC<IIconProps> = ( props:IIconProps ) => {
    const {
      icon,
      size,
      color,
      className,
      onClick,
      style,
      isSVGIcon,
      title
    } = props;

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


export default Icon;