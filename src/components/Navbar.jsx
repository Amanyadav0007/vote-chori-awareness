import { Menu, Shield, X } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Stories', path: '/stories' },
    { name: 'Submit Story', path: '/submit-story' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
  ];

  const isActive = (path) => location.pathname === path;

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className='bg-white shadow-lg border-b-4 border-orange-500'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>

          <div className='flex items-center'>
            <Link to="/" className='flex items-center space-x-2'>
              <div className='bg-gradient-to-r from-orange-500 to-green-600 p-2 rounded-lg'>
                <Shield className='h-6 w-6 text-white' />
              </div>
              <span className='text-xl font-bold text-gray-900'>Vote Chori Awareness</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path) ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'}`}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu btn */}
          <div className='md:hidden flex items-center'>
            <button className='cursor-pointer text-gray-600 hover:text-orange-600 focus:outline-none focus:text-orange-600' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1
           sm:px-3 bg-white border-t'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.path) ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar