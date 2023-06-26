import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import FontistoIcons from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Content = () => {

  const dummyData = [
    {
      id: 41,
      name: "nykaa",
      image: require("../../Assets/Images/product.png"),
      description: "nyx professional makeup",
    },
    {
      id: 98,
      name: "nykaa",
      image: require("../../Assets/Images/product.png"),
      description: "nyx professional makeup",
    },
    {
      id: 100,
      name: "nykaa",
      image: require("../../Assets/Images/product.png"),
      description: "nyx professional makeup",
    },
    {
      id: 79,
      name: "nykaa",
      image: require("../../Assets/Images/product.png"),
      description: "nyx professional makeup",
    },
  ]

  const ProductContainer = ({ product }: any) => (
    <TouchableOpacity style={styles.productContainer} activeOpacity={0.8}>
      <View style={styles.productMatchContainer}>
        <Image source={{uri: "https://img.icons8.com/offices/30/lightning-bolt.png"}} style={styles.matchIcon} />
        <Text style={styles.productMatchText}>super Match</Text>
      </View>
      <View style={styles.productTopContainer}>
        <Image source={product.image} style={styles.productImage} />
      </View>
      <View style={styles.productBottomContainer}>
        <View style={styles.productBottomTextContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View style={styles.productBottomButtonsContainer}>
          <TouchableOpacity style={styles.productBottomButton} activeOpacity={0.8}>
            <Text style={styles.productBottomButtonText}>view</Text>
          </TouchableOpacity>
            <FontistoIcons name="heart-alt" size={20} color="#000" style={styles.heart}/>
          <TouchableOpacity style={styles.productBottomOptionsButton} activeOpacity={0.8}>
            <MaterialCommunityIcons name="dots-horizontal" size={15} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topTextContainer}>
        <Text style={styles.text}>weekly top 4</Text>
        <Text style={styles.textSmall}>Perfect-for-you based on your goals!</Text>
      </View>
      <View style={styles.productsContainer}>
        {
          dummyData.map((product) => (
              <ProductContainer product={product} key={product.id} />
            )
          )
        }
      </View>
    </ScrollView>
  )
}

export default Content