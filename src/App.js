import "./App.css";
import ModalWithReactDOM from "./components/modal";

function App() {
  return (
    <div className="App">
      <header className="App-header" id="demo">
        <h1>Lets Make some Modals</h1>
      </header>
      <hr />
      <h2>Modal with ReactDOM</h2>
      <ModalWithReactDOM />
      <br />
      <a href="https://stackblitz.com/edit/reusable-react-modal-ts?file=modal%2Fmodal.tsx">
        Inspiration code
      </a>
      <hr />
      <h2>Modal November 2 from Jacob's Modal</h2>
    </div>
  );
}

export default App;
