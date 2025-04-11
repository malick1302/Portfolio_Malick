import React from 'react';
import Collection from '../components/Collection';
import Malick from "../assets/photo/malbag.png"

const About = () => {
  return (
    <div id="Home">
      <div className="flex p-7 b mt-30 ">
        <div className="flex flex-col grow w-screen  justify-center md:flex-row md:gap-80 md:justify-center lg:justify-center relative ">
          <div className="profile-image-container w-screen flex lg:not-[]:space-x-12">
            <h1 className=' flex justify-center pt-30 text-5xl max-lg:hidden lg:w-60 lg:text-6xl lg:ml-13 lg:mt-22 xl:w-70 xl:text-8xl '>Qui </h1>

            <img
              src={Malick}
              alt="Photo de profil"
              className="flex justify-center w-40 ml-32 sm:w-45 md:w-50  lg:w-60 lg:ml-5 "
            />
                        <h1 className='flex justify-center pt-30 text-5xl max-lg:hidden lg:ml-8 lg:mt-22 lg:text-7xl xl:w-90 xl:text-8xl '>suis-je ? </h1>

            </div>

        </div>
      </div>
<div className='space-y-10 w-full lg:h-95 md:pr-30 '>
<h1 className='flex justify-center mt-10 text-3xl min-lg:hidden mr-12 ml-12 '>Qui suis-je ?</h1>

  <p className='sm:border sm:p-6 sm:rounded-2xl lg:ml-35 md:ml-20 m-7'>
    Je suis Malick, j'ai 28 ans, originaire de la Bretagne, je vis à Paris depuis maintenant 8 ans.
  Après un BTS Commerce International, une Licence dans le Marketing 
  et Management du Luxe et de la Mode, j'ai travaillé 6 ans dans le monde 
  du retail, jusqu'à occuper le poste de Store Manager pendant un peu plus de deux ans.
  En 2024, j'ai pris la grande décision de changer de vie professionnelle.
  J'ai intégré la Web@académie By EPITECH  en novembre 2024 pour devenir Developpeur Web.
  </p>
  <Collection />
  {/* <p>Je m'appelle Malick Baguiri, j'ai 28 ans, j'habite à Paris depuis 8 ans 
    et j'ai plusieurs passions dans la vie.
    Tout d'abord mon chat Gary, qui partage ma vie depuis 2 ans.
     J'aime beaucoup cuisiner (si vous me recrutez, 
    je vous promets de délicieux cookies et gâteaux).
     Il m'arrive aussi de courir, car sous un coup de tête avec
    des amis, on se dit que ça pourrait être sympa de 
    s'inscrire a un 10km, semi-marathon ou un trail de 19km..
    A chaque fin de course, on se dit "plus jamais"...jusqu'au prochain pari.
    Je suis passionné par les plantes. Je fais aussi beaucoup de tricot et crochet. 
    </p>

    <p>après avoir fais des études en commerce international et 
    une licence en Marketing et Management du Luxe et de la Mode, 
    je me suis lancé dans le retail. J'ai intégré la marque Camper 
    en tant que vendeur,
    avec de la determination, j'ai eu l'opporunité d'évoluer
     et d'acquérir le poste 
    d'Asistant Manager, qui, quelques moi après s'es transformé en Responsable 
    de boutique.</p>

    <p>5 ans et demis après avoir intégré Camper, je me suis dit 
      qu'il était temps pour moi de 
      découvrir autre chose, de nature curieuse, je me suis orienté 
      vers le développement web.
      qui est celon moi, un domaine stimulant, car au vu de ses diversités
       de languages, des métiers,
      et de son evolution, il est impossible de tout maitriser. Et
     être en perpetuel apprentissage, et pour quelqu'un comme moi,
     c'est très important.
    </p> */}
</div>
</div>
  )
}

export default About
