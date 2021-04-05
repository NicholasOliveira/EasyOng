import React, {useContext} from 'react';
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
  ImageUI,
} from './styles';
import SearchBar from '../../components/SearchBar';
import {OngsContext} from '../../Contexts/index';

export const ExploreScreen = ({navigation}: any) => {
  const {Ongs}: any = useContext(OngsContext);
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
      <ImageUI source={{uri: info?.item?.pictures[0]?.url}} />
      <ItemTitle>{info.item.name}</ItemTitle>
      <ItemDescription>{info.item.description.substr(0, 55)}</ItemDescription>
    </OngCardItem>
  );

  const displayOngs = Ongs;
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
                style={styles.horizontalOngList}
                contentContainerStyle={styles.contentContainerHorizontalOngList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={displayOngs}
                renderItem={renderHorizontalOngItem}
              />
              <ViewFlex>
                <TextView>Veja mais</TextView>
              </ViewFlex>
              <ListCardItem>
                {[...Ongs].sort().map((Ong: any) => (
                  <CardItem
                    onPress={() => navigateDetails(Ong.id)}
                    key={Ong.id}>
                    <ImageUI source={{uri: Ong?.pictures[0]?.url}} />
                    <ItemTitle>{Ong.name}</ItemTitle>
                    <ItemDescription>
                      {Ong.description.substr(0, 55)}
                    </ItemDescription>
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
    padding: 8,
    backgroundColor: 'transparent',
  },
  titleTopNavigation: {
    fontSize: 18,
    fontWeight: '700',
  },
  horizontalOngList: {
    backgroundColor: 'transparent',
  },
  contentContainerHorizontalOngList: {
    marginTop: -16,
    marginBottom: -16,
  },
});
