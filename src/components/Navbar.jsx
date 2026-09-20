
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `text-sm transition duration-300 ${
      isActive
        ? "font-semibold text-[#718b63]"
        : "text-[#665b52] hover:text-[#718b63]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8dfd5] bg-[#faf8f3]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#718b63] text-base shadow-sm transition duration-300 group-hover:rotate-6">
            ☕
          </div>

          <div>
           {/* <h1 className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#3d342d]">
  Bloom & Brew
</h1> */}

            <p className="text-[20px] font-medium uppercase tracking-[0.18em] text-[#8a7d72]">
              Coffee & Bakery
            </p>
          </div>

        </Link>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/menu" className={navLinkStyle}>
            Menu
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>
          <NavLink to="/gallery" className={navLinkStyle}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>
        </div>
        {}
        <Link
          to="/reservations"
          className="hidden rounded-full bg-[#718b63] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#607952] md:block"
        >
          Book a Table
        </Link>
        {}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#ddd1c4] bg-white text-lg text-[#51463e] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#e8dfd5] bg-[#faf8f3] px-5 py-4 md:hidden">

          <div className="flex flex-col gap-1">

            {[
              ["Home", "/"],
              ["Menu", "/menu"],
              ["About", "/about"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([name, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm ${
                    isActive
                      ? "bg-[#e8f0e3] font-semibold text-[#718b63]"
                      : "text-[#665b52]"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}

            <Link
              to="/reservations"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[#718b63] px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Book a Table
            </Link>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;
