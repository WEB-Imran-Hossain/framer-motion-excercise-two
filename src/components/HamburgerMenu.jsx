import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Variants for menu animation
const menuVariants = {
  open: { translateX: "0%" }, // Menu fully visible
  closed: { translateX: "-100%" }, // Menu off-screen
};

const listVariants = {
  open: {
    opacity: 1, // Fully visible
    scale: 1, // Normal size
    transition: { staggerChildren: 0.05 }, // Stagger animation for children
  },
  closed: {
    opacity: 0, // Invisible
    scale: 0.5, // Reduced size
    transition: { staggerChildren: 0.05, staggerDirection: -1 }, // Stagger animation in reverse
  },
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 text-white z-30"
      >
        <motion.div
          className="w-8 h-8"
          animate={{ rotate: isOpen ? 45 : 0 }} // Rotate button based on isOpen state
          transition={{ duration: 0.3 }} // Duration of the rotation animation
        >
          <div 
            className="w-4 h-0.5"
            style={{ transform: isOpen ? 'translateY(0px) rotate(45deg)' : 'translateY(-5px) rotate(0deg)' }} // Transform lines based on menu state
          />
          <div 
            className="w-4 h-0.5 mt-1"
            style={{ transform: isOpen ? 'translateY(0px) rotate(-45deg)' : 'translateY(5px) rotate(0deg)' }} // Transform lines based on menu state
          />
        </motion.div>
      </button>

      {/* Side menu */}
      <motion.nav
        className="fixed top-0 right-0 w-2/3 h-full bg-blue-700 p-5"
        variants={menuVariants} // Apply menu animation variants
        initial="closed" // Initial state of the menu
        animate={isOpen ? "open" : "closed"} // Animate based on isOpen state
      >
        <motion.ul variants={listVariants} className="flex flex-col gap-4"> {/* List items animation */}
          <motion.li>Portfolio</motion.li>
          <motion.li>About</motion.li>
          <motion.li>Contact</motion.li>
          <motion.li>Search</motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default HamburgerMenu;