import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ItemsByCatagory from './screens/ItemsByCatagory';
const stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="ItemsByCatagory"
          component={ItemsByCatagory}
          options={{headerShown: true}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
