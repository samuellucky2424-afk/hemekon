import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Package, ShoppingCart, LogOut, Plus, Trash2, Edit2 } from 'lucide-react';
import { ProductCategory, Product } from '../types';

const Admin = () => {
  const { isAdmin, loginAdmin, logoutAdmin, products, addProduct, deleteProduct, orders } = useStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');
  
  // New Product Form State
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    category: ProductCategory.PHARMACY,
    price: 0,
    description: '',
    image: 'https://picsum.photos/400/300'
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock credentials
    if (username === 'admin' && password === 'admin') {
      loginAdmin();
    } else {
      alert('Invalid credentials. Try admin/admin');
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProduct.name && newProduct.price) {
      addProduct({
        id: Date.now(),
        name: newProduct.name,
        category: newProduct.category as ProductCategory,
        price: Number(newProduct.price),
        description: newProduct.description || '',
        image: newProduct.image || 'https://picsum.photos/400/300',
        inStock: true
      });
      setIsAdding(false);
      setNewProduct({ name: '', category: ProductCategory.PHARMACY, price: 0, description: '', image: 'https://picsum.photos/400/300' });
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Staff Portal Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-brand-600 text-white py-2 rounded-lg font-bold hover:bg-brand-700 transition"
            >
              Login
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">Hint: use admin / admin</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Logged in as Admin</span>
            <button onClick={logoutAdmin} className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-medium">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button 
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${activeTab === 'products' ? 'bg-brand-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          >
            <Package size={18} /> Manage Products
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${activeTab === 'orders' ? 'bg-brand-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          >
            <ShoppingCart size={18} /> Orders ({orders.length})
          </button>
        </div>

        {/* Products View */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-900">Inventory ({products.length})</h2>
              <button 
                onClick={() => setIsAdding(!isAdding)}
                className="flex items-center gap-1 bg-brand-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-brand-700 transition"
              >
                {isAdding ? 'Cancel' : <><Plus size={16} /> Add Product</>}
              </button>
            </div>

            {isAdding && (
              <div className="p-6 bg-gray-50 border-b border-gray-200 animate-in slide-in-from-top-2">
                <h3 className="text-sm font-bold uppercase text-gray-500 mb-4">New Product Details</h3>
                <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    placeholder="Product Name" 
                    className="p-2 border rounded"
                    value={newProduct.name}
                    onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                    required
                  />
                  <select 
                    className="p-2 border rounded"
                    value={newProduct.category}
                    onChange={e => setNewProduct({...newProduct, category: e.target.value as ProductCategory})}
                  >
                    {Object.values(ProductCategory).map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <input 
                    type="number" 
                    placeholder="Price (Naira)" 
                    className="p-2 border rounded"
                    value={newProduct.price || ''}
                    onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})}
                    required
                  />
                  <input 
                    placeholder="Description" 
                    className="p-2 border rounded"
                    value={newProduct.description}
                    onChange={e => setNewProduct({...newProduct, description: e.target.value})}
                  />
                  <button type="submit" className="md:col-span-2 bg-black text-white py-2 rounded font-medium hover:bg-gray-800">
                    Save Product
                  </button>
                </form>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 font-medium">Product</th>
                    <th className="px-6 py-3 font-medium">Category</th>
                    <th className="px-6 py-3 font-medium">Price</th>
                    <th className="px-6 py-3 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map(product => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 flex items-center gap-3">
                        <img src={product.image} alt="" className="w-10 h-10 rounded bg-gray-200 object-cover" />
                        <span className="font-medium text-gray-900">{product.name}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{product.category}</td>
                      <td className="px-6 py-4 font-medium text-brand-700">₦{product.price.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right">
                         <div className="flex justify-end gap-2">
                           <button className="text-gray-400 hover:text-blue-600"><Edit2 size={16} /></button>
                           <button 
                            onClick={() => deleteProduct(product.id)}
                            className="text-gray-400 hover:text-red-600"
                           ><Trash2 size={16} /></button>
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Orders View */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Online Orders</h3>
            <p className="text-gray-500 max-w-sm mx-auto">
              Currently, all orders are processed via WhatsApp directly. 
              Once the payment gateway is approved and integrated, orders will appear here.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Admin;