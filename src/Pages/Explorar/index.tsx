import React, {Children} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {
  Layout,
  TopNavigation,
  Divider,
  Icon,
  List,
  Text,
  useTheme,
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
} from './styles';
import SearchBar from '../../components/SearchBar';
export const ExplorarScreen = ({navigation}: any) => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const FilterIcon = (props: any) => (
    <Icon fill="#ffffff" name="options-2" {...props} />
  );

  const ChevronDown = (props: any) => (
    <Icon fill="#ffffff" name="chevron-down" {...props} />
  );

  const Ongs = [
    {
      title: 'Chest1',
      duration: 55,
      level: 'Easy',
      image: '',
    },
    {
      title: 'Chest2',
      duration: 55,
      level: 'Easy',
      image: '',
    },
    {
      title: 'Chest3',
      duration: 55,
      level: 'Easy',
      image: '',
    },
    {
      title: 'Chest4',
      duration: 55,
      level: 'Easy',
      image: '',
    },
  ];

  const displayOngs = Ongs.filter((Ong) => Ong.level === 'Easy');
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme['color-basic-800']}
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.safeArea}>
        <TopNavigation
          alignment="center"
          title={() => <Text style={styles.titleTopNavigation}>Explorar</Text>}
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
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
              </ListCardItem>
            </Container>
          </ScrollView>
        </Layout>
      </SafeAreaView>
    </>
  );
};

const renderHorizontalOngItem = (info: any) => (
  <OngCardItem>{info.item.title}</OngCardItem>
);

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
