import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BottomNav from '../Components/Navigation/BottomNav'

const Navigation = () => {
  return (
    <View style={styles.container}>
      <BottomNav />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#FCFCFD',
  }
})

export default Navigation