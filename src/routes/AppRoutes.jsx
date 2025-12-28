import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Pages
import App from "../App";
import HomePage from "../app/home/Homepage";
import LoginPage from "../app/auth/login/LoginPage";
import SignupPage from "../app/auth/signup/SignupPage";
import InsurancePage from "../app/insurance/InsurancePage";
import CheckupsPage from "../app/checkups/CheckupsPage";
import DashboardPage from "../app/dasboard/DasboardPage";
import AboutPage from "../app/about/AboutPage";
import ContactPage from "../app/contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "insurance", element: <InsurancePage /> },
      { path: "checkups", element: <CheckupsPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> }
    ]
  }
]);

export default router;
