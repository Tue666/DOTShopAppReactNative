import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/Home/CategoriesScreen';
import ListCateScreen from '../screens/Home/ListCateScreen';

const Stack = createStackNavigator();

export default function CategoriesStack({ homeNavigation }) {
    return (
      <Stack.Navigator
        headerMode={false}
      >
          <Stack.Screen name="Categories" component={CategoriesScreen}></Stack.Screen>
          <Stack.Screen name="ListCategories" children={(props)=><ListCateScreen homeNavigation={homeNavigation} {...props}></ListCateScreen>}></Stack.Screen>
      </Stack.Navigator>
    )
}
