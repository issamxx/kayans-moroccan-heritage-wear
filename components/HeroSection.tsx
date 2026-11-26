
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-brand-primary py-8 md:py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 text-left mb-8 md:mb-0 md:pr-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight">
            Embrace the Essence of <span className="font-bold">Morocco</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-wide my-2 text-brand-secondary">
            Wear Your Culture With Pride
          </h2>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Where Moroccan Heritage Meets Urban Style! <br />
            Kayans, a unique endeavor, celebrates timeless Moroccan artistry and culture using urban style fashion as its prime canvas. We are a community-driven brand, built to represent the MOROCCAN identity. Our designs reflect our complex history, our resilience, and our pride. From the Atlas Mountains to the Sahara sands, each piece tells a story of authenticity. Join us in this journey, wear your roots, carry your culture, express your identity with confidence and flair. Be one of the Kayanis whose actions echo louder.
          </p>
        </div>
        <div className="md:w-2/5 flex justify-center md:justify-end">
          <img 
            src="https://picsum.photos/seed/heromodel/350/500" 
            alt="Model wearing Kayans jacket" 
            className="rounded-lg shadow-xl object-cover w-[280px] h-[420px] sm:w-[320px] sm:h-[480px] md:w-[350px] md:h-[500px]"
            width="350"
            height="500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
