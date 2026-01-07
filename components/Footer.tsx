import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-500">HEMEKON</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted neighborhood pharmacy and supermarket in Agbor. 
              We are committed to providing genuine drugs, fresh groceries, 
              and quality household items at affordable prices.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <a href="#" className="text-gray-400 hover:text-brand-500 transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-500 transition">Home</Link></li>
              <li><Link to="/shop" className="hover:text-brand-500 transition">Shop Products</Link></li>
              <li><Link to="/cart" className="hover:text-brand-500 transition">My Cart</Link></li>
              <li><Link to="/contact" className="hover:text-brand-500 transition">Contact Us</Link></li>
              <li><Link to="/admin" className="hover:text-brand-500 transition">Staff Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-500 shrink-0" size={18} />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-500 shrink-0" size={18} />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">{BUSINESS_INFO.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-brand-500 shrink-0" size={18} />
                <span>{BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hemekon Pharmacy & Supermarket. All rights reserved.</p>
          <p className="mt-2 text-brand-500/50">Demo Application</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;