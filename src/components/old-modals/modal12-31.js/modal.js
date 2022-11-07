import React, { useState } from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";

export const ModalWithReactDOM = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div id="demo">
      <button onClick={() => setShowModal(true)}>show modal</button>

      <FocusTrap active={showModal}>
        <div id="modal">
          Modal with <a href="src/components/old-modals/modal12-31.js/modal#">with</a> <a href="src/components/old-modals/modal12-31.js/modal#">some</a>{" "}
          <a href="src/components/old-modals/modal12-31.js/modal#">focusable</a> elements.
          <button onClick={() => setShowModal(false)}>hide modal</button>
        </div>
      </FocusTrap>
    </div>
  );
};

return showModal ? ReactDOM.createPortal(modal, document.body) : null;
