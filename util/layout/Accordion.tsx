import * as React from "react";
import { Component } from "react";
import classnames from "classnames";
import { Flex } from "./Flex";
import { Icon } from "../elements/Icon";
import { Input } from "../forms/Input";
import "../../../css/Accordion.css";

interface IAccordionProps {
  title: string;
  active: boolean;
  children: any;
  actions: any;
  className?: string;
  onChange: Function;
  isEditTitle?: boolean;
  onTitleChange?: Function;
  autoComplete?: string;
}

export const Accordion = (props) => {
  const { className } = props;

  const resolvedClassName = classnames(
    "bf-ui-accordion",
    "accordion",
    className || ""
  );

  return <div className={resolvedClassName}>{props.children}</div>;
};

export class AccordionItem extends Component<IAccordionProps> {
  constructor(props) {
    super(props);
    this.onActionClick = this.onActionClick.bind(this);
    this.onHeaderClick = this.onHeaderClick.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  static defaultProps = {
    actions: [],
  };

  onActionClick = (onClick) => (e) => {
    e.stopPropagation();

    if (onClick) {
      onClick();
    }
  };

  onHeaderClick(e) {
    e.stopPropagation();
    e.preventDefault();
    const { active, onChange } = this.props;
    if (onChange) {
      onChange(!active);
    }
  }

  onTitleChange(e) {
    const { onTitleChange } = this.props;
    if (onTitleChange) {
      onTitleChange(e);
    }
  }

  render() {
    const {
      active,
      title,
      children,
      actions,
      className,
      isEditTitle,
      autoComplete,
    } = this.props;

    const resolvedClassName = classnames(
      "bf-ui-accordion-item",
      "accordion-item",
      className
    );
    const icon = active ? "ChevronDown" : "ChevronRight";
    return (
      <div className={resolvedClassName}>
        <div
          role="link"
          className="accordion-header"
          onClick={this.onHeaderClick}
        >
          <Flex
            flexDirection="row"
            alignItems="center"
            className="accordion-title"
          >
            <Icon className="accordion-toggle-icon" icon={icon} size={14} />
            {isEditTitle ? (
              <Input
                className="accordion-title"
                value={title}
                autoComplete={autoComplete}
                onChange={this.onTitleChange}
              />
            ) : (
              <h3>{title || "(title)"}</h3>
            )}
          </Flex>
          <Flex alignItems="center" className="accordion-action">
            {actions.map((action, index) => (
              <div key={index}>
                <button
                  role="button"
                  key={index}
                  className="btn"
                  title={action.title}
                  onClick={this.onActionClick(action.onClick)}
                >
                  {action.label}
                </button>
              </div>
            ))}
          </Flex>
        </div>
        {active && <div className="accordion-body">{children}</div>}
      </div>
    );
  }
}
