
import React from 'react';
import { Product, ProductCategory } from '../types';
import { CATEGORIES } from '../constants';
import ProductCard from './ProductCard';
import Button from './Button';

interface FeaturedProductsSectionProps {
  products: Product[];
  selectedCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ products, selectedCategory, onCategoryChange }) => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-primary text-center mb-2">Featured Products</h2>
        <p className="text-center text-gray-500 mb-8">Discover our most popular and trending items this season</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              onClick={() => onCategoryChange(category)}
              variant={selectedCategory === category ? 'filter-active' : 'filter'}
              size="small"
              className="px-4 py-1.5 rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found for this category.</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
