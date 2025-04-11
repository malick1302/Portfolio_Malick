import React, { useEffect } from 'react';
import { gsap } from 'gsap';


import html5Logo from '../assets/photo/html-5.svg';
import cssLogo from '../assets/photo/css-alt.svg';
import jsLogo from '../assets/photo/js.svg';
import reactLogo from '../assets/photo/react.svg';
import githubLogo from '../assets/photo/github.svg';
import mysqlLogo from '../assets/photo/mysql.svg';
import tailwindLogo from '../assets/photo/tailwind.svg';
import bootstrapLogo from '../assets/photo/bootstrap.svg';
import sassLogo from '../assets/photo/sass.svg';

export default function LogoCompet() {

  useEffect(() => {
    const logos = document.querySelectorAll(".logo");

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');

          gsap.to(entry.target, {
            x: () => Math.random() * 500 - 250,
            y: () => Math.random() * 500 - 250,
            rotation: () => Math.random() * 360,
            duration: 1,
            ease: "power1.inOut",
            onComplete: () => {
              gsap.to(entry.target, {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 1,
                ease: "power1.inOut",
                onComplete: () => {
                  entry.target.classList.remove('animated');
                }
              });
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    logos.forEach((logo) => observer.observe(logo));

    return () => {
      logos.forEach((logo) => observer.unobserve(logo));
    };
  }, []);

  return (
    <div className='w-100 m-12 grid grid-cols-2 sm:m-17 md:grid-cols-3 gap-4 md:w-180 md:gap-6 lg:gap-12 lg:ml-30 xl:ml-17 xl:w-300' >
      {[
        [html5Logo, "HTML"],
        [cssLogo, "CSS"],
        [jsLogo, "JAVASCRIPT"],
        [reactLogo, "REACT"],
        [githubLogo, "GITHUB"],
        [mysqlLogo, "MYSQL"],
        [tailwindLogo, "TAILWIND"],
        [bootstrapLogo, "BOOTSTRAP"],
        [sassLogo, "SASS"]
      ].map(([src, label], index) => (
        <div className='flex gap-y-2 w-50 sm: lg:ml-6' key={index}>
          <img src={src} alt={`logo ${label}`} className='logo w-20' />
          <h3 className='mt-6 ml-6 max-md:hidden'>{label}</h3>
        </div>
      ))}
    </div>
  );
}
