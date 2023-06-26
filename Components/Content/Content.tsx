import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'

const Content = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Content</Text>
    </ScrollView>
  )
}

export default Content