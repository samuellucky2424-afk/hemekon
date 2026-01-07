import React from 'react';
import { Phone, MapPin, Mail, Clock, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-900 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-400">We are here to help you.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-500 text-sm mb-4">Questions about products?</p>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-brand-600 font-bold hover:underline">{BUSINESS_INFO.phoneDisplay}</a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-500 text-sm mb-4">Chat with our pharmacist.</p>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition"
            >
              Chat Now
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Clock size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Opening Hours</h3>
            <p className="text-gray-500 text-sm mb-4">Visit our store.</p>
            <p className="text-gray-900 font-medium">Daily: 8:00 AM - 9:30 PM</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Store</h2>
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-brand-600 mt-1" size={24} />
              <div>
                <p className="font-medium text-gray-900">HEMEKON PHARMACY AND SUPERMARKET</p>
                <p className="text-gray-600 mt-1">{BUSINESS_INFO.address}</p>
                <p className="text-gray-500 text-sm mt-2">Location Code: 753V+JH Agbor</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We are conveniently located on the Old Lagos-Asaba Road in Boji Boji, Agbor. 
              Drop by for your prescriptions, over-the-counter medicines, and daily grocery needs. 
              Our friendly staff is always ready to assist you.
            </p>
          </div>

          <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-md">
            {/* Embedded Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5186071420796!2d6.2155!3d6.2555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f1181829910d%3A0x7770857993333333!2sOld%20Lagos%20Asaba%20Rd%2C%20Agbor!5e0!3m2!1sen!2sng!4v1650000000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hemekon Pharmacy Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;