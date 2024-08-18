import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative">
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 text-white bg-transparent z-20">
        {/* Menu button */}
        <button
          onClick={toggleMenu}
          className="relative w-10 h-10 flex items-center justify-center ml-auto"
        >
          {/* Framer Motion for menu icon animation */}
          <motion.div
            className="text-3xl"
            initial={{ rotate: 0, scale: 1 }} // Initial state of the menu icon
            animate={{
              rotate: isOpen ? 180 : 0, // Rotate icon when menu is open
              scale: isOpen ? 0.8 : 1, // Scale down icon when menu is open
            }}
            transition={{ duration: 0.5 }} // Duration of the animation
          >
            <MdMenu />
          </motion.div>
        </button>
      </div>
      {/* Framer Motion for menu slide-in/out animation */}
      <motion.nav
        initial={{ width: 0, opacity: 0 }} // Initial state of the menu
        animate={{ width: isOpen ? '16rem' : 0, opacity: isOpen ? 1 : 0 }} // Animate menu width and opacity based on isOpen state
        exit={{ width: 0, opacity: 0 }} // Exit state for the menu
        transition={{ duration: 0.4, ease: 'easeInOut' }} // Transition duration and easing
        className="fixed top-0 left-0 h-full bg-[#ff0066] text-white p-5 z-30 overflow-hidden"
      >
        <ul className="flex flex-col gap-4 mt-24 mb-10">
          <li className="text-4xl font-bold tracking-tight transition-transform duration-300 hover:scale-110">
            Home
          </li>
          <li className="text-4xl font-bold tracking-tight transition-transform duration-300 hover:scale-110">
            About
          </li>
          <li className="text-4xl font-bold tracking-tight transition-transform duration-300 hover:scale-110">
            Services
          </li>
          <li className="text-4xl font-bold tracking-tight transition-transform duration-300 hover:scale-110">
            Contact
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
