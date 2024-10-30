import React from 'react';
import ComicItem from './ComicItem';

const ComicList = ({ comics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {comics.map((comic) => (
        <ComicItem key={comic.id} comic={comic} />
      ))}
    </div>
  );
};

export default ComicList;
