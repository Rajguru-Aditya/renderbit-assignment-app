import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import styles from './styles';
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import Categories from '../../Components/Categories/Categories';
import Content from '../../Components/Content/Content';
import Discovery from '../../Components/Discovery/Discovery';

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Categories />
      <ScrollView>
        <Content />
        <Discovery />
      </ScrollView>
    </View>
  )
}

export default Home