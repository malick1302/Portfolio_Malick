import React, { useState } from 'react';

const Projects = () => {
  const [isTwitterVisible, setIsTwitterVisible] = useState(false);
  const [isSpotifyVisible, setIsSpotifyVisible] = useState(false);
  const [isToDoListVisible, setIsToDoListVisible] = useState(false);

  const toggleVisibility = (section) => {
    if (section === 'twitter') {
      setIsTwitterVisible(!isTwitterVisible);
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
                 <p>Twitter est un projet effectué en 4 semaines avec une team de 4. 
                  L'objectif était de tenter de reproduire le célèbre réseau social 
                  "X". 
                  Les technologies utilisées : PHP, Javascript, Tailwind, Skeleton.
                 </p>
                 <video 
  controls 
  loop 
  playbackRate={2} 
>
 <source src="src/assets/photo/twittervideo.mp4" type="video/mp4"/> 
      </video>

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
              <p>SpotSpot eest projet d'une durée de  une semaine en team de 2.
  Le principe était de savoir travailler avec une API et Docker.
  Il fallait faire une inscription, une connexion, une page qui affiche
  les artistes, les albums, les genres musicaux. Il fallait pouvoir écouter 
  les sons de chaque artistes, faire un ebarre de recherche.
  Les technologies utilisées sont : REACT, Docker, une API Spotify. 
</p>
<h3>Version Mobile</h3>
<img className='mt-4 w-70' src='/src/assets/photo/SPOTIFY14px.png'/>
<img className='mt-4 w-70' src='/src/assets/photo/spotifytel.png'/>
<h3>Version Ordinateur</h3>
<img className='mt-4' src='/src/assets/photo/spotifypc.png'/>
<h3>Version Ipad</h3>
<img className='mt-4' src='/src/assets/photo/ipadspotify.png'/>

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
            <div><p>TO DO LIST est un projet qui nous a été donné à l'école lors d'un devoir sur table de 3h.
  L'objectif était de créer une barre de texxte afin de noter les taches a effectuer, de les classer dans la colonne "A faire", 
  puis une fois terminé, que la tâche puisse se deplacer dans la colonne "Terminé", 
  ensuite puisse être supprimée. Il fallait également créer un bouton qui 
  nous permettait d'enregistrer les taches dans le tableau, en passant 
  par le localhost.

  Les technos : JAVASCRIPT HTML, CSS
</p>
<img src='/src/assets/photo/todo.png' />
<h4 className='mt-4'>Version Téléphone</h4>
<img className='mt-4 w-70' src='/src/assets/photo/teltodo.png'/>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
