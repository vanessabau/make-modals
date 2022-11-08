import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/index";
import HomePage from "./pages/HomePage";
import ReactModalFocusLock from "./pages/ReactModalFocusLock";
import ReactModalFocusTrap from "./pages/ReactModalFocusTrap";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/React-Modal-Focus-Lock"
          element={<ReactModalFocusLock />}
        />

        <Route
          path="/React-Modal-Focus-Trap"
          element={<ReactModalFocusTrap />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
