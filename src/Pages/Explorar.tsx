import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { Layout, TopNavigation, Button, Text } from '@ui-kitten/components';

import SearchBar from '../components/SearchBar';

export const ExplorarScreen = ({ navigation }:any) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  return (<>
  <StatusBar barStyle="dark-content" />
  <SafeAreaView>
  <TopNavigation title='Explorar' alignment='center'/>
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

<SearchBar />

          <Button onPress={navigateDetails}>OPEN DETAILS</Button>
            <View style={styles.sectionContainer}>
              <Text category='h1'>Explorar</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
       </Layout>
    </ScrollView>
  </SafeAreaView>
</>);
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#ffffff',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});