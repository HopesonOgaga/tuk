import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-yellow-200 border-b shadow-md border-b-4 border-b-black/10">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-24  h-12 bg-slate-900 rounded-full flex items-center justify-center">
            <span className="italic text-white font-bold text-lg">tok<span className="text-orange-400">tub</span> </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 font-medium text-slate-900 italic">
            <li>
              <a
                href="#"
                className="px-4 py-2 rounded-md hover:bg-amber-100 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 rounded-md hover:bg-amber-100 transition-colors"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 rounded-md hover:bg-amber-100 transition-colors"
              >
                Blogs
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
          className="md:hidden text-slate-900"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-yellow-100 border-t">
          <ul className="flex flex-col gap-2 p-4 font-medium italic">
            <li>
              <a
                href="#"
                className="block px-4 py-2 rounded-md hover:bg-amber-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 rounded-md hover:bg-amber-100"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 rounded-md hover:bg-amber-100"
              >
                Blogs
              </a>
            </li>
            <li>
              <button className="w-full mt-2 bg-orange-500 text-white px-4 py-2 rounded-md">
                Welcome
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
