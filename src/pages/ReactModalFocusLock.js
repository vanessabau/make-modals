import React, { useState } from "react";
import { AutoFocusInside } from "react-focus-lock";
import { ReactModalFL } from "../components/react-modal-fl/react-modal-fl";

const ReactModalFocusLock = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  return (
    <div>
      <h1>React Modal using Focus Lock</h1>
      <section>
        <h2>Focus defaults to modal window</h2>
        <button
          onClick={() => {
            setOpen2(!isOpen2);
          }}
        >
          Toggle
        </button>
        <br />
        <ReactModalFL
          messages={{ close: "Close" }}
          visible={isOpen2}
          onRequestClose={() => {
            setOpen2(false);
          }}
          headerText="Regular Focus"
          children={
            <div style={{ minWidth: 300 }}>
              Hello world{" "}
              <button onClick={() => console.log("clicked!")}>button</button>
            </div>
          }
        />
      </section>
      <br />
      <hr />
      <section>
        <h2>
          <code>AutoFocusInside</code> wrapped around the button
        </h2>
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
          headerText="Focus button first"
          children={
            <div style={{ minWidth: 300 }}>
              Hello world{" "}
              <AutoFocusInside>
                <button onClick={() => console.log("clicked!")}>
                  focus me first
                </button>
              </AutoFocusInside>
            </div>
          }
        />
      </section>
      <br />
      <hr />
      <a href="https://stackblitz.com/edit/reusable-react-modal-ts?file=index.tsx">
        Inspiration Code
      </a>
    </div>
  );
};
export default ReactModalFocusLock;
