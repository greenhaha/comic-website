import React, { useEffect } from 'react';
import { useComicStore } from '../store/comicStore';
import ComicList from '../components/ComicList';

const HomePage = () => {
  const { comics, fetchComics } = useComicStore();

  useEffect(() => {
    fetchComics();
  }, [fetchComics]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Comics</h1>
      <ComicList comics={comics} />
    </div>
  );
};

export default HomePage;
