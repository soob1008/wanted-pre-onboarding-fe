import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import "./styles/layout.scss";

import App from "./App";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes basename={process.env.PUBLIC_URL}>
        {/* 홈 */}
        <Route path="/" element={<App />} />
        {/* 로그인 */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
);
