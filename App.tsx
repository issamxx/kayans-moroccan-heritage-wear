import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import HomePage from './components/pages/HomePage';
import ShopAllPage from './components/pages/ShopAllPage';
import NewArrivalsPage from './components/pages/NewArrivalsPage';
import CollectionsPage from './components/pages/CollectionsPage';
import MenPage from './components/pages/MenPage';
import WomenPage from './components/pages/WomenPage';
import AboutUsPage from './components/pages/AboutUsPage';
import ContactUsPage from './components/pages/ContactUsPage';
import TrackOrderPage from './components/pages/TrackOrderPage';
import MyAccountPage from './components/pages/MyAccountPage';
import SettingsPage from './components/pages/SettingsPage';

import { Product, ProductCategory } from './types';
import { INITIAL_PRODUCTS, Page, MENU_ITEMS_CONFIG } from './constants';

const App: React.FC = () => {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS); // products state is stable
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(ProductCategory.All);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const getPageFromHash = useCallback(() => {
    const hash = window.location.hash.replace('#/', '').toLowerCase();
    if (hash === '') return Page.Home;
    const matchedConfig = MENU_ITEMS_CONFIG.find(item => item.key.toLowerCase() === hash || item.name.toLowerCase().replace(/\s+/g, '-') === hash);
    return matchedConfig ? matchedConfig.key : Page.Home;
  }, []);

  useEffect(() => {
    setCurrentPage(getPageFromHash());

    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange, false);
    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, [getPageFromHash]);

  useEffect(() => {
    if (selectedCategory === ProductCategory.All) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const handleCategoryChange = (category: ProductCategory) => {
    setSelectedCategory(category);
  };

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navigateTo = useCallback((page: Page) => {
    const newPath = page === Page.Home ? '/' : `/${page.toLowerCase().replace(/\s+/g, '-')}`;
    window.location.hash = newPath;
    // setCurrentPage will be updated by the hashchange listener
    closeMenu();
  }, [closeMenu]);


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage 
                  products={filteredProducts} 
                  selectedCategory={selectedCategory} 
                  onCategoryChange={handleCategoryChange} 
                />;
      case Page.ShopAll:
        return <ShopAllPage />;
      case Page.NewArrivals:
        return <NewArrivalsPage />;
      case Page.Collections:
        return <CollectionsPage />;
      case Page.Men:
        return <MenPage />;
      case Page.Women:
        return <WomenPage />;
      case Page.AboutUs:
        return <AboutUsPage />;
      case Page.ContactUs:
        return <ContactUsPage />;
      case Page.TrackOrder:
        return <TrackOrderPage />;
      case Page.MyAccount:
        return <MyAccountPage />;
      case Page.Settings:
        return <SettingsPage />;
      default:
        return <HomePage 
                  products={filteredProducts} 
                  selectedCategory={selectedCategory} 
                  onCategoryChange={handleCategoryChange} 
                />;
    }
  };

  return (
    <div className="bg-brand-background min-h-screen font-sans text-brand-primary">
      <Header onMenuToggle={toggleMenu} navigateTo={navigateTo} />
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} navigateTo={navigateTo} />
      
      <div 
        className={`max-w-7xl mx-auto transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'transform -translate-x-12 opacity-50 pointer-events-none' : ''
        }`}
      >
        {renderPage()}
      </div>
      
      <footer className="bg-brand-accent text-center py-6 mt-12">
        <p className="text-sm text-brand-primary">&copy; {new Date().getFullYear()} Kayans. All rights reserved.</p>
        <p className="text-xs text-gray-500 mt-1">Moroccan Heritage, Urban Style.</p>
      </footer>
    </div>
  );
};

export default App;