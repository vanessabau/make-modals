import React from "react";
import { AutoFocusInside } from "react-focus-lock";
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
        headerText="Title text"
        modalContent={
          <div style={{ minWidth: 300 }}>
            Hello world{" "}
            <AutoFocusInside>
              {" "}
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
      <h2>Notes</h2>
      <h3>Behavior</h3>
      <ul>
        <li>
          Can be used to set focus on a specific element. Wrap the element in{" "}
          <AutoFocusInside></AutoFocusInside>
        </li>
        <li>Refocuses on last focused element on esc, and close modal</li>
      </ul>
      <h3>Voice Over</h3>
      <p>The same for Chrome and Safari</p>
      <ul>
        <li>"Title text and two more items, dialog"</li>
        <li>"You are currently on a text element inside of web content"</li>
      </ul>
      <p>
        {" "}
        Then it toggles between the buttons (tabbable elements within the modal)
      </p>
    </>
  );
};
export default ReactModalAutoFocus;
