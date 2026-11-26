
import React from 'react';
import Button from './Button';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

const SpecialCollectionSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);

  return (
    <section className="bg-brand-accent rounded-xl shadow-lg p-6 md:p-10 my-8 md:my-12">
      <div className="container mx-auto px-0 md:px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-light text-brand-primary">
              Special <span className="font-bold text-brand-secondary">Winter Collection</span>
            </h2>
            <p className="text-gray-600 my-4 text-sm leading-relaxed">
              Discover our exclusive winter lineup, designed for warmth, comfort, and style. Limited edition pieces crafted with premium materials to elevate your winter wardrobe.
            </p>
            <div className="flex flex-wrap gap-2 my-5">
              {SIZES.map(size => (
                <Button 
                  key={size}
                  variant={selectedSize === size ? 'filter-active' : 'secondary'}
                  size="small"
                  onClick={() => setSelectedSize(size)}
                  className="w-12 h-10 flex items-center justify-center"
                >
                  {size}
                </Button>
              ))}
            </div>
            <Button variant="primary" size="medium" className="mt-4 px-8">
              Shop Collection
            </Button>
          </div>
          <div className="md:w-1/2 relative mt-6 md:mt-0">
            <img 
              src="https://picsum.photos/seed/winterjackets/500/350" 
              alt="Winter Collection Jackets" 
              className="rounded-lg shadow-xl w-full object-cover"
              width="500"
              height="350"
            />
            <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full transform rotate-[-10deg] shadow-md">
              -30%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialCollectionSection;
