import React from 'react';
import {HomeScreen} from '../Pages/Home';
import {DetailsScreen} from '../Pages/Details';
import {ExplorarScreen} from '../Pages/Explorar';
import {FavoriteScreen} from '../Pages/Favorite';
import {NotificationScreen} from '../Pages/Notification';
import {ProfileScreen} from '../Pages/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigationTabs} from './BottomNavigation';

export const NavigatorHandle = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <>
      <Navigator tabBar={(props) => <BottomNavigationTabs {...props} />}>
        <Screen name="Home" component={ExplorarScreen} />
        <Screen name="Explorar" component={ExplorarScreen} />
        <Screen name="Favorite" component={FavoriteScreen} />
        <Screen name="Notification" component={NotificationScreen} />
        <Screen name="Profile" component={ProfileScreen} />
        <Screen name="Details" component={DetailsScreen} />
      </Navigator>
    </>
  );
};
