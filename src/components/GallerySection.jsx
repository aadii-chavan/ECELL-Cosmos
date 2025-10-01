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
          { src: '/gallery/1.jpg', alt: 'Gallery 1' },
          { src: '/gallery/2.jpeg', alt: 'Gallery 2' },
          { src: '/gallery/3.jpg', alt: 'Gallery 3' },
          { src: '/gallery/4.jpg', alt: 'Gallery 4' },
          { src: '/gallery/5.png', alt: 'Gallery 5' },
          { src: '/gallery/6.jpg', alt: 'Gallery 6' },
          { src: '/gallery/7.jpg', alt: 'Gallery 7' }
        ]}
      />
    </section>
  );
};

export default GallerySection;


