import React, { useEffect, useRef } from "react";
import FocusTrap from "focus-trap-react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./react-modal.css";

const canUseDOM = typeof document !== "undefined";

export const ReactModalFT = ({
  children,
  headerText,
  initialFocusId,
  messages,
  onRequestClose,
  visible,
}) => {
  const backdropRef = useRef();

  const escapeKeyClose = (e) => {
    if (e.keyCode === 27 && visible) {
      onRequestClose();
    }
  };

  useEffect(() => {
    visible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", escapeKeyClose, false);
    return () => {
      document.removeEventListener("keydown", escapeKeyClose, false);
    };
  }, [visible]);

  if (!visible || !canUseDOM) {
    return null;
  }

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
          initialFocus: `[id=${initialFocusId}]`,
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
              <button
                className="closeButton"
                onClick={onRequestClose}
                aria-label={messages.close}
              >
                XX
              </button>
            </div>
            <div className="content">{children}</div>
          </div>
        </div>
      </FocusTrap>
    </>
  );

  ReactModalFT.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    cancelProps: PropTypes.object,
    children: PropTypes.node,
    /** CSS classNames applied to modal elements */
    classes: PropTypes.shape({
      modal: PropTypes.string,
      backdrop: PropTypes.string,
      container: PropTypes.string,
      modalContent: PropTypes.string,
    }),
    /** Flag to enable fullscreen styles on mobile and desktop browsers */
    fullScreen: PropTypes.bool,
    /**  Flag to enable fullscreen styles on mobile browsers */
    fullScreenMobile: PropTypes.bool,
    headerText: PropTypes.string,
    /** ID of element which should gain focus on modal open. Defaults to Modal window. */
    initialFocusId: PropTypes.string,
    messages: PropTypes.shape({
      /** Label for the close button */
      close: PropTypes.string.isRequired,
    }).isRequired,
    /** Callback fired when a user attempts to close the modal.
     * Use this to update the `visible` prop. */
    onRequestClose: PropTypes.func,
    /** Flag indicating whether the modal should display or not */
    visible: PropTypes.bool,
  };

  ReactModalFT.defaultProps = {
    children: undefined,
    fullScreenMobile: false,
    fullScreen: false,
    initialFocusId: "Dialog",
    onRequestClose: undefined,
    cancelProps: null,
    visible: false,
  };

  return visible ? ReactDOM.createPortal(modal, document.body) : null;
};
