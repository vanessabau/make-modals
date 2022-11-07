import React, { useEffect, useRef } from "react";
import FocusTrap from "focus-trap-react";
import ReactDOM from "react-dom";
import "./react-modal.css";

export const ReactModalFT = ({
  isShown,
  hide = () => {},
  modalContent,
  headerText,
  onRequestClose,
}) => {
  const backdropRef = useRef();

  const escapeKeyClose = (e) => {
    if (e.keyCode === 27 && isShown) {
      console.log(e);
      hide();
    }
  };

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", escapeKeyClose, false);
    return () => {
      document.removeEventListener("keydown", escapeKeyClose, false);
    };
  }, [isShown]);

  const modal = (
    <>
      <div
        className="backdrop"
        ref={backdropRef}
        onClick={(ev) => {
          // If click is directly on container, meaning it's
          // not on the modal or modal content, you've clicked
          // outside of the modal and can close it
          if (ev.target === ev.currentTarget) {
            onRequestClose(ev);
          }
        }}
      />
      <FocusTrap
        focusTrapOptions={{
          allowOutsideClick: true,
          clickOutsideDeactivates: true,
        }}
      >
        <div
          id="Dialog"
          className="wrapper"
          aria-modal="true"
          aria-labelledby={headerText}
          tabIndex={-1}
          role="dialog"
        >
          <div className="styledModal">
            <div className="header">
              <div className="headerText">{headerText}</div>
              <button className="closeButton" onClick={hide}>
                XX
              </button>
            </div>
            <div className="content">{modalContent}</div>
          </div>
        </div>
      </FocusTrap>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
