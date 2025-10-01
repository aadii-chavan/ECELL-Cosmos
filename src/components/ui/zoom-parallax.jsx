import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

/**
 * ZoomParallax component (no Tailwind required)
 * - Accepts up to 7 images
 * - Scales layers at different speeds while scrolling
 * - Uses sticky viewport technique to keep the scene fixed while page scrolls
 */
export default function ZoomParallax({ images = [] }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  // Positions converted from the Tailwind demo to inline styles
  const indexToStyle = (index) => {
    switch (index) {
      case 1:
        return { top: '-30vh', left: '5vw', width: '35vw', height: '30vh' };
      case 2:
        return { top: '-10vh', left: '-25vw', width: '20vw', height: '45vh' };
      case 3:
        return { left: '27.5vw', width: '25vw', height: '25vh' };
      case 4:
        return { top: '27.5vh', left: '5vw', width: '20vw', height: '25vh' };
      case 5:
        return { top: '27.5vh', left: '-22.5vw', width: '30vw', height: '25vh' };
      case 6:
        return { top: '22.5vh', left: '25vw', width: '15vw', height: '15vh' };
      default:
        return { width: '25vw', height: '25vh' };
    }
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', height: '300vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        {images.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];
          const imgBox = indexToStyle(index);
          return (
            <motion.div
              key={index}
              style={{
                scale,
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  top: imgBox.top ?? undefined,
                  left: imgBox.left ?? undefined,
                  width: imgBox.width,
                  height: imgBox.height
                }}
              >
                <img
                  src={src || '/placeholder.svg'}
                  alt={alt || `Parallax image ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


