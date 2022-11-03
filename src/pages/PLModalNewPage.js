import React, { useState, useRef } from "react";
import ModalNew112 from "../components/modal11-2/modal11-2";

const PLModalNewPage = () => {
  const [isOpen, setOpen] = useState(false);
  const modalTriggerRef = useRef();

  return (
    <>
      <div>
        <h1>React Modal with React, FocusLock, and AutoFocus</h1>
      </div>
      <button
        ref={modalTriggerRef}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        Toggle
      </button>
      <br />
      <ModalNew112
        trigger={modalTriggerRef}
        aria-label="Pattern library demo"
        messages={{ close: "Close" }}
        visible={isOpen}
        onRequestClose={() => {
          setOpen(false);
        }}
      >
        <div style={{ minWidth: 300 }}>Hello world</div>
      </ModalNew112>
      <br />
    </>
  );
};

export default PLModalNewPage;
