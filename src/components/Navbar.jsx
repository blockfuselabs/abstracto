import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white w-full py-4 px-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">🚀 Abstracto</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-400">About</Link>
          <Link to="/" className="hover:text-gray-400">Features</Link>
          <Link to="/documentation" className="hover:text-gray-400">Documentation</Link>
          <Link to="/" className="hover:text-gray-400">Community</Link>
        </nav>

        {/* "Launch" Button */}
        <div className="hidden md:block">
          <Link
            to=""
            className="px-4 py-3 bg-[#BF64E7] rounded-md hover:opacity-75 transition-colors"
          >
            Launch CLI
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-4">
          <Link to="/" className="block text-center hover:text-gray-400">About</Link>
          <Link to="/" className="block text-center hover:text-gray-400">Features</Link>
          <Link to="/" className="block text-center hover:text-gray-400">Documentation</Link>
          <Link to="/" className="block text-center hover:text-gray-400">Community</Link>
          <Link
            to="/launch"
            className="block text-center px-4 py-2 bg-[#BF64E7] hover:opacity-75 rounded-md  transition-colors mt-4"
          >
            Launch CLI
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
