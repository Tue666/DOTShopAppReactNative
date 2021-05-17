import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import HistoryScreen from '../screens/Profile/HistoryScreen';
import OrderDetailScreen from '../screens/Profile/OrderDetailScreen';

const Stack = createStackNavigator();

export default function ProfileStack({ isDarkTheme, token, user, onEditUserHandler, navigation, onClickRouteLogin, listHistory }) {
  return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ProfileScreen" children={(props)=><ProfileScreen isDarkTheme={isDarkTheme} token={token} user={user} onClickRouteLogin={onClickRouteLogin} drawerNavigation={navigation} {...props}></ProfileScreen>} />
        <Stack.Screen name="EditProfileScreen" children={(props)=><EditProfileScreen isDarkTheme={isDarkTheme} onEditUserHandler={onEditUserHandler} onClickRouteLogin={onClickRouteLogin} drawerNavigation={navigation} {...props}></EditProfileScreen>} />
        <Stack.Screen name="HistoryScreen" children={(props)=><HistoryScreen isDarkTheme={isDarkTheme} token={token} listHistory={listHistory} {...props}></HistoryScreen>} />
        <Stack.Screen name="OrderDetailScreen" children={(props)=><OrderDetailScreen isDarkTheme={isDarkTheme} token={token} {...props}></OrderDetailScreen>} />
      </Stack.Navigator>
  );
}
