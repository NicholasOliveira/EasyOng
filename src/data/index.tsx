import {useState} from 'react';
import {Ongs as OngsData, Favorites as FavoritesData} from './ongs';

const DataOngs = () => {
  const [Ongs, setOngs] = useState(OngsData);
  return {Ongs, setOngs};
};

const DataFavorites = () => {
  const [Favorites, setFavorites] = useState(FavoritesData);
  return {Favorites, setFavorites};
};

export {DataOngs, DataFavorites};
