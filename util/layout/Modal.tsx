import  * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";
import classnames from "classnames";
import { Flex } from "../layout/Flex";
import { Icon } from "../elements/Icon";
import "../../../css/Modal.css";

interface IModalContainerProps{
    open:boolean
    onClose:any
    title:string
    size:string
    children:any
    className:string
    onClick:Function
    renderToElement:any
}

export class Modal extends Component <IModalContainerProps>{
  renderModal() {
    const {
      open,
      onClose,
      title,
      size,
      children,
      className
    } = this.props;

    const resolvedClassName = classnames(
      "bf-ui-modal",
      "modal",
      { "modal-sm": size === "sm" },
      { "modal-lg": size === "lg" },
      { active: open },
      className
    );

    return (
      <div className={resolvedClassName}>
        <div className="modal-overlay" />
        <div className="modal-container">
          <div className="modal-header">
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                <h4>{title}</h4>
              </Flex>
              <button
                onClick={onClose}
                aria-label="Close"
                className="btn-close"
              >
                <Icon icon="Cancel" fontSize={12} />
              </button>
            </Flex>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    );
  }

  render() {
    let { renderToElement } = this.props;

    if (!renderToElement) {
      renderToElement = document.querySelector("#modal-root") ||
      document.querySelector("body");
    }

    const renderedModal = this.renderModal();
    return ReactDOM.createPortal(renderedModal, renderToElement);
  }
}
