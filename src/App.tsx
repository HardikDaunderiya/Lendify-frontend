import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import InvestorSignup from "./pages/InvestorSignup";
import OwnerSignup from "./pages/OwnerSignup";

// import Header from "./components/Header";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      {/* <Header /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/investor/signup" element={<InvestorSignup />} />
        <Route path="/owner/signup" element={<OwnerSignup />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
