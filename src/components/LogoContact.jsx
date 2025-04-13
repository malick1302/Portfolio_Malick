import React from 'react';
import PhotoAbout from './PhotoAbout';

function LogoContact({img}) {
   return(

    <div className='img w-200 h-12 m-12 flex justify-end md:justify-start md:m-0  md:w-100 md:ml-25 md:mb-13'>
        <a href="https://www.linkedin.com/in/malick-baguiri/" target="_blank" rel="noopener noreferrer">
        <img src="src/assets/photo/linkedin.svg" alt="logo Linkedin" className='w-20 '></img>
        </a>
        <a href="https://github.com/malick1302" target="_blank" rel="noopener noreferrer">
        <img src="src/assets/photo/github.svg" alt="logo GitHub" className='w-20'></img>
        </a>
    </div>
   )
}

export default LogoContact;

