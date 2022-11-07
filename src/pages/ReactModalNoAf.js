import React from "react";
import { ReactModalFL } from "../components/react-modal-fl/react-modal-fl";
import { useModal } from "../components/react-modal-fl/react-modal-utils";

const ReactModalNoAf = () => {
  const { isShown, toggle } = useModal();
  return (
    <div>
      <h1>
        React Modal using Focus Lock and no <code>AutoFocusInside</code>
      </h1>
      <h2>Notes</h2>
      <button onClick={toggle}>Toggle</button>
      <br />
      <ReactModalFL
        messages={{ close: "Close" }}
        isShown={isShown}
        hide={toggle}
        headerText="Title text"
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
    </div>
  );
};
export default ReactModalNoAf;
