import React, { useEffect } from "react";
import FocusLock from "react-focus-lock";
import ReactDOM from "react-dom";
import "./react-modal.css";

export const ReactModalTsNoAf = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const onKeyDown = (e) => {
    if (e.keyCode === 27 && isShown) {
      hide();
    }
  };

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);

  const modal = (
    <>
      <div className="backdrop" onClick={hide} />
      <FocusLock returnFocus>
        <div
          className="wrapper"
          aria-modal
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
      </FocusLock>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
