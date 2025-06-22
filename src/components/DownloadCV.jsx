import React from 'react';
// import CV from "../assets/photo/MBCV1.pdf";
import CV from "../assets/photo/malickbaguiriCV.pdf";

const DownloadCV = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <a
        href={CV} 
        download="CV Malick Baguiri" 
        className="border text-[9px] text-white m-1 py-2 px-19 rounded hover:bg-orange-900 transition duration-300 lg:text-4xl"
      >
        Télécharger mon CV
      </a>
    </div>
  );
};

export default DownloadCV;
