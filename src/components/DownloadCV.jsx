import React from 'react';

const DownloadCV = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <a
        href="src/assets/photo/cv.pdf"  
        download="CV Malick Baguiri" 
        className="border text-white py-2 px-19 rounded hover:bg-orange-900 transition duration-300 lg:text-7xl"
      >
        Télécharger mon CV
      </a>
    </div>
  );
};

export default DownloadCV;
