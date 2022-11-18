import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import  Icon  from "../Icon/Icon";
import "./Tile.css";
import {ITileProps} from './Tile.types'
import '../Base.css'

export const Tile:React.FC<ITileProps> = (props:ITileProps) =>{
      const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          props.onClick(e,props);
      }

    const {
        icon,
        title,
        subtitle,
        description,
        primary,
        secondary,
        disabled,
        className
      } = props;

    const resolvedClassName = classnames(
        "tile",
        "bf-ui-tile",
        { "tile-primary": primary },
        { "tile-secondary": secondary },
        { "tile-disabled": disabled },
        className
      );
  
      return (
        <div role="link" className={resolvedClassName} onClick={onClick}>
          <div className="flex-container">
            <Icon className="tile-icon" icon={icon} size={24} onClick={() => { }}/>
            <div className="text-container">
              <div className="tile-title">{title}</div>
              <div className="tile-desc">{subtitle || description}</div>
            </div>
          </div>
        </div>
      );
}