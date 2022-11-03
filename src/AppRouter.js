import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/index";

import HomePage from "./pages/HomePage";
import ReactModalAutoFocus from "./pages/ReactModalAutoFocus";
import ReactModalNoAf from "./pages/ReactModalNoAf";
import ReactModalFTrap from "./pages/ReactModalFTrap";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/React-Modal-Auto-Focus"
          element={<ReactModalAutoFocus />}
        />
        <Route path="/React-Modal-No-Af" element={<ReactModalNoAf />} />
        <Route path="/React-Modal-Focus-Trap" element={<ReactModalFTrap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
