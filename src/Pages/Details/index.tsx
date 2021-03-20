import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Text,
} from '@ui-kitten/components';
import {
  ImgView,
  TextView,
  Container,
  OngCard,
  ItemTitle,
  ItemDescription,
  ListItemBox,
  FavoriteButton,
  ShareButton,
} from './styles';
import {OngsContext, FavoritesContext, UsersContext} from '../../Contexts';
const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

export const DetailsScreen = ({route, navigation}: any) => {
  const {itemId} = route.params;
  const navigateBack = () => {
    navigation.goBack();
  };

  const {Ongs}: any = useContext(OngsContext);

  const {Favorites, setFavorites}: any = useContext(FavoritesContext);
  const {User}: any = useContext(UsersContext);

  const active = Favorites['u' + User.id]?.includes(itemId);

  const handleFavorite = (idOng: any) => {
    setFavorites({
      ['u' + User.id]: Favorites['u' + User.id]
        ? [...Favorites['u' + User.id], idOng]
        : [idOng],
    });
  };

  const ArrowIcon = (props: any) => (
    <Icon fill="#ffffff" name="chevron-right" {...props} />
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const FavoriteIcon = (props: any) => (
    <Icon
      {...props}
      size="30"
      name="heart"
      fill={props.active ? '#f00946' : 'rgba(0, 0, 0, 0.54)'}
    />
  );

  const ShareIcon = (props: any) => (
    <Icon {...props} size="30" name="share" fill={'rgba(0, 0, 0, 0.54)'} />
  );
  return (
    <SafeAreaView>
      <TopNavigation
        title="Detalhe"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <ScrollView style={styles.scrollView}>
        <Layout style={styles.Layout}>
          <ImgView />
          <Container>
            <TextView>{Ongs[itemId].title}</TextView>
          </Container>
          <OngCard>
            <FavoriteButton
              onPress={() => !active && handleFavorite(itemId)}
              accessoryLeft={(props) => FavoriteIcon({...props, active})}
            />
            <ShareButton
              accessoryLeft={(props) => ShareIcon({...props, active: true})}
            />
            <ItemTitle>Descrição</ItemTitle>
            <ItemDescription>{Ongs[itemId].descriptionLong}</ItemDescription>
            <ListItemBox
              title={() => <Text>Transparência</Text>}
              accessoryRight={ArrowIcon}
            />
            <ListItemBox
              title={() => <Text>Informações de Contato</Text>}
              accessoryRight={ArrowIcon}
            />
          </OngCard>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  Layout: {
    marginBottom: 100,
    display: 'flex',
    flexDirection: 'column',
  },
});
