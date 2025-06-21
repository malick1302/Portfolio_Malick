import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StickerAbout from '../components/StickerAbout';
import Malick from "../assets/photo/malbag.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
    AOS.refresh(); 
  }, []);

  return (
    <div id="Home">
      <div className="flex p-7 b mt-30 ">
        <div className="flex flex-col grow w-screen justify-center md:flex-row md:gap-80 md:justify-center lg:justify-center relative ">
          <div className="profile-image-container w-screen flex lg:not-[]:space-x-12 lg:pr-15  xl:pl-30">
            <h1 className='flex justify-center pt-30 text-5xl max-lg:hidden lg:w-60 lg:text-5xl lg:ml-13 lg:mt-22 xl:w-70 xl:text-7xl orbitron-uniquifier'>Qui</h1>
            <img
              src={Malick}
              alt="Photo de profil"
              className="flex justify-center w-40 ml-32 sm:w-45 md:w-50 lg:w-60 lg:ml-5"
            />
            <h1 className='flex justify-center pt-30 text-5xl max-lg:hidden lg:ml-8 lg:mt-22 lg:text-5xl  xl:text-7xl orbitron-uniquifier'>suis-je ?</h1>
          </div>
        </div>
      </div>
      <div className='space-y-10 w-full lg:h-95'>
        <h1 className='flex justify-center mt-6 text-3xl min-lg:hidden mr-12 ml-12 orbitron-uniquifier'>Qui suis-je ?</h1>
        <p className=' sm:p-6 sm:rounded-2xl lg:ml-35 md:ml-20 m-7 orbitron-uniquifier'>
          Hello, moi c’est Malick, 29 ans, Breton de naissance, Parisien d’adoption depuis 8 ans.
          Mon parcours ? Un début dans le commerce international, une spécialisation dans le marketing du luxe et de la mode,
          puis 6 années dans l’univers du retail, dont 2 en tant que Store Manager.
          En 2024, j’ai décidé de prendre un virage à 180°. Besoin de renouveau, envie de construire, de créer autrement.
          J’ai donc intégré la Web@cadémie by EPITECH pour me former au développement web, un domaine qui m’anime et me challenge chaque jour un peu plus.
          Aujourd’hui, je construis des projets tech avec la même exigence que j’avais dans le retail : sens du détail et efficacité.
        </p>
        <h2  className='flex justify-end border-b mr-2 ml-2 text-5xl mt-5 mb-20 cursor-pointer mt-30 md:mt-50'> MES PASSIONS </h2>
        <StickerAbout />
        <div data-aos="flip-up"></div>
      </div>
    </div>
  );
};

export default About;