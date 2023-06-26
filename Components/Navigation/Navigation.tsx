import { NavigationContainer } from '@react-navigation/native';
import Home from '../../Screens/Home/Home';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationNew from '../../Screens/Navigation';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Navigation" component={NavigationNew} options={
            {
              headerShown: false,
            }
          } />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
})

export default Navigation;