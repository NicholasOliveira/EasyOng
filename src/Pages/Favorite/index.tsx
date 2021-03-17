import React from 'react';
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
} from './styles';
import {Ongs} from '../../../ongs';
const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

export const FavoriteScreen = ({route, navigation}: any) => {
  const {itemId} = route.params;
  const navigateBack = () => {
    navigation.goBack();
  };

  const ArrowIcon = (props: any) => (
    <Icon fill="#ffffff" name="chevron-right" {...props} />
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView>
      <TopNavigation
        title="Favoritos"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Layout style={styles.Layout}>
        <ImgView />
        <Container>
          <TextView>{Ongs[itemId].title}</TextView>
        </Container>
      </Layout>
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
