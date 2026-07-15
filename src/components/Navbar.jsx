import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo3.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`w-full bg-white border-b sticky top-0 z-50 transition-shadow ${
        scrolled ? "border-gray-100 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
       <Link to="/" className="flex items-center shrink-0 py-2 -my-2">
  <img
    src={logo}
    alt="Innviile Foundation"
    className="h-14 sm:h-16 w-auto object-contain"
  />
</Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? "text-red-500"
                    : "text-gray-700 hover:text-red-500"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-red-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/jobs"
          className="hidden md:inline-block bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600 active:bg-red-700 transition-colors shrink-0"
        >
          Job Vacancies
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-gray-700 hover:text-red-500 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`py-3 px-3 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-red-50 text-red-500"
                    : "text-gray-700 hover:bg-gray-50 hover:text-red-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            state={{ reason: "Partnership / Sponsorship" }}
            className="mt-2 bg-red-500 text-white text-center px-4 py-3 rounded-md text-sm font-medium hover:bg-red-600 active:bg-red-700 transition-colors"
          >
            Job Vacancies
          </Link>
        </div>
      </div>
    </nav>
  );
}