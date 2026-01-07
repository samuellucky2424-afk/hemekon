import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCategory, Product } from '../types';
import { Plus, Search, Check } from 'lucide-react';

const Shop = () => {
  const { products, addToCart } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());

  const categories = ['All', ...Object.values(ProductCategory)];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    // Visual feedback
    setAddedItems(prev => new Set(prev).add(product.id));
    setTimeout(() => {
        setAddedItems(prev => {
            const next = new Set(prev);
            next.delete(product.id);
            return next;
        });
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h1>
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Category Filter */}
            <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-brand-600 text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-gray-100">
                <div className="aspect-square relative overflow-hidden rounded-t-xl bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-4"
                  />
                  {/* Discount Badge Placeholder if needed, matching the image style */}
                  <div className="absolute top-2 right-2 bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-[10px] font-bold border border-orange-100">
                    -5%
                  </div>
                </div>
                
                <div className="p-3 md:p-4 flex-grow flex flex-col">
                  <div className="mb-2">
                    <h3 className="font-medium text-gray-900 line-clamp-2 min-h-[2.5rem] text-sm md:text-base leading-tight">{product.name}</h3>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-col gap-1 mb-3">
                      <span className="text-base md:text-lg font-bold text-gray-900">₦{product.price.toLocaleString()}</span>
                    </div>
                    
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={addedItems.has(product.id)}
                      className={`w-full flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                        addedItems.has(product.id)
                          ? 'bg-green-100 text-green-700'
                          : 'bg-brand-600 text-white hover:bg-brand-700 shadow-sm'
                      }`}
                    >
                      {addedItems.has(product.id) ? (
                          <>
                            <Check size={14} className="md:w-4 md:h-4" /> Added
                          </>
                      ) : (
                          <>
                            <Plus size={14} className="md:w-4 md:h-4" /> Add to Cart
                          </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                className="mt-4 text-brand-600 hover:text-brand-800 font-medium"
            >
                Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;