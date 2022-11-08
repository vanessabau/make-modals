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
          // set "Dialog" as default unless otherwise specified
          initialFocusId="Dialog"
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
          // set "Dialog" as default unless otherwise specified
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
          // set "Dialog" as default unless otherwise specified
          initialFocusId="Dialog"
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
