import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Navbarbar from "./components/navbar/navpar";
import Test from "./components/test";
import Test2 from "./components/test2";
import CustomerAdd from "./components/customer/customeradd";
function App() {
  return (
    <React.StrictMode>
      <Navbarbar />
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/customeradd" element={<CustomerAdd />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
