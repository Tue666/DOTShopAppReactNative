import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/Home/CategoriesScreen';
import ListCateScreen from '../screens/Home/ListCateScreen';

const Stack = createStackNavigator();

export default function CategoriesStack({ homeNavigation, isDarkTheme }) {
  return (
    <Stack.Navigator
      headerMode={false}
    >
      <Stack.Screen name="Categories" children={(props) => <CategoriesScreen isDarkTheme={isDarkTheme} {...props}></CategoriesScreen>}></Stack.Screen>
      <Stack.Screen name="ListCategories" children={(props) => <ListCateScreen isDarkTheme={isDarkTheme} homeNavigation={homeNavigation} {...props}></ListCateScreen>}></Stack.Screen>
    </Stack.Navigator>
  )
}
