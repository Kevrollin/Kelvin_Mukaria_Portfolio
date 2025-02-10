import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Link styles
  const getLinkClass = (path) => {
    return router.pathname === path
      ? 'text-white font-semibold'
      : 'text-gray-400 hover:text-yellow-400 transition-all duration-300 ease-in-out';
  };

  return (
    <nav className={`p-5 shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-900'} transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-white'} transition-all duration-300`}>
          KM
        </Link>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="text-gray-500 dark:text-white transition-all duration-300 hover:text-yellow-400">
          {darkMode ? 'LIGHT' : 'DARK'}
        </button>

        {/* Mobile Hamburger Menu */}
        <button onClick={toggleMenu} className="lg:hidden text-white transition-all duration-300 hover:text-yellow-400">
          ☰
        </button>

        {/* Mobile Menu - Opened state */}
        {isOpen && (
          <div className="fixed bg-black bg-opacity-60 z-50">
            <div className="flex justify-between items-center p-5 bg-gray-900 text-white">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={toggleMenu} className="text-white text-3xl">✖</button>
            </div>
            <div className="flex flex-col items-center justify-center h-[20vh] bg-gray-900 text-white space-y-6">
              <Link href="/" className="text-xl font-semibold hover:text-yellow-400" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/about" className="text-xl font-semibold hover:text-yellow-400" onClick={toggleMenu}>
                About
              </Link>
              <Link href="/projects" className="text-xl font-semibold hover:text-yellow-400" onClick={toggleMenu}>
                Projects
              </Link>
              <Link href="/contact" className="text-xl font-semibold hover:text-yellow-400" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        )}

        {/* Navigation Links - Desktop */}
        <div className={`lg:flex space-x-6 ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out transform lg:transform-none`}>
          <Link href="/" className={getLinkClass('/')}>
            Home
          </Link>
          <Link href="/about" className={getLinkClass('/about')}>
            About
          </Link>
          <Link href="/skills" className={getLinkClass('/skills')}>
            Skills
          </Link>
          <Link href="/projects" className={getLinkClass('/projects')}>
            Projects
          </Link>
          <Link href="/contact" className={getLinkClass('/contact')}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
