import React from 'react';

export default function PhotoAbout({ img, title, caption }) {
  return (
    <div className="flex flex-col items-center md:p-0">
      <img
        src={img}
        alt={title || "Image"}
        className="w-full h-64 sm:h-80 sm:w-100 md:h-90 md:w-110  object-cover rounded-lg border-3 mb-4" 
      />
      {title && <h3 className="text-xl font-semibold mt-2">{title}</h3>}
      {caption && <p className="text-center text-gray-600 mt-2">{caption}</p>}
    </div>
  );
}
