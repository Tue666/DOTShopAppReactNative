import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen'

const Stack = createStackNavigator();

export default function ProfileStack({ navigation, onClickRouteLogin }) {
  return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ProfileScreen" children={(props)=><ProfileScreen onClickRouteLogin={onClickRouteLogin} drawerNavigation={navigation} {...props}></ProfileScreen>} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      </Stack.Navigator>
  );
}
