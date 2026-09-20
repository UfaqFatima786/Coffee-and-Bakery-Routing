import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3d342d] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 md:px-10 lg:grid-cols-4">

        {/* Brand */}
        <div className="lg:col-span-2">

          <Link to="/" className="inline-flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#718b63] text-xl">
              ☕
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Bloom & Brew
              </h2>

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#cfc5bb]">
                Coffee & Bakery
              </p>
            </div>

          </Link>

          <p className="mt-6 max-w-md leading-7 text-[#cfc4b9]">
            A cozy corner for handcrafted coffee, freshly baked treats,
            meaningful conversations, and beautiful everyday moments.
          </p>


          {/* Social Icons */}
          <div className="mt-6 flex gap-3">

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#51463e] transition hover:bg-[#718b63]"
            >
              f
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#51463e] transition hover:bg-[#718b63]"
            >
              ◎
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#51463e] transition hover:bg-[#718b63]"
            >
              𝕏
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-[#cfc4b9]">

            <li>
              <Link
                to="/"
                className="transition hover:text-[#b8cfaa]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/menu"
                className="transition hover:text-[#b8cfaa]"
              >
                Our Menu
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="transition hover:text-[#b8cfaa]"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/gallery"
                className="transition hover:text-[#b8cfaa]"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition hover:text-[#b8cfaa]"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>


        {/* Contact */}
        <div>

          <h3 className="mb-5 text-lg font-semibold">
            Visit Us
          </h3>

          <ul className="space-y-4 text-sm text-[#cfc4b9]">

            <li className="flex gap-3">
              <span>📍</span>
              <span>
                24 Garden Avenue,
                <br />
                Karachi, Pakistan
              </span>
            </li>

            <li className="flex gap-3">
              <span>📞</span>
              <span>+92 300 1234567</span>
            </li>

            <li className="flex gap-3">
              <span>✉️</span>
              <span>hello@bloomandbrew.com</span>
            </li>

          </ul>

        </div>

      </div>


      {/* Opening Hours */}
      <div className="border-t border-[#5a4f46]">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm md:flex-row md:items-center md:justify-between md:px-10">

          <div className="text-[#cfc4b9]">
            <span className="font-semibold text-white">
              Opening Hours:
            </span>{" "}
            Mon – Sun · 8:00 AM – 11:00 PM
          </div>

          <Link
            to="/reservations"
            className="font-semibold text-[#b8cfaa] transition hover:text-white"
          >
            Reserve a Table →
          </Link>

        </div>

      </div>


      {/* Copyright */}
      <div className="border-t border-[#5a4f46]">

        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-[#a99d92] md:flex-row md:items-center md:justify-between md:px-10">

          <p>
            © 2026 Bloom & Brew. All rights reserved.
          </p>

          <p>
            Crafted with ☕ & ❤️
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
