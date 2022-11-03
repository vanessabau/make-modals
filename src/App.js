import "./App.css";
import ModalWithReactDOM from "./components/modal";
import { ReactModalTs } from "./components/react-modal-ts/react-modal-ts";
import { useModal } from "./components/react-modal-ts/react-modal-utils";

function App() {
  const { isShown, toggle } = useModal();
  return (
    <div className="App">
      <header className="App-header" id="demo">
        <h1>Lets Make some Modals</h1>
      </header>
      <hr />
      <h2>React Modal from Ts</h2>
      <button onClick={toggle}>Toggle</button>
      <br />
      <ReactModalTs
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
      <hr />
      <h2>Modal with ReactDOM (not workign yet)</h2>
      <ModalWithReactDOM />
      <br />
      <a href="https://stackblitz.com/edit/reusable-react-modal-ts?file=modal%2Fmodal.tsx">
        Inspiration code
      </a>
    </div>
  );
}

export default App;
