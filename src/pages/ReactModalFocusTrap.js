import React, { useState } from "react";
import { ReactModalFT } from "../components/react-modal-ft/react-modal-ft";

const ReactModalFocusTrap = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  return (
    <>
      <div>
        <h1>React Modal with Focus Trap</h1>
      </div>
      <section id="section1">
        <h2>Focus defaults to modal window</h2>
        <p>
          Focus should land on modal window on open. Voice over should announce
          header and element: "Welcome modal, dialog".
        </p>
        <button
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          Toggle
        </button>
        <br />
        <ReactModalFT
          visible={isOpen}
          messages={{ close: "Close" }}
          onRequestClose={() => {
            setOpen(false);
          }}
          headerText="Welcome Modal"
          children={
            <div style={{ minWidth: 300 }}>
              Hello world{" "}
              <button onClick={() => console.log("clicked!")}>click</button>
            </div>
          }
        />
      </section>
      <br />
      <hr />
      <section id="section2">
        <h2>Focus goes to the inner button</h2>
        <p>
          Focus should go to inner button. Voice over should announce header and
          element: "Welcome, dialog".
        </p>
        <button
          onClick={() => {
            setOpen2(!isOpen2);
          }}
        >
          Toggle
        </button>
        <br />
        <ReactModalFT
          visible={isOpen2}
          messages={{ close: "Close" }}
          onRequestClose={() => {
            setOpen2(false);
          }}
          headerText="Welcome"
          // "Dialog" set as default gives modal window focus unless this prop is changed
          initialFocusId="focus-me-first"
          children={
            <div style={{ minWidth: 300 }}>
              Hello world{" "}
              <button
                id="focus-me-first"
                onClick={() => console.log("clicked!")}
              >
                focus me first
              </button>
            </div>
          }
        />
      </section>
      <br />
      <hr />
      <section id="section3">
        <h2>No header text</h2>
        <p>
          Focus should got the modal window. With no header voice over should
          announce aria-label and element: "Hello title, dialog".
        </p>
        <button
          onClick={() => {
            setOpen3(!isOpen3);
          }}
        >
          Toggle
        </button>
        <br />
        <ReactModalFT
          visible={isOpen3}
          messages={{ close: "Close" }}
          onRequestClose={() => {
            setOpen3(false);
          }}
          children={
            <div style={{ minWidth: 300 }}>
              Hello world{" "}
              <button onClick={() => console.log("clicked!")}>click</button>
            </div>
          }
        />
      </section>
      <br />
      <hr />
      <a href="https://www.npmjs.com/package/focus-trap-react">
        Focus Trap React
      </a>
      <br />
      <a href="https://stackblitz.com/edit/reusable-react-modal-ts?file=index.tsx">
        Inspiration Code
      </a>
      <br />
      <a href="https://github.com/vanessabau/make-modals/tree/master/src/components/react-modal-ft">
        Code on Github
      </a>
    </>
  );
};
export default ReactModalFocusTrap;
