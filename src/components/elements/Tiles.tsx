import * as React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import { Icon } from "./Icon";
import "../../../css/Tile.css";

interface ITileProps {
    onClick: Function;
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    primary: string;
    secondary: string;
    disabled: boolean;
    className: string;
  }


  const Tiles = (props:ITileProps) => {

    const onTileClick = (e)  => {
        const { onClick } = props;
        if (onClick) {
          onClick(e, props);
        }
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
        <div role="link" className={resolvedClassName} onClick={onTileClick}>
        <div className="flex-container">
          <Icon className="tile-icon" icon={icon} size={24} />
          <div className="text-container">
            <div className="tile-title">{title}</div>
            <div className="tile-desc">{subtitle || description}</div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Tiles