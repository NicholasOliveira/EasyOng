import React, {useState} from 'react';
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
import {
  Ongs as OngsData,
  Favorites as FavoritesData,
  Users as UsersData,
} from './data/ongs';

export default () => {
  const [Favorites, setFavorites] = useState(FavoritesData);
  const [Ongs, setOngs] = useState(OngsData);
  const [User, setUser] = useState(UsersData);
  return (
    <>
      <AppContext.Provider value={{...Data}}>
        <UsersContext.Provider value={{User, setUser}}>
          <OngsContext.Provider value={{Ongs, setOngs}}>
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
