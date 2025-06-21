import React, { useEffect, useRef } from 'react';

import fleur from '../assets/photo/fleur.png';
import cookiePng from '../assets/photo/cookie.png';
import gagoute from '../assets/photo/garygary.png';
import laine from '../assets/photo/laine.png';
import shoes from '../assets/photo/shoes.png';

export default function StickerAbout() {
  const stickersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Ajoute la classe pour l'animation
          } else {
            entry.target.classList.remove('animate'); // Retire la classe pour réinitialiser l'animation
          }
        });
      },
      { threshold: 0.5 } // Déclenche l'animation quand 50% du sticker est visible
    );

    stickersRef.current.forEach((sticker) => {
      if (sticker) observer.observe(sticker); // Vérifie que l'élément est valide
    });

    return () => {
      stickersRef.current.forEach((sticker) => {
        if (sticker) observer.unobserve(sticker); // Vérifie que l'élément est valide
      });
    };
  }, []);

  const stickers = [
    [fleur, "PLANTES & FLEURS"],
    [cookiePng, "CUISINER"],
    [gagoute, "GARY,MON CHAT"],
    [laine, "CROCHET & TRICOT"],
    [shoes, "RUNNING"]
  ];

return (
  <div className='w-100 m-12 sm:m-17 md:grid md:grid-cols-5 gap-4 md:w-180 md:gap-6 lg:gap-12 xl:w-300 lg:mt-50'>
    {stickers.map(([src, label], index) => (
      <div
        className='flex flex-row md:flex-col gap-x-4 md:gap-y-2 w-50 sm: lg:ml-6 sticker'
        key={index}
        ref={(el) => (stickersRef.current[index] = el)} 
      >
        <img src={src} alt={`sticker ${label}`} className='w-20  md:mt-6 md:ml-6 mx-auto lg:w-40' />
        <h3 className='mt-6  orbitron-uniquifier text-[20px] md:text-xs w-80 text-left lg:text-xs lg:pl-5  flex-nowrap'>{label}</h3>
      </div>
    ))}
  </div>
);
}