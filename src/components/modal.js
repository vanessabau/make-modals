import React, { useState } from "react";

import FocusTrap from "focus-trap-react";

const ModalWithReactDOM = () => {
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

export default ModalWithReactDOM;
