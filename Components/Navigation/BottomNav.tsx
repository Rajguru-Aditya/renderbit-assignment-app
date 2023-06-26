import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home/Home';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import ProductDetails from '../../Screens/ProductDetails/ProductDetails';


const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      tabBar={
        (props) => (
          <View style={styles.tabBar}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Home')}
            >
              <Image source={require('../../Assets/Images/home.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Home')}
            >
              <Image source={require('../../Assets/Images/home.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Home')}
            >
              <Image source={require('../../Assets/Images/home.png')} />
            </TouchableOpacity>
          </View>
        )
      }
    >
      <Tab.Screen name="Home" component={Home} options={
        {
          headerShown: false,
        }
      } />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopColor:"#ccc",
    borderTopWidth: 1,
    height: 60,
    maxHeight: 60,
    backgroundColor: '#fff',
    bottom: 0,
    zIndex: 100,
  },
})

export default BottomNav;