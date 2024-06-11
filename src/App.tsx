import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import InvestorSignup from "./pages/InvestorSignup";
import OwnerSignup from "./pages/OwnerSignup";
import Header from "./components/Header";
import InvestorLogin from "./pages/InvestorLogin";
import OwnerLogin from "./pages/OwnerLogin";
import BusinessFeed from "./components/BusinessFeed";
import Business from "./components/Business";
// import Header from "./components/Header";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      {/* <Header /> */}
      <Routes>
        <Route path="/investor/login" element={<InvestorLogin />} />
        <Route path="/investor/feed" element={<BusinessFeed />} />
        <Route path="/investor/business/id" element={<Business />} />

        <Route path="/owner/login" element={<OwnerLogin />} />
        <Route path="/investor/signup" element={<InvestorSignup />} />
        <Route path="/owner/signup" element={<OwnerSignup />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
