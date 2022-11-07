import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
//import styles from './modal.module.scss';

const NewModal = ({ visible, openFocusRef, closeFocusRef }) => {
  //console.log(visible);

  const modalRef = useRef();
  // console.log(document.activeElement);
  // console.log('modalRef?: ' + modalRef.current);

  return (
    <>
      <div id="Overlay"></div>
      <FocusTrap>
        <div id="container" ref={modalRef}>
          <div
            id="Dialog"
            aria-labelledby="DialogName"
            role="dialog"
            tabIndex="-1"
            hidden={!visible}
          >
            <div className="modal_header" role="document">
              <h2 id="DialogName">TITLE</h2>
              <button type="button" id="Dialog">
                X
              </button>
            </div>

            <div
              className="modal_body"
              id="ElementDetail"
              role="region"
              aria-labelledby="DialogName"
            >
              This is the dialog content
            </div>

            <div className="modal_footer">
              <button>Cancel</button>
              <button>Save</button>
            </div>
          </div>
        </div>
      </FocusTrap>
    </>
  );
};

NewModal.propTypes = {
  /** Flag indicating whether the modal should display or not */
  visible: PropTypes.bool,
};

NewModal.defaultProps = {
  visible: false,
};

export default NewModal;
