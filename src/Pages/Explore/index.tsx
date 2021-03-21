import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
  Layout,
  TopNavigation,
  Divider,
  Icon,
  List,
  Text,
} from '@ui-kitten/components';
import {
  Container,
  Box,
  BoxButton,
  TextView,
  ViewFlex,
  OngCardItem,
  CardItem,
  ListCardItem,
  ItemTitle,
  ItemDescription,
} from './styles';
import SearchBar from '../../components/SearchBar';
import {Ongs} from '../../data/ongs';

export const ExploreScreen = ({navigation}: any) => {
  const navigateDetails = (id: number) => {
    navigation.navigate('Details', {itemId: id});
  };
  const FilterIcon = (props: any) => (
    <Icon fill="#ffffff" name="options-2" {...props} />
  );

  const ChevronDown = (props: any) => (
    <Icon fill="#ffffff" name="chevron-down" {...props} />
  );

  const renderHorizontalOngItem = (info: any) => (
    <OngCardItem onPress={() => navigateDetails(info.item.id)}>
      <ItemTitle>{info.item.title}</ItemTitle>
      <ItemDescription>{info.item.descriptionShort}</ItemDescription>
    </OngCardItem>
  );

  const displayOngs = Ongs.filter((Ong) => Ong.level === 'Easy');
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <TopNavigation
          alignment="center"
          title={() => <Text style={styles.titleTopNavigation}>Explore</Text>}
        />
        <Divider />
        <Layout style={styles.layoutGlobal}>
          <ScrollView style={styles.scrollView}>
            <SearchBar />
            <Container>
              <Box>
                <BoxButton
                  onPress={navigateDetails}
                  accessoryRight={FilterIcon}>
                  Filtrar
                </BoxButton>
                <BoxButton
                  onPress={navigateDetails}
                  accessoryRight={ChevronDown}>
                  Ordenar
                </BoxButton>
              </Box>
              <ViewFlex>
                <TextView>Sugestões para você</TextView>
              </ViewFlex>

              <List
                style={styles.listBox}
                contentContainerStyle={styles.ongList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={displayOngs}
                renderItem={renderHorizontalOngItem}
              />
              <ViewFlex>
                <TextView>Veja mais</TextView>
              </ViewFlex>
              <ListCardItem>
                {Ongs.map((Ong) => (
                  <CardItem
                    onPress={() => navigateDetails(Ong.id)}
                    key={Ong.id}>
                    <ItemTitle>{Ong.title}</ItemTitle>
                    <ItemDescription>{Ong.descriptionShort}</ItemDescription>
                  </CardItem>
                ))}
              </ListCardItem>
            </Container>
          </ScrollView>
        </Layout>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  listBox: {
    backgroundColor: 'transparent',
  },
  titleTopNavigation: {
    fontSize: 18,
    fontWeight: '700',
  },
  ongList: {
    marginVertical: 8,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  safeArea: {
    flex: 1,
  },
  layoutGlobal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    padding: 10,
    backgroundColor: 'transparent',
  },
});
