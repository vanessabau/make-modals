import React from "react";
import { ReactModalFT } from "../components/react-modal-ft/react-modal-ft";
import { useModal } from "../components/react-modal-ft/react-modal-utils";

const ReactModalFocusTrap = () => {
  const { isShown, toggle } = useModal();
  return (
    <>
      <div>
        <h1>React Modal with Focus Trap</h1>
      </div>
      <button onClick={toggle}>Toggle</button>
      <br />
      <ReactModalFT
        isShown={isShown}
        hide={toggle}
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
