import React, { useState } from "react";
import { AutoFocusInside } from "react-focus-lock";
import { ReactModalFL } from "../components/react-modal-fl/react-modal-fl";

const ReactModalFocusLock = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);

  return (
    <div>
      <h1>React Modal using Focus Lock</h1>
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
        <ReactModalFL
          messages={{ close: "Close button" }}
          visible={isOpen}
          onRequestClose={() => {
            setOpen(false);
          }}
          headerText="Regular Focus"
          children={
            <div style={{ minWidth: 300 }}>
              Hello world{" "}
              <button onClick={() => console.log("clicked!")}>click me</button>
            </div>
          }
        />
      </section>
      <br />
      <hr />
      <section id={"section2"}>
        <h2>
          <code>AutoFocusInside</code> focuses inner button
        </h2>
        <button
          onClick={() => {
            setOpen2(!isOpen2);
          }}
        >
          Toggle
        </button>
        <br />
        <ReactModalFL
          messages={{ close: "Close button" }}
          visible={isOpen2}
          onRequestClose={() => {
            setOpen2(false);
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
        <ReactModalFL
          messages={{ close: "Close button" }}
          visible={isOpen3}
          onRequestClose={() => {
            setOpen3(false);
          }}
          children={
            <div style={{ minWidth: 300 }}>
              Hello world{" "}
              <button onClick={() => console.log("clicked!")}>click me</button>
            </div>
          }
        />
      </section>
      <br />
      <hr />
      <a href="https://www.npmjs.com/package/react-focus-lock">
        React Focus Lock
      </a>
      <br />
      <a href="https://stackblitz.com/edit/reusable-react-modal-ts?file=index.tsx">
        Inspiration Code
      </a>
      <br />
      <a href="https://github.com/vanessabau/make-modals/tree/master/src/components/react-modal-fl">
        Code on Github
      </a>
    </div>
  );
};
export default ReactModalFocusLock;
