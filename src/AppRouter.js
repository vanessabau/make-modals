import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/react-modal-ft/navbar/index";

import HomePage from "./pages/HomePage";
import ReactModalFocusLock from "./pages/ReactModalFocusLock";
import ReactModalNoAf from "./pages/ReactModalNoAf";
import ReactModalFocusTrap from "./pages/ReactModalFocusTrap";
import PLModalNewPage from "./pages/PLModalNewPage";

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
        <Route path="/React-Modal-No-Af" element={<ReactModalNoAf />} />
        <Route path="/React-Modal-Focus-Trap" element={<ReactModalFocusTrap/>} />
        <Route path="/PL-Modal-New" element={<PLModalNewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
