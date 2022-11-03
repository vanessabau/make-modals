import React from "react";
import { ReactModalTsNoAf } from "../components/react-modal-ts-no-af/react-modal-ts-noaf";
import { useModal } from "../components/react-modal-ts-no-af/react-modal-utils";

const ReactModalNoAf = () => {
  const { isShown, toggle } = useModal();
  return (
    <>
      <div>
        <h1>React Modal with React, FocusLock, NO AutoFocus</h1>
      </div>
      <button onClick={toggle}>Toggle</button>
      <br />
      <ReactModalTsNoAf
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
      <br />
      <a href="https://github.com/vanessabau/make-modals/blob/master/src/components/react-modal-ts-no-af/react-modal-ts-noaf.js">
        Actual Code (Github)
      </a>
      <br />
    </>
  );
};
export default ReactModalNoAf;
