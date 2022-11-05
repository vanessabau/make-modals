import React from "react";
import { ReactModalFTrap } from "../components/react-modal-ftrap/react-modal-ftrap";
import { useModal } from "../components/react-modal-ftrap/react-modal-utils";

const ReactModalFtrap = () => {
  const { isShown, toggle } = useModal();
  return (
    <>
      <div>
        <h1>React Modal with Focus Trap</h1>
      </div>
      <button onClick={toggle}>Toggle</button>
      <br />
      <ReactModalFTrap
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
export default ReactModalFtrap;
