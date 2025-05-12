import React, { useState } from 'react';


import TwitVideo from "../assets/photo/twittervideo.mp4";
import Todo from '../assets/photo/todo.png';
import SpotiTel from '../assets/photo/spotifytel.png';
import SpotiPc from '../assets/photo/spotifypc.png';
import IpadSpot from '../assets/photo/ipadspotify.png';
import TelTodo from '../assets/photo/teltodo.png';



const Projects = () => {
  const [isTwitterVisible, setIsTwitterVisible] = useState(false);
  const [isSn4k3dVisible, setIsSn4k3dVisible] = useState(false);
  const [isSpotifyVisible, setIsSpotifyVisible] = useState(false);
  const [isToDoListVisible, setIsToDoListVisible] = useState(false);
  

  const toggleVisibility = (section) => {
    if (section === 'twitter') {
      setIsTwitterVisible(!isTwitterVisible);
    } else if (section === 'sn4k3d') {
      setIsSn4k3dVisible(!isSn4k3dVisible);
    } else if (section === 'spotify') {
      setIsSpotifyVisible(!isSpotifyVisible);
    } else if (section === 'todo') {
      setIsToDoListVisible(!isToDoListVisible);
    }
  };

  return (
    <div id="Project">
      <div className='mt-70'>
        <h1 className='text-4xl md:text-7xl mb-30 ml-7'>PROJETS</h1>     
        

        <div>
          <h2 
            className='flex justify-end border-b mr-2 ml-2 text-5xl mt-5 mb-20 cursor-pointer'
           
            onClick={() => toggleVisibility('twitter')}
          >
            TWITTER
          </h2>
          {isTwitterVisible && (
            <div>
                 <p>Twitter (Projet d’équipe)
Pendant 4 semaines, nous avons travaillé à 4 développeurs
 pour reproduire une version fonctionnelle du réseau social "X". 
 Ce projet nous a permis de mettre en pratique la gestion d’équipe, 
 la répartition des tâches et le développement full stack.
Technos : PHP, JavaScript, Tailwind CSS, Skeleton.
                 </p>
                 <video 
  controls 
  loop 
  playbackRate={2} 
>
 <source src={TwitVideo} type="video/mp4"/> 
      </video>

            </div>
          )}
        </div>
        <div>
          <h2 
            className='flex justify-end border-b mr-2 ml-2 text-5xl mt-5 mb-20 cursor-pointer'
           
            onClick={() => toggleVisibility('sn4k3d')}
          >
           SN4K3D
          </h2>
          {isSn4k3dVisible && (
            <div>
              <p>SN4K3D est un projet en Javascript. J'ai commencé à le créer pour comprendre comment
                fonctionne un canva.
                En deuxime plan, je suis très curieux de comprendre et d'apprendre la 3D.
                J'ai donc fait en sorte que mon snake et les aliments soient en 3D.
                Nous pouvons jouer sur ordinateur avec les flèches, ou sur téléphone.
</p>
<p>Vous voulez y jouer ? Voici le lien :  
<a href="https://sn4k3d.netlify.app/" className='text-white text-3xl font-bold' target="_blank"> SN4KED</a> </p>


            </div>
          )}
        </div>


        <div>
          <h2 
            className='flex justify-end border-b mr-2 ml-2 text-5xl mt-5 mb-20 cursor-pointer'
           
            onClick={() => toggleVisibility('spotify')}
          >
            SPOTIFY
          </h2>
          {isSpotifyVisible && (
            <div>
              <p>SpotSpot,
Développé en duo sur une semaine, SpotSpot est une application 
web connectée à l’API Spotify. Le projet nous a permis d’explorer
 la consommation d’API, la gestion des composants avec React, et l’utilisation 
 de Docker pour le déploiement local.
Fonctionnalités : inscription, connexion, recherche d’artistes, 
`navigation par genre, écoute de morceaux.
Technos utilisées : React, Docker, API Spotify.
</p>
<h3>Version Mobile</h3>
<img className='mt-4 w-70' src={SpotiTel}/>
<h3>Version Ordinateur</h3>
<img className='mt-4' src={SpotiPc}/>
<h3>Version Ipad</h3>
<img className='mt-4' src={IpadSpot}/>

            </div>
          )}
        </div>

        <div>
          <h2 
            className='flex justify-end border-b mr-2 ml-2 text-5xl mt-5 mb-20 cursor-pointer'
            onClick={() => toggleVisibility('todo')}
          >
            TO DO LIST
          </h2>
          {isToDoListVisible && (
            <div><p>TO DO LIST: 
              Ce projet m’a été confié lors d’un devoir sur table de 3 heures. Le défi : développer une to-do list fonctionnelle sans framework.
L’application permet d’ajouter des tâches, de les classer dans une colonne "À faire", de les déplacer une fois terminées, de les supprimer et d’enregistrer les données localement.
Un exercice formateur qui m’a permis de renforcer mes bases en JavaScript pur et en manipulation du DOM.
Technologies : JavaScript, HTML, CSS.
</p>
<img src={Todo} />
<h4 className='mt-4'>Version Téléphone</h4>
<img className='mt-4 w-70' src={TelTodo}/>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
