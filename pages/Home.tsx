import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useStore } from '../context/StoreContext';

const Home = () => {
  const { products } = useStore();
  // Get 3 random products for display
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1200/800?grayscale&blur=2" 
            alt="Pharmacy Aisle" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Star size={14} className="fill-brand-500 text-brand-500" />
            Rated {BUSINESS_INFO.rating} by {BUSINESS_INFO.reviewCount} Happy Customers
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Your Trusted Pharmacy <br/> <span className="text-brand-500">& Supermarket in Agbor</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
            From genuine medications to fresh groceries and daily essentials. 
            Quality service right at your doorstep in Boji Boji, Agbor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              to="/shop" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 transition md:text-lg"
            >
              Browse Products
            </Link>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-600 text-base font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-700 transition md:text-lg backdrop-blur-sm"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-green-50 border border-green-100">
              <div className="p-3 bg-white rounded-lg shadow-sm text-brand-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Genuine Drugs</h3>
                <p className="text-gray-600 text-sm">100% authentic medications sourced directly from reputable manufacturers.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-xl bg-blue-50 border border-blue-100">
              <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Fast Service</h3>
                <p className="text-gray-600 text-sm">Quick order processing for pickup or local delivery arrangements.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-orange-50 border border-orange-100">
              <div className="p-3 bg-white rounded-lg shadow-sm text-orange-600">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Open Daily</h3>
                <p className="text-gray-600 text-sm">We are open every day until 9:30 PM to serve you better.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Popular Items</h2>
              <p className="text-gray-600 mt-2">Essentials our customers love.</p>
            </div>
            <Link to="/shop" className="text-brand-600 font-medium hover:text-brand-700 flex items-center gap-1 text-sm md:text-base">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-gray-700">
                    {product.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-700">₦{product.price.toLocaleString()}</span>
                    <Link to="/shop" className="text-sm font-medium text-brand-600 hover:text-brand-800">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-2xl font-bold text-gray-900 mb-4">About HEMEKON</h2>
           <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
             HEMEKON PHARMACY AND SUPERMARKET has been serving the Boji Boji, Agbor community with dedication. 
             We blend the professionalism of a top-tier pharmacy with the convenience of a well-stocked supermarket. 
             Whether you need prescription drugs, health supplements, or your weekly groceries, we are your one-stop shop.
           </p>
        </div>
      </section>
    </div>
  );
};

export default Home;