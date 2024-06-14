import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import InvestorSignup from "./pages/Investor/InvestorSignup";
import OwnerSignup from "./pages/Owner/OwnerSignup";
import Header from "./components/Header";
import InvestorLogin from "./pages/Investor/InvestorLogin";
import OwnerLogin from "./pages/Owner/OwnerLogin";
import BusinessFeed from "./pages/Investor/BusinessFeed";
import Business from "./components/Business";
import { Toaster } from "./components/ui/toaster";
import { ProtectedInvestorRoutes } from "./components/ProtectedInvestorRoutes"; // Ensure the correct import path

console.log(localStorage.getItem("user"));
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/investor/login" element={<InvestorLogin />} />
        <Route path="/investor/signup" element={<InvestorSignup />} />

        <Route element={<ProtectedInvestorRoutes />}>
          <Route path="/investor/feed" element={<BusinessFeed />} />
          <Route path="/investor/business/id" element={<Business />} />
        </Route>

        <Route path="/owner/login" element={<OwnerLogin />} />
        <Route path="/owner/signup" element={<OwnerSignup />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
