import React, { useState } from "react";

import "./App.css";
import Login from "./component/login/Login";
import Page from "./pages/Page";
import { createContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";

function App() {
  const [logstate, setlogstate] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          // <Route path="/login" element={<Login />} />
          <Route path="/question" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
