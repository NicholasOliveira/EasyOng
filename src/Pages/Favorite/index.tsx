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
} from './styles';
import {OngsContext, FavoritesContext, UsersContext} from '../../Contexts';

export const FavoriteScreen = ({navigation}: any) => {
  const theme = useTheme();
  const {Ongs}: any = useContext(OngsContext);

  const {Favorites, setFavorites}: any = useContext(FavoritesContext);

  const {User}: any = useContext(UsersContext);

  /*   useEffect(() => {
    setFavorites({});
  }, [setFavorites]); */

  const navigateDetails = (id: number) => {
    navigation.navigate('Details', {itemId: id});
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

  const RemoveIcon = (props: any) => (
    <Icon {...props} name="trash" fill={'#202020'} />
  );

  const handleRemoveFavorite = (idOng: any) => {
    const fav = Favorites['u' + User.id].filter(
      (favorite: any) => favorite !== idOng,
    );
    setFavorites({
      ['u' + User.id]: [...fav],
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
          {Favorites['u' + User.id] &&
            Favorites['u' + User.id]?.map((favorite: any, index: any) => (
              <TouchableOpacity
                onPress={() => navigateDetails(favorite)}
                key={index}>
                <FavoriteItem>
                  <FavoriteButton
                    onPress={() => handleRemoveFavorite(favorite)}
                    accessoryLeft={(props) => RemoveIcon({...props})}
                  />
                </FavoriteItem>
                <ItemTitle>{Ongs[favorite].title}</ItemTitle>
                <ItemDescription>
                  {Ongs[favorite].descriptionShort}
                </ItemDescription>
              </TouchableOpacity>
            ))}
        </Container>
      </Layout>
    </ScrollView>
  );
};
