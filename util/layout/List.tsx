import * as React from "react";
import { Component } from "react";
import classnames from "classnames";
import { Icon } from "../elements/Icon";
import "../../../css/List.css";

interface IListProps {
  icon?: string;
  title?: JSX.Element | string;
  subtitle?: string;
  actions: any;
  color?: string;
  className?: string;
  onClick: Function;
  key: any;
  checkBoxactions?: any;
  tooltip?: string;
}

export const List = (props) => {
  const { className } = props;

  const resolvedClassName = classnames("bf-ui-list", "list", className);

  return <div className={resolvedClassName}>{props.children}</div>;
};

export class ListItem extends Component<IListProps> {
  constructor(props) {
    super(props);
    this.onActionClick = this.onActionClick.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
  }

  static defaultProps = {
    actions: [],
    onClick: () => {},
    checkBoxactions: [],
  };

  onActionClick = (onClick) => (e) => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  };

  onItemClick(e) {
    const { onClick, key } = this.props;
    if (onClick) {
      onClick(key, this.props);
    }
  }

  render() {
    const {
      icon,
      title,
      subtitle,
      actions,
      color,
      className,
      checkBoxactions,
      tooltip,
    } = this.props;

    const resolvedClassName = classnames(
      "bf-ui-list-item",
      "list-item",
      className
    );
    const listStyle = color ? { backgroundColor: color } : null;
    return (
      <div
        role="link"
        className={resolvedClassName}
        onClick={this.onItemClick}
        title={tooltip}
      >
        <div className="list-action">
          {checkBoxactions.map((action, index) => (
            <button
              key={index}
              className="btn"
              title={action.title}
              onClick={this.onActionClick(action.onClick)}
            >
              {action.label}
            </button>
          ))}
        </div>
        <div className="list-content">
          {icon && (
            <div className="list-icon" style={listStyle}>
              <Icon icon={icon} size={14} color="#FFFFFF" />
            </div>
          )}
          <div className="list-header">
            <div className="list-title">{title}</div>
            <small className="list-subtitle text-gray">{subtitle}</small>
          </div>
        </div>
        <div className="list-action">
          {actions.map((action, index) => (
            <button
              role="button"
              key={index}
              className="btn"
              title={action.title}
              onClick={this.onActionClick(action.onClick)}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
