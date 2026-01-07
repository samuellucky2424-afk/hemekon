import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Trash2, Plus, Minus, ArrowRight, AlertCircle, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useStore();
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppLink = () => {
    if (!formData.name || !formData.phone) {
        alert("Please provide your name and phone number.");
        return;
    }

    const itemsList = cart.map(item => `- ${item.name} (x${item.quantity}): ₦${(item.price * item.quantity).toLocaleString()}`).join('\n');
    const message = `*New Order Request*\n\n*Customer Details:*\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\n*Order Summary:*\n${itemsList}\n\n*Total Estimate: ₦${total.toLocaleString()}*\n\nPlease confirm availability and delivery fees.`;
    
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    // Optional: Clear cart after ordering
    // clearCart(); 
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
            <ShoppingBag size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
          <Link to="/shop" className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg bg-gray-100 shrink-0" />
                
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                  <p className="text-brand-600 font-bold text-lg">₦{item.price.toLocaleString()}</p>
                </div>

                <div className="flex flex-col items-center sm:items-end gap-3 w-full sm:w-auto">
                  {/* Improved Quantity Selector */}
                  <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-white hover:shadow-sm rounded-l-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all text-gray-600"
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => {
                            const val = parseInt(e.target.value);
                            if (!isNaN(val) && val >= 1) {
                                updateQuantity(item.id, val);
                            }
                        }}
                        className="w-12 text-center bg-transparent font-semibold text-gray-900 focus:outline-none text-sm"
                    />
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-white hover:shadow-sm rounded-r-lg transition-all text-gray-600"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:text-red-700 flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-red-50"
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="flex justify-between mb-4 pb-4 border-b border-gray-100">
                <span className="text-gray-600">Subtotal ({cart.length} items)</span>
                <span className="font-bold text-gray-900">₦{total.toLocaleString()}</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                    placeholder="080..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                  <textarea 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-500 focus:border-brand-500 outline-none text-sm"
                    placeholder="Street, Landmark..."
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3 mb-6 flex gap-3">
                <AlertCircle className="text-yellow-600 shrink-0" size={20} />
                <p className="text-xs text-yellow-800">
                  <span className="font-bold">Note:</span> Online payment will be enabled after official approval. Checkout proceeds via WhatsApp.
                </p>
              </div>

              <button 
                onClick={generateWhatsAppLink}
                disabled={!formData.name || !formData.phone}
                className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-bold transition shadow-sm"
              >
                Place Order via WhatsApp <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;