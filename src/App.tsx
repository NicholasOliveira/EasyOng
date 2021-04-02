import React, {useState, useEffect} from 'react';
import api from './services/api';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {AppNavigator} from './components/Navigation';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {
  AppContext,
  FavoritesContext,
  OngsContext,
  UsersContext,
} from './Contexts';
import * as Data from './data';
import {Favorites as FavoritesData, Users as UsersData} from './data/ongs';

export default () => {
  const [Ongs, setOngs] = useState([]);
  useEffect(() => {
    function getData() {
      api.get('ngos').then(({data}: any) => {
        setOngs(data?.content);
      });
    }
    getData();
  }, []);

  const [Favorites, setFavorites] = useState(FavoritesData);
  const [User, setUser] = useState(UsersData);
  return (
    <>
      <AppContext.Provider value={{...Data}}>
        <UsersContext.Provider value={{User, setUser}}>
          <OngsContext.Provider
            value={{
              Ongs,
              setOngs,
            }}>
            <FavoritesContext.Provider value={{Favorites, setFavorites}}>
              <IconRegistry icons={EvaIconsPack} />
              <ApplicationProvider {...eva} theme={eva.dark}>
                <AppNavigator />
              </ApplicationProvider>
            </FavoritesContext.Provider>
          </OngsContext.Provider>
        </UsersContext.Provider>
      </AppContext.Provider>
    </>
  );
};
