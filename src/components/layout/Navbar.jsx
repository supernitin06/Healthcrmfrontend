import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import "../StyleCSS/Navbar/navbar.css";

export default function Navbar() {
  const links = [
    { path: "/", label: "Home" },
    { path: "/insurance", label: "Insurance" },
    { path: "/checkups", label: "Checkups" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold flex items-baseline gap-2">
          <span className="text-gradient">Health</span>
          <span className="text-primary">CRM</span>
        </h1>

        <div className="flex gap-8 items-center">
          {links.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Button text="Login" />
        </div>
      </div>
    </nav>
  );
}
