import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, User } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { BUSINESS_INFO } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, isAdmin } = useStore();
  const location = useLocation();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path ? 'text-brand-600 font-semibold' : 'text-gray-600 hover:text-brand-600';

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
               <div className="bg-brand-600 text-white p-1.5 rounded-md font-bold text-lg">H</div>
               <div className="flex flex-col">
                 <span className="font-bold text-gray-800 leading-tight">HEMEKON</span>
                 <span className="text-[10px] text-brand-600 font-medium tracking-wide">PHARMACY & MART</span>
               </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/shop" className={isActive('/shop')}>Shop Products</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
            {isAdmin && <Link to="/admin" className="text-purple-600 font-semibold">Dashboard</Link>}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="hidden md:flex items-center gap-1 text-gray-600 hover:text-brand-600"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-brand-600 transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop Products
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/admin" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <User size={16} /> Admin Login
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;