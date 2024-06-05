import React from "react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<signup />} /> */}
    </Routes>
  );
};

export default App;
