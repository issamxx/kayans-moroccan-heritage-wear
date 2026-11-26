import React from 'react';
import Button from '../Button'; // Assuming your Button component is in ../Button

interface MockCollection {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string; // Could be a hash route to a specific collection page later
}

const mockCollections: MockCollection[] = [
  {
    id: '1',
    title: 'The Atlas Legacy',
    description: 'Inspired by the rugged beauty and ancient traditions of the Atlas Mountains. Earthy tones and resilient fabrics.',
    imageUrl: 'https://picsum.photos/seed/atlascollection/600/400',
    link: '#/collections/atlas-legacy',
  },
  {
    id: '2',
    title: 'Sahara Modern',
    description: 'Clean lines meet desert hues. A contemporary take on Saharan motifs, designed for the urban nomad.',
    imageUrl: 'https://picsum.photos/seed/saharacollection/600/400',
    link: '#/collections/sahara-modern',
  },
  {
    id: '3',
    title: 'Urban Souk Rhythms',
    description: 'Vibrant patterns and energetic designs reflecting the bustling life of Moroccan city souks.',
    imageUrl: 'https://picsum.photos/seed/soukcollection/600/400',
    link: '#/collections/urban-souk',
  },
  {
    id: '4',
    title: 'Coastal Breeze Collection',
    description: 'Light, airy fabrics and oceanic colors inspired by Morocco\'s serene coastlines. Perfect for relaxed elegance.',
    imageUrl: 'https://picsum.photos/seed/coastalcollection/600/400',
    link: '#/collections/coastal-breeze',
  }
];

const CollectionsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 min-h-[calc(100vh-250px)]">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-3">Our Curated Collections</h1>
        <p className="text-lg md:text-xl text-brand-secondary font-light">
          Discover unique selections inspired by the heart of Morocco.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {mockCollections.map((collection) => (
          <div 
            key={collection.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-64 md:h-72 w-full overflow-hidden">
              <img 
                src={collection.imageUrl} 
                alt={collection.title} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-colors duration-300"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold text-brand-primary mb-2">{collection.title}</h2>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{collection.description}</p>
              <Button 
                variant="primary" 
                size="medium" 
                className="w-full mt-auto"
                onClick={() => {
                  // For now, log to console. Later, this could navigate.
                  console.log(`Navigate to ${collection.link}`);
                  // window.location.hash = collection.link; // If you want immediate navigation
                }}
              >
                Explore Collection
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;