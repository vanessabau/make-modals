import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/index";

import HomePage from "./pages/HomePage";
import ReactModalAutoFocus from "./pages/ReactModalAutoFocus";
import ReactModalNoAf from "./pages/ReactModalNoAf";

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
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
