// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
//       {/* Logo / App Name */}
//       <div className="text-2xl font-bold">📚 Mini Library</div>

//       {/* Navigation Links */}
//       <div className="space-x-6">
//         <Link to="/" className="hover:text-yellow-400 transition-colors">
//           Home
//         </Link>
//         <Link
//           to="/about"
//           className="hover:text-yellow-400 transition-colors"
//         >
//           About
//         </Link>
//         <Link to="/contact" className="hover:text-yellow-400 transition-colors">
//           Contact
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-white px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center relative">
      {/* Logo / App Name */}
      <div className="text-xl sm:text-2xl md:text-3xl font-bold">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">📚</span>
          <span>Mini Library</span>
        </Link>
      </div>

      {/* Desktop Navigation Links - Hidden on mobile */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="/"
          className="hover:text-yellow-400 transition-colors duration-200 px-2 py-1 rounded"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-yellow-400 transition-colors duration-200 px-2 py-1 rounded"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-yellow-400 transition-colors duration-200 px-2 py-1 rounded"
        >
          Contact
        </Link>
        <Link
          to="/k;jndfma"
          className="hover:text-yellow-400 transition-colors duration-200 px-2 py-1 rounded"
        >
          Notfound
        </Link>
        
      </div>

      {/* Mobile Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          ></div>

          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-slate-800 shadow-2xl z-50 md:hidden animate-slideIn">
            {/* Close button in mobile menu */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeMenu}
                className="text-2xl text-white hover:text-yellow-400 p-2"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col p-6 space-y-6">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-xl hover:text-yellow-400 transition-colors duration-200 py-3 px-4 hover:bg-slate-700 rounded-lg"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="text-xl hover:text-yellow-400 transition-colors duration-200 py-3 px-4 hover:bg-slate-700 rounded-lg"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-xl hover:text-yellow-400 transition-colors duration-200 py-3 px-4 hover:bg-slate-700 rounded-lg"
              >
                Contact
              </Link>
             
            </div>

            {/* Optional: App Info in Mobile Menu */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700">
              <p className="text-sm text-slate-400">
                Browse your favorite books
              </p>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
