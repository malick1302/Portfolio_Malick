import React from 'react';
import CV from "../assets/photo/mbcv.pdf";

const DownloadCV = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <a
        href={CV} 
        download="CV Malick Baguiri" 
        className="border text-white py-2 px-19 rounded hover:bg-orange-900 transition duration-300 lg:text-7xl"
      >
        Télécharger mon CV
      </a>
    </div>
  );
};

export default DownloadCV;
