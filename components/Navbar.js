'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  // Prevent body scroll on menu open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <nav className="p-4 bg-background/55 backdrop-blur sticky top-0 border-b z-50">
      <div className="container mx-auto flex justify-between items-center mb-6">
        {/* Brand Name */}
        <div className="text-lg font-bold">
          <Link href="/">ushnablog</Link>
        </div>

        {/* Centered Desktop Menu */}
        <div className="hidden md:flex space-x-8 justify-center items-center flex-1">
          <Link href="/" className="text-lg font-medium hover:text-violet-500 hover:underline hover:font-bold transition-all duration-300">
            Home
          </Link>
          <Link href="/about" className="text-lg font-medium hover:text-violet-500 hover:underline hover:font-bold transition-all duration-300">
            About
          </Link>
          <Link href="/blog" className="text-lg font-medium hover:text-violet-500 hover:underline hover:font-bold transition-all duration-300">
            Blog
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:text-violet-500 hover:underline hover:font-bold transition-all duration-300">
            Contact
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button variant="solid" className="bg-violet-500 text-white px-6 py-2 text-sm font-medium">
            Login
          </Button>
          <Button variant="solid" className="bg-violet-500 text-white px-6 py-2 text-sm font-medium">
            Signup
          </Button>
          {/* Theme Toggle Button with Icon */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6 text-white" />
            ) : (
              <MoonIcon className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className={`text-violet-500 hover:text-violet-600 focus:outline-none 
              ${isDarkMode ? 'bg-violet-500 p-4 rounded-full' : 'p-4 rounded-full'}`}
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
          {/* Theme Toggle Button (outside menu) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6 text-white" />
            ) : (
              <MoonIcon className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`md:hidden p-4 space-y-2 transition-all duration-300 ease-in-out 
            ${isDarkMode ? 'text-gray-100' : 'bg-white text-gray-800'}`}
        >
          <Link href="/" className="block hover:text-violet-500 hover:underline hover:font-bold transition-all duration-300">
            Home
          </Link>
          <Link href="/about" className="block hover:text-violet-500 hover:underline hover:font-bold transition-all duration-300">
            About
          </Link>
          <Link href="/blog" className="block hover:text-violet-500 hover:underline hover:font-bold transition-all duration-300">
            Blog
          </Link>
          <Link href="/contact" className="block hover:text-violet-500 hover:underline hover:font-bold transition-all duration-300">
            Contact
          </Link>
          {/* Login and Signup buttons inside the sidebar */}
          <Button variant="solid" className="bg-violet-500 text-white px-6 py-2 text-sm font-medium w-full">
            Login
          </Button>
          <Button variant="solid" className="bg-violet-500 text-white px-6 py-2 text-sm font-medium w-full">
            Signup
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
