import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }: { children?: React.ReactNode }) => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');
    
    // Don't show public nav/footer on admin dashboard if logged in (optional style choice, keeping consistent here)
    // For this demo, we'll keep nav everywhere but the specific Admin component handles its own layout for the dashboard view internally if needed.
    // To strictly follow the "Admin UI" feel, we usually hide the main footer on dashboard.
    
    return (
        <div className="flex flex-col min-h-screen font-sans">
            {!isAdminRoute && <Navbar />}
            <main className="flex-grow">
                {children}
            </main>
            {!isAdminRoute && <Footer />}
        </div>
    );
};

function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Layout>
            } />
        </Routes>
      </HashRouter>
    </StoreProvider>
  );
}

export default App;