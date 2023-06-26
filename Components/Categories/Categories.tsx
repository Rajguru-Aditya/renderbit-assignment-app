import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import styles from './styles';

const Categories = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.category}>
        <Image source={require("../../Assets/Images/lipstick.png")} style={styles.categoryIcon} />
        <Text style={styles.text}>makeup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Image source={require("../../Assets/Images/skincare.png")} style={styles.categoryIcon} />
        <Text style={styles.text}>skincare</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Categories