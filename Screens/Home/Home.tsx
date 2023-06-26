import { View, Text } from 'react-native'
import React from 'react';
import styles from './styles';
import HomeHeader from '../../Components/HomeHeader/HomeHeader';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  )
}

export default Home