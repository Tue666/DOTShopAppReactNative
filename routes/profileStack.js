import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import HistoryScreen from '../screens/Profile/HistoryScreen';

const Stack = createStackNavigator();

export default function ProfileStack({ token, user, onEditUserHandler, navigation, onClickRouteLogin }) {
  return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ProfileScreen" children={(props)=><ProfileScreen token={token} user={user} onClickRouteLogin={onClickRouteLogin} drawerNavigation={navigation} {...props}></ProfileScreen>} />
        <Stack.Screen name="EditProfileScreen" children={(props)=><EditProfileScreen onEditUserHandler={onEditUserHandler} onClickRouteLogin={onClickRouteLogin} drawerNavigation={navigation} {...props}></EditProfileScreen>} />
        <Stack.Screen name="HistoryScreen" children={(props)=><HistoryScreen token={token} {...props}></HistoryScreen>} />
      </Stack.Navigator>
  );
}
