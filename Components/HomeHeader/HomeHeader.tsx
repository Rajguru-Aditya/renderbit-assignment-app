import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './styles'
import AntIcons from 'react-native-vector-icons/AntDesign'
import IonIcons from 'react-native-vector-icons/Ionicons'

const HomeHeader = () => {

  const [searchQuery, setSearchQuery] = useState('')

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topTextContainer}>
          <Text style={styles.headerTextSmall}>hi, aishwarya!</Text>
          <Text style={styles.headerTextLarge}>beauty starts here</Text>
        </View>
        <View>
          <TouchableOpacity>
            <IonIcons name="menu" size={25} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View  style={styles.searchBar}>
        <AntIcons name="search1" size={25} color="#999" />
        <TextInput style={styles.textInput} 
          clearButtonMode='always'
          autoCapitalize='none'
          placeholder="Search" placeholderTextColor="#999"
          value={searchQuery}
        />
      </View>
    </View>
  )
}

export default HomeHeader