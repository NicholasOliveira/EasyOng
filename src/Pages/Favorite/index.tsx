import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {useTheme} from '@ui-kitten/components';
import {
  FavoriteItem,
  ItemTitle,
  ItemDescription,
  FavoriteButton,
  Container,
  ImageUI,
} from './styles';
import {FavoritesContext, UsersContext} from '../../Contexts';

export const FavoriteScreen = ({navigation}: any) => {
  const theme = useTheme();

  const {Favorites, setFavorites}: any = useContext(FavoritesContext);

  const {User}: any = useContext(UsersContext);

  const navigateDetails = (id: number) => {
    navigation.navigate('Details', {itemId: id});
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

  const RemoveIcon = (props: any) => (
    <Icon {...props} name="heart" fill={'#fff'} />
  );

  const handleRemoveFavorite = (idOng: any) => {
    const fav = Favorites[User.id].filter(
      (favorite: any) => favorite !== idOng,
    );
    setFavorites({
      [User.id]: [...fav],
    });
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const styles = StyleSheet.create({
    scrollView: {
      width: '100%',
      height: '100%',
      backgroundColor: theme['color-basic-800'],
    },
    Layout: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: theme['color-basic-800'],
    },
  });

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView>
        <TopNavigation
          title="Favoritos"
          alignment="center"
          accessoryLeft={BackAction}
        />
      </SafeAreaView>
      <Layout style={styles.Layout}>
        <Container>
          {Favorites[User.id] &&
            Favorites[User.id]?.map((favorite: any, index: any) => (
              <TouchableOpacity
                onPress={() => navigateDetails(favorite?.id)}
                key={index}>
                <FavoriteItem>
                  <ImageUI source={{uri: favorite?.pictures[0]?.url}} />
                  <FavoriteButton
                    onPress={() => handleRemoveFavorite(favorite)}
                    accessoryLeft={(props) => RemoveIcon({...props})}
                  />
                </FavoriteItem>
                <ItemTitle>{favorite.name}</ItemTitle>
                <ItemDescription>{favorite.description}</ItemDescription>
              </TouchableOpacity>
            ))}
        </Container>
      </Layout>
    </ScrollView>
  );
};
