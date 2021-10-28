import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./modal.scss";

const Backdrop = ({onClick}) => <div className="backdrop" onClick={onClick}></div>;

const ModalCard = (props) => <div className="modal">{props.children}</div>;

const portalElement = document.getElementById("overlays"); // Target Element

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <Backdrop onClick={props.onClick}/>
      <ModalCard>{props.children}</ModalCard>
    </Fragment>,
    portalElement
  );
};

export default Modal;
