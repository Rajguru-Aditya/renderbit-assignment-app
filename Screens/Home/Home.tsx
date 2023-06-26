import { View, Text } from 'react-native'
import React from 'react';
import styles from './styles';
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import Categories from '../../Components/Categories/Categories';
import Content from '../../Components/Content/Content';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Categories />
      <Content />
    </View>
  )
}

export default Home