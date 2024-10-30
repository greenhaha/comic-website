import React from 'react';

const ComicItem = ({ comic }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{comic.title}</h2>
      <p className="text-gray-700 mb-4">{comic.description}</p>
      <img src={comic.image} alt={comic.title} className="w-full h-auto" />
    </div>
  );
};

export default ComicItem;
