import React from 'react';
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
} from '@ui-kitten/components';
import {Container, Box, BoxButton, TextView, ViewFlex} from './styles';
import SearchBar from '../../components/SearchBar';
export const ExplorarScreen = ({navigation}: any) => {
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
      title: 'Chest',
      duration: 55,
      level: 'Easy',
      image: '',
    },
    {
      title: 'Chest',
      duration: 55,
      level: 'Easy',
      image: '',
    },
    {
      title: 'Chest',
      duration: 55,
      level: 'Easy',
      image: '',
    },
    {
      title: 'Chest',
      duration: 55,
      level: 'Easy',
      image: '',
    },
  ];

  const displayOngs = Ongs.filter((Ong) => Ong.level === 'Easy');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <TopNavigation title="Explorar" alignment="center" />
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
            </Container>
            <List
              style={styles.listBox}
              contentContainerStyle={styles.ongList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={displayOngs.reverse()}
              renderItem={renderHorizontalOngItem}
            />
          </ScrollView>
        </Layout>
      </SafeAreaView>
    </>
  );
};
const OngCard = (props: any) => <Text {...props}>Olá</Text>;
const renderHorizontalOngItem = (info: any) => (
  <OngCard style={styles.OngCard} Ong={info.item} />
);

const styles = StyleSheet.create({
  listBox: {
    backgroundColor: 'transparent',
  },
  ongList: {
    marginVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: 'transparent',
  },
  OngCard: {
    width: 256,
    margin: 15,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
    borderRadius: 8,
    color: '#ffffff',
    padding: 24,
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
