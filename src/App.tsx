import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import InvestorSignup from "./pages/Investor/InvestorSignup";
import OwnerSignup from "./pages/Owner/OwnerSignup";
import Header from "./components/Header";
import InvestorLogin from "./pages/Investor/InvestorLogin";
import OwnerLogin from "./pages/Owner/OwnerLogin";
import BusinessFeed from "./pages/Investor/BusinessFeed";
import BusinessById from "./pages/Investor/BusinessById";
import { Toaster } from "./components/ui/toaster";
import { ProtectedInvestorRoutes } from "./components/ProtectedInvestorRoutes"; // Ensure the correct import path
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import InvestInRestaurant from "./pages/Investor/InvestInRestaurant";
import { PublicRoute } from "./components/PublicRoute";
import { ProtectedOwnerRoutes } from "./components/ProtectedOwnerRoute";
import OwnerBusinessFeed from "./pages/Owner/OwnerBusinessFeed";
import CreateBusiness from "./pages/Owner/CreateBusiness";
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/investInResataurant" element={<InvestInRestaurant />} />
        <Route element={<PublicRoute />}>
          <Route path="/investor/login" element={<InvestorLogin />} />
          <Route path="/investor/signup" element={<InvestorSignup />} />
          <Route path="/owner/login" element={<OwnerLogin />} />
          <Route path="/owner/signup" element={<OwnerSignup />} />
        </Route>

        <Route element={<ProtectedInvestorRoutes />}>
          <Route path="/investor/feed" element={<BusinessFeed />} />
          <Route path="/investor/business/:id" element={<BusinessById />} />
          <Route path="/investor/chat" element={<Chat />} />
        </Route>

        <Route element={<ProtectedOwnerRoutes />}>
          <Route path="/owner/mybusiness" element={<OwnerBusinessFeed />} />
          <Route path="/owner/createbusiness" element={<CreateBusiness />} />
          {/* <Route path="/owner/business/:id" element={<OwnerBusinessFeed />} /> */}
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
