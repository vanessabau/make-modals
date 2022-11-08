import React, { useEffect } from "react";
import FocusLock, { AutoFocusInside } from "react-focus-lock";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./react-modal.css";

const canUseDOM = typeof document !== "undefined";

export const ReactModalFL = ({
  children,
  headerText,
  messages,
  onRequestClose,
  visible,
}) => {
  const setAriaLabel = () => {
    if (headerText) {
      return `setAriaLabel ${headerText}`;
    }
    return "alt label for me";
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 27 && visible) {
      onRequestClose();
    }
  };

  useEffect(() => {
    visible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [visible]);

  if (!visible || !canUseDOM) {
    return null;
  }

  const modal = (
    <>
      <div className="backdrop" onClick={onRequestClose} />
      <FocusLock returnFocus>
        <div
          className="wrapper"
          aria-modal
          aria-label={setAriaLabel}
          aria-labelledby={`Aria and ${headerText}`}
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

            <button>focus me first</button>
          </div>
        </div>
      </FocusLock>
    </>
  );

  ReactModalFL.propTypes = {
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

  ReactModalFL.defaultProps = {
    children: undefined,
    fullScreenMobile: false,
    fullScreen: false,
    onRequestClose: undefined,
    cancelProps: null,
    visible: false,
  };

  return visible ? ReactDOM.createPortal(modal, document.body) : null;
};
