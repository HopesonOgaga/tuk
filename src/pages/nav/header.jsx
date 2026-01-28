import React, { useState } from "react";
import {  Menu, X } from "lucide-react"; // npm i lucide-react
import { Link } from "react-router";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-yellow-200 border-b shadow-md border-b-4 border-b-black/10 capitalize">
      <div className="flex items-center justify-between px-6 py-4 relative z-50 bg-yellow-200">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-24 h-12 bg-slate-900 rounded-full flex items-center justify-center">
            <Link to="/">
              <span className="italic text-white font-bold text-lg">
                Tok<span className="text-orange-400">hubflow</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 font-medium text-slate-900 italic">
            <li>
              <a
                href="/"
                className="px-4 py-2 rounded-md hover:bg-amber-100 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="px-4 py-2 rounded-md hover:bg-amber-100 transition-colors"
              >
                about
              </a>
            </li>
            <li>
              <a
                href="#artist"
                className="px-4 py-2 rounded-md hover:bg-amber-100 transition-colors"
              >
                artists
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-orange-500 text-white font-semibold px-6 py-2 rounded-md shadow-sm transition-transform hover:scale-105">
          Welcome
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900 transition-all duration-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Slide Down) */}
      <div
        className={`absolute left-0 w-full bg-yellow-100 border-b border-black/10 transition-all duration-500 ease-in-out md:hidden ${
          open
            ? "top-full opacity-100 translate-y-0"
            : "top-[-300px] opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2 p-6 font-medium italic">
          <li>
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-md hover:bg-amber-200 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-md hover:bg-amber-200 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#artist"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-md hover:bg-amber-200 transition-colors"
            >
              Artists
            </a>
          </li>
          <li>
            <button className="w-full mt-2 bg-orange-500 text-white px-4 py-3 rounded-md font-bold shadow-md">
              Welcome
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
