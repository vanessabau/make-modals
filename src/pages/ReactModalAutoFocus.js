import React from "react";
import { ReactModalTs } from "../components/react-modal-ts/react-modal-ts";
import { useModal } from "../components/react-modal-ts/react-modal-utils";

const ReactModalAutoFocus = () => {
  const { isShown, toggle } = useModal();
  return (
    <>
      <div>
        <h1>React Modal with React, FocusLock, and AutoFocus</h1>
      </div>
      <button onClick={toggle}>Toggle</button>
      <br />
      <ReactModalTs
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
export default ReactModalAutoFocus;
