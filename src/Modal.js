import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as moment from 'moment';

// Because only used in Modal, this will be lazy loaded
// with the Modal
console.log(moment)

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
