import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Discovery = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>say goodbye to guesswork</Text>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeftContainer}>
          <Text style={styles.desc}>want even more smudgtastic matches? Tap the button below to discover!</Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.discoverBtn}>
            <Text style={styles.discoverBtnText}>discover</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRightContainer}>
          <Image source={require("../../Assets/Images/stars.png")} style={styles.discoveryImage} />
        </View>
      </View>
    </View>
  )
}

export default Discovery