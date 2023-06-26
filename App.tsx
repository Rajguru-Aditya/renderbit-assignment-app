/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import Home from './Screens/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
        <Navigation />
      {/* <Home /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFD',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;
