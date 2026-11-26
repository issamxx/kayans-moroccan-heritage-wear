import React from 'react';
import HeroSection from '../HeroSection';
import FeaturedProductsSection from '../FeaturedProductsSection';
import SpecialCollectionSection from '../SpecialCollectionSection';
import { Product, ProductCategory } from '../../types';

interface HomePageProps {
  products: Product[];
  selectedCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

const HomePage: React.FC<HomePageProps> = ({ products, selectedCategory, onCategoryChange }) => {
  return (
    <main className="px-4 pt-6 pb-12 space-y-10 md:space-y-16">
      <HeroSection />
      <FeaturedProductsSection
        products={products}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      <SpecialCollectionSection />
    </main>
  );
};

export default HomePage;