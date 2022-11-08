import React, { useState } from "react";
import { AutoFocusInside } from "react-focus-lock";
import { ReactModalFL } from "../components/react-modal-fl/react-modal-fl";

const ReactModalFocusLock = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <h1>
        React Modal using Focus Lock and <code>AutoFocusInside</code>
      </h1>
      <h2>Notes</h2>
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        Toggle
      </button>
      <br />
      <ReactModalFL
        messages={{ close: "Close" }}
        visible={isOpen}
        onRequestClose={() => {
          setOpen(false);
        }}
        headerText="Title text"
        children={
          <div style={{ minWidth: 300 }}>
            Hello world{" "}
            <AutoFocusInside>
              <button onClick={() => console.log("clicked!")}>
                alternate focus
              </button>
            </AutoFocusInside>
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
export default ReactModalFocusLock;
