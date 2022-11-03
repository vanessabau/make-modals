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
          Modal with <a href="#">with</a> <a href="#">some</a>{" "}
          <a href="#">focusable</a> elements.
          <button onClick={() => setShowModal(false)}>hide modal</button>
        </div>
      </FocusTrap>
    </div>
  );
};

return showModal ? ReactDOM.createPortal(modal, document.body) : null;
