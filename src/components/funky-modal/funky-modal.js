import React from "react";
import FocusTrap from "focus-trap-react";
import "./modal.css";

const Modal = () => {
  const openDialog = (e) => {
    console.log(e.currentTarget.id, e.currentTarget.name);
  };
  return (
    <>
      <button id="focusDialog" name="DialogFocusId" onClick={openDialog}>
        I am a button
      </button>

      <FocusTrap>
        <div
          id="Dialog"
          aria-labelledby="DialogName"
          role="dialog"
          tabIndex="-1"
          hidden
        >
          <div role="document">
            <h2 id="DialogName" tabIndex="-1">
              TITLE-FRANK
            </h2>
            <button type="button" id="DialogClose">
              Close
            </button>

            <div
              id="ElementDetail"
              tabIndex="-1"
              role="region"
              aria-labelledby="DialogName"
            >
              <p>SOME COPY</p>
              <button id="close-modal"> close modal</button>
            </div>
          </div>
        </div>
      </FocusTrap>
      <div id="Overlay"></div>
    </>
  );
};

export default Modal;
