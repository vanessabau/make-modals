import React, { useState } from "react";
import { ReactModalFT } from "../components/react-modal-ft/react-modal-ft";

const ReactModalFocusTrap = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div>
        <h1>React Modal with Focus Trap</h1>
      </div>
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        Toggle
      </button>
      <br />
      <ReactModalFT
        isShown={isOpen}
        hide={() => {
          setOpen(false);
        }}
        onRequestClose={() => {
          setOpen(false);
        }}
        headerText="Confirmation"
        modalContent={
          <div style={{ minWidth: 300 }}>
            Hello world{" "}
            <button onClick={() => console.log("clicked!")}>
              alternate focus
            </button>
          </div>
        }
      />
      <br />
      <a href="https://stackblitz.com/edit/reusable-react-modal-ts?file=index.tsx">
        Inspiration Code
      </a>
    </>
  );
};
export default ReactModalFocusTrap;
