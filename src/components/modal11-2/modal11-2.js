// This modal is highly based on Jacob's codepen modal found here: https://codesandbox.io/s/modal-template-f69g1v?file=/src/modal.js
// The modal opens and closes, the focus is working yay! but it does not overlay the background.

import React, { useEffect, useRef } from "react";
import cs from "classnames";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react";
// import Icon from "../icons";
// import closeIcon from "../icons/icons/closeIcon";

import styles from "./modal.module.scss";

const canUseDOM = typeof document !== "undefined";

const ModalNew112 = ({
  messages,
  children,
  visible,
  classes,
  onRequestClose,
  cancelProps,
  fullScreenMobile,
  fullScreen,
  modalTriggerRef,
  onClose = {},
}) => {
  const modalRef = useRef();

  const escapeKeyClose = (e) => {
    if (visible && e.keyCode === 27) {
      onClose();
    }
  };

  useEffect(
    () => () => {
      document.removeEventListener("keydown", escapeKeyClose, false);
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    if (visible) {
      document.addEventListener("keydown", escapeKeyClose, false);
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflowY = "";
      document.removeEventListener("keydown", escapeKeyClose, false);
    }
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (modalRef && visible) {
      modalRef.current.focus();
    }
  }, [modalRef, visible]);

  if (!visible || !canUseDOM) {
    return null;
  }

  return (
    <>
      <div className={cs(styles.backdrop, classes.backdrop)} />
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        ref={modalRef}
        data-testid="container"
        id="container"
        className={cs(styles.modalContainer, classes.container, {
          [styles.fullScreenContainer]: fullScreen,
          [styles.fullScreenMobileContainer]: fullScreenMobile,
        })}
        onClick={(ev) => {
          // If click is directly on container, meaning it's
          // not on the modal or modal content, you've clicked
          // outside of the modal and can close it
          if (ev.target === ev.currentTarget) {
            onRequestClose(ev);
          }
        }}
      >
        <FocusTrap
          focusTrapOptions={{
            fallbackFocus: '[data-testid="close"]',
            initialFocus: `[id="Dialog"]`,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
          }}
        >
          <div
            id="Dialog"
            aria-labelledby="DialogName"
            aria-modal="true"
            role="dialog"
            tabIndex="-1"
            className={cs(styles.modal, classes.modal, {
              [styles.fullScreenModal]: fullScreen,
              [styles.fullScreenMobileModal]: fullScreenMobile,
            })}
          >
            <div className="modal_header" role="document">
              <h2 id="DialogName">TITLE</h2>
              <button
                type="button"
                data-testid="close"
                aria-label={messages.close}
                className={styles.closeButton}
                onClick={onRequestClose}
                {...cancelProps}
              >
                XX
                {/* <Icon content={closeIcon} /> */}
              </button>
            </div>

            <div
              className={classes.modalContent}
              id="ElementDetail"
              role="region"
              aria-labelledby="DiaolgName"
            >
              Dialog content: {children}
            </div>
            <div className="modal_footer">
              <button>Cancel</button>
              <button>Save</button>
            </div>
          </div>
        </FocusTrap>
      </div>
    </>
  );
};

ModalNew112.propTypes = {
  messages: PropTypes.shape({
    /** Label for the close button */
    close: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
  /** Flag indicating whether the modal should display or not */
  visible: PropTypes.bool,
  /** CSS classNames applied to modal elements */
  classes: PropTypes.shape({
    modal: PropTypes.string,
    backdrop: PropTypes.string,
    container: PropTypes.string,
    modalContent: PropTypes.string,
  }),
  /** Callback fired when the modal closes */
  onClose: PropTypes.func,
  /** Callback fired when a user attempts to close the modal.
   * Use this to update the `visible` prop. */
  onRequestClose: PropTypes.func,
  /** Element ref for the element that should gain focus when
   * the modal opens. Defaults to the first tabbable element
   * in the modal (the close button, usually).
   */
  openFocusRef: PropTypes.shape({
    current: PropTypes.object,
  }),
  /** Element ref for the element that should gain focus when
   * the modal closes. Defaults to the last focused element
   * (the button you clicked to open the modal, typically).
   */
  closeFocusRef: PropTypes.shape({
    current: PropTypes.object,
  }),
  /** A CSS selector to select your primary page content.
   * This content is hidden from screen readers while the
   * modal is open.
   */
  primaryContentSelector: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  cancelProps: PropTypes.object,
  /** Flag to enable fullscreen styles on mobile and desktop browsers */
  fullScreen: PropTypes.bool,
  /**  Flag to enable fullscreen styles on mobile browsers */
  fullScreenMobile: PropTypes.bool,
  modalTriggerRef: PropTypes.shape({
    current: PropTypes.object,
  }),
};

ModalNew112.defaultProps = {
  children: undefined,
  classes: {},
  fullScreenMobile: false,
  fullScreen: false,
  primaryContentSelector: "body > *",
  openFocusRef: undefined,
  closeFocusRef: undefined,
  onClose: undefined,
  onRequestClose: undefined,
  cancelProps: null,
  visible: false,
  modalTriggerRef: null,
};

export default ModalNew112;
