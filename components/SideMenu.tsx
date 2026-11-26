import React from 'react';
import { CloseIcon } from './Icons';
import { MENU_ITEMS_CONFIG, Page } from '../constants';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigateTo: (page: Page) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose, navigateTo }) => {
  // No need to check isOpen here, App.tsx handles conditional rendering of the whole component.
  // However, the transform CSS relies on isOpen to slide in/out.

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, pageKey: Page) => {
    e.preventDefault(); 
    navigateTo(pageKey);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div 
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-brand-background shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-title"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-brand-accent">
            <h2 id="menu-title" className="text-xl font-semibold text-brand-primary">Menu</h2>
            <button 
              onClick={onClose} 
              aria-label="Close menu"
              className="text-brand-primary p-2 hover:bg-brand-accent rounded-full"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
            {MENU_ITEMS_CONFIG.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.key)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-brand-primary hover:bg-brand-accent hover:text-brand-secondary transition-colors duration-150"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="p-4 border-t border-brand-accent">
             <p className="text-xs text-gray-500 text-center">&copy; {new Date().getFullYear()} Kayans</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;