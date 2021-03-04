import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Pages/Home';
import {DetailsScreen} from '../Pages/Details';
import {ExplorarScreen} from '../Pages/Explorar';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <>
    <Navigator headerMode="none">
      <Screen name="Explorar" component={ExplorarScreen} />
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Details" component={DetailsScreen} />
    </Navigator>
  </>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
