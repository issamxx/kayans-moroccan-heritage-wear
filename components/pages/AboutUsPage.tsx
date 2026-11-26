import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 min-h-[calc(100vh-250px)]">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-3">About Kayans</h1>
        <p className="text-lg md:text-xl text-brand-secondary font-light">
          Weaving Moroccan Heritage into the Fabric of Modern Life.
        </p>
      </header>

      <article className="max-w-3xl mx-auto space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-brand-primary mb-3">Our Mission: Culture, Worn With Pride</h2>
          <p>
            At Kayans, we believe that clothing is more than just fabric; it's a canvas for identity, a testament to heritage, and a celebration of culture. Our mission is to empower you to "Wear Your Culture With Pride" by offering unique, high-quality apparel that beautifully marries the rich tapestry of Moroccan artistry with the dynamic pulse of contemporary urban style. We're not just selling clothes; we're fostering a movement of cultural appreciation and self-expression.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-primary mb-3">The Spark of Inspiration</h2>
          <p>
            Kayans was born from a deep love for Morocco's vibrant souks, its intricate Zellij tilework, the earthy tones of the Atlas Mountains, and the stories whispered through generations. We saw an opportunity to translate this profound cultural wealth into fashion that resonates with the global citizen – individuals who value authenticity, craftsmanship, and a connection to something meaningful. Each design is a dialogue between the past and the present, tradition and innovation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-primary mb-3">Our Guiding Philosophy</h2>
          <div className="space-y-4">
            <p>
              <strong className="text-brand-secondary">Authenticity:</strong> Every Kayans piece is infused with genuine Moroccan spirit. We meticulously research traditional motifs, patterns, and stories, reinterpreting them for a modern aesthetic without losing their soul.
            </p>
            <p>
              <strong className="text-brand-secondary">Craftsmanship & Quality:</strong> We are committed to excellence. From selecting premium materials that feel as good as they look, to ensuring ethical production practices, quality is paramount in every stitch and seam.
            </p>
            <p>
              <strong className="text-brand-secondary">Community:</strong> Kayans is more than a brand; it's a community – the "Kayanis." We aim to connect like-minded individuals who share a passion for culture, style, and making a statement. We are built to represent the MOROCCAN identity, where actions echo louder.
            </p>
            <p>
              <strong className="text-brand-secondary">Storytelling:</strong> We believe fashion has the power to tell stories. Our collections are narratives woven from Moroccan heritage, designed to inspire curiosity, conversation, and connection.
            </p>
          </div>
        </section>
        
        <section className="bg-brand-accent p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-brand-primary mb-3 text-center">More Than Just Apparel</h2>
            <p className="text-center italic text-brand-secondary">
             "Kayans is an invitation to explore, to connect, and to proudly showcase the vibrant threads of your own story, intertwined with the timeless elegance of Moroccan heritage. It's where your roots meet your style."
            </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brand-primary mb-3">Join the Kayans Journey</h2>
          <p>
            We invite you to explore our collections and discover pieces that speak to you. Become a part of the Kayans family and help us celebrate the enduring beauty of Moroccan culture in a world that's always evolving. Wear your Kayans not just as clothing, but as a badge of honor, a piece of art, and a connection to a vibrant legacy.
          </p>
          <p className="mt-4">
            Thank you for being a part of our story. Together, let's make our voices, and our styles, echo.
          </p>
        </section>
      </article>
    </div>
  );
};

export default AboutUsPage;
