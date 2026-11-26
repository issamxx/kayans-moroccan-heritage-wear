import React from 'react';
import { MenuIcon, SearchIcon, ShoppingBagIcon } from './Icons';
import { Page } from '../constants'; // Import Page enum

interface HeaderProps {
  onMenuToggle: () => void;
  navigateTo: (page: Page) => void; // Add navigateTo prop
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, navigateTo }) => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateTo(Page.Home);
  };
  
  return (
    <header className="bg-brand-background sticky top-0 z-30 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button 
          onClick={onMenuToggle} 
          aria-label="Open menu" 
          aria-expanded="false" 
          aria-controls="side-menu"
          className="text-brand-primary p-2"
        >
          <MenuIcon className="w-7 h-7" />
        </button>
        
        <div className="text-center">
          <a href="#/" onClick={handleLogoClick} className="inline-block" aria-label="Kayans Home">
            <span className="font-logo text-3xl font-bold text-brand-primary relative">
              kayan<span className="text-lg absolute -top-1 right-0 transform -translate-x-1/2">s</span>
              <span className="absolute -top-3 right-0 block w-2 h-0.5 bg-brand-primary transform -rotate-12 translate-x-[-5px]"></span>
            </span>
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <button aria-label="Search" className="text-brand-primary p-2">
            <SearchIcon className="w-6 h-6" />
          </button>
          <button aria-label="Shopping bag" className="text-brand-primary p-2">
            <ShoppingBagIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;