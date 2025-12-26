import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "../app/home/Homepage";
import LoginPage from "../app/auth/login/LoginPage";
import SignupPage from "../app/auth/signup/SignupPage";
import InsurancePage from "../app/insurance/InsurancePage";
import CheckupsPage from "../app/checkups/CheckupsPage";
import DashboardPage from "../app/dasboard/DasboardPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/insurance" element={<InsurancePage />} />
      <Route path="/checkups" element={<CheckupsPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
