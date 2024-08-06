import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Test from "./components/test";
import Test2 from "./components/test2";
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
