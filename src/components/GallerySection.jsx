import React from 'react';
import ScrollFloat from './ScrollFloat';
import ZoomParallax from './ui/zoom-parallax';

const GallerySection = () => {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <span className="section-kicker">Memories</span>
        <h2 className="section-title">
          <ScrollFloat>Gallery</ScrollFloat>
        </h2>
      </div>
      <ZoomParallax
        images={[
          { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80', alt: 'Architecture' },
          { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80', alt: 'City' },
          { src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80', alt: 'Abstract' },
          { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80', alt: 'Mountains' },
          { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80', alt: 'Minimal' },
          { src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80', alt: 'Ocean' },
          { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80', alt: 'Forest' }
        ]}
      />
    </section>
  );
};

export default GallerySection;


