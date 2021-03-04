import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Pages/Home';
import {DetailsScreen} from '../Pages/Details';
import {ExplorarScreen} from '../Pages/Explorar';
import {
  useTheme,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

const {Navigator, Screen} = createStackNavigator();
const HomeNavigator = () => {
  const theme = useTheme();
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme['color-basic-800']}
        barStyle="dark-content"
      />
      <Navigator headerMode="none">
        <Screen name="Explorar" component={ExplorarScreen} />
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Details" component={DetailsScreen} />
      </Navigator>
    </>
  );
};

const HomeIcon = (props: any) => <Icon {...props} name="home" />;
const FavoriteIcon = (props: any) => <Icon {...props} name="heart" />;
const AddIcon = (props: any) => <Icon {...props} name="plus-circle" />;
const BellIcon = (props: any) => <Icon {...props} name="bell" />;
const ProfileIcon = (props: any) => <Icon {...props} name="person" />;

export const BottomNavigationTabs = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}>
      <BottomNavigationTab title="Explorar" icon={HomeIcon} />
      <BottomNavigationTab title="Favoritos" icon={FavoriteIcon} />
      <BottomNavigationTab title="" icon={AddIcon} />
      <BottomNavigationTab title="Notificações" icon={BellIcon} />
      <BottomNavigationTab title="Perfil" icon={ProfileIcon} />
    </BottomNavigation>
  );
};

export const AppNavigator = () => (
  <>
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
    <BottomNavigationTabs />
  </>
);
