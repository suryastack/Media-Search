import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="relative flex items-center justify-between bg-(--c1) px-5 py-4 sm:px-8 md:px-10">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--c4) text-(--c1)">
          <i className="ri-gallery-line text-xl"></i>
        </div>

        <h2 className="text-xl font-semibold sm:text-2xl">Media Search</h2>
      </div>

      {/* Desktop / Tablet Navigation */}
      <div className="hidden items-center gap-2 md:flex">
        <Link
          className="rounded-lg px-4 py-2 text-sm font-medium text-(--c4) transition hover:bg-white/10 active:scale-95"
          to="/"
        >
          Search
        </Link>

        <Link
          className="rounded-lg px-4 py-2 text-sm font-medium text-(--c4) transition hover:bg-white/10 active:scale-95"
          to="/collection"
        >
          Collection
        </Link>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-(--c4) transition hover:bg-white/10 md:hidden"
      >
        <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute right-5 top-full z-50 mt-2 flex w-48 flex-col gap-2 rounded-xl border-2 border-(--c2) bg-(--c1) p-3 shadow-xl md:hidden">
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg px-4 py-3 font-medium text-(--c4) transition hover:bg-(--c4) hover:text-(--c1)"
            to="/"
          >
            Search
          </Link>

          <Link
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg px-4 py-3 font-medium text-(--c4) transition hover:bg-(--c4) hover:text-(--c1)"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
