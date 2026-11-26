
import React from 'react';
import { Product } from '../types';
import Button from './Button';
import { ShoppingBagIcon } from './Icons'; // Re-using for Add to cart button

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-square w-full overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover" 
          width="300" 
          height="300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-brand-primary mb-1">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2 flex-grow">{product.description}</p>
        <p className="text-sm font-bold text-brand-primary mb-3">{product.price.toFixed(2)} MAD</p>
        <Button variant="outline" size="small" className="w-full flex items-center justify-center gap-2 mt-auto">
          <ShoppingBagIcon className="w-4 h-4" />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
