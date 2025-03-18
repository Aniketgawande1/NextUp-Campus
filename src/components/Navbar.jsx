import React, { useState } from "react";
import { FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Events", link: "/#services" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Schedule", link: "/#schedule" },
  { id: 5, name: "Contact", link: "/#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-gray-900 shadow-lg border-b border-gray-800 text-white sticky top-0 z-50">
        <div className="container py-4"> {/* Increased padding for better spacing */}
          <div className="flex justify-between items-center">
            {/* Site Name with Added Spacing */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-5xl tracking-wider text-white ml-5"
              >
                Campus<span className="ml-2">Event</span> {/* Added spacing */}
              </a>
            </div>

            {/* Desktop Menu */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="hidden md:flex justify-between items-center gap-8"
            >
              <ul className="flex items-center gap-6"> {/* Increased gap */}
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-lg py-2 px-5 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-200 shadow-md">
                Register
                <FaCalendarAlt className="text-lg" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white p-3">
                {isMenuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-6 pb-4 border-t border-gray-800 mt-3">
              <ul className="flex flex-col gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="block py-3 px-5 text-lg text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                <li className="mt-4 px-5">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2">
                    Register
                    <FaCalendarAlt />
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
