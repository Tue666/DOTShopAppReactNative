import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import HistoryScreen from '../screens/Profile/HistoryScreen';
import OrderDetailScreen from '../screens/Profile/OrderDetailScreen';
import SupportScreen from '../screens/Profile/SupportScreen';
import FavoriteScreen from '../screens/Profile/FavoriteScreen';
import DetailScreen from '../screens/Home/DetailScreen';
import { HeaderDetail } from '../shared/header';
import { IMAGE_URL } from '../core/config';


const Stack = createStackNavigator();

export default function ProfileStack({ isDarkTheme, token, user, onEditUserHandler, navigation, onClickRouteLogin, onLoadCartHandler, iconBadge, onClickUpdateIconBadge, listHistory, listFavorite, onLoadFavorite }) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProfileScreen" children={(props) => <ProfileScreen isDarkTheme={isDarkTheme} token={token} user={user} onClickRouteLogin={onClickRouteLogin} drawerNavigation={navigation} {...props}></ProfileScreen>} />
      <Stack.Screen name="EditProfileScreen" children={(props) => <EditProfileScreen isDarkTheme={isDarkTheme} onEditUserHandler={onEditUserHandler} onClickRouteLogin={onClickRouteLogin} drawerNavigation={navigation} {...props}></EditProfileScreen>} />
      <Stack.Screen name="FavoriteScreen" children={(props) => <FavoriteScreen isDarkTheme={isDarkTheme} token={token} listFavorite={listFavorite} onLoadFavorite={onLoadFavorite} {...props}></FavoriteScreen>} />
      <Stack.Screen name="HistoryScreen" children={(props) => <HistoryScreen isDarkTheme={isDarkTheme} token={token} listHistory={listHistory} {...props}></HistoryScreen>} />
      <Stack.Screen name="OrderDetailScreen" children={(props) => <OrderDetailScreen isDarkTheme={isDarkTheme} token={token} {...props}></OrderDetailScreen>} />
      <Stack.Screen name="SupportScreen" children={(props) => <SupportScreen isDarkTheme={isDarkTheme} {...props}></SupportScreen>} />
      <Stack.Screen
        name="Detail"
        children={(props) => <DetailScreen isDarkTheme={isDarkTheme} token={token} onLoadCartHandler={onLoadCartHandler} onClickUpdateIconBadge={onClickUpdateIconBadge} onLoadFavorite={onLoadFavorite} {...props} ></DetailScreen>}
        options={({ route }) => ({
          headerShown: true,
          headerTintColor: isDarkTheme ? '#fff' : 'black',
          headerTitle: () => <HeaderDetail isDarkTheme={isDarkTheme} iconBadge={iconBadge} drawerNavigation={navigation} param={route.params}></HeaderDetail>,
          headerBackground: () =>
            isDarkTheme ?
              <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: IMAGE_URL + 'headerBlack.png' }}></Image>
              :
              <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: IMAGE_URL + 'headerWhite.png' }}></Image>
        })}
      >
      </Stack.Screen>
    </Stack.Navigator>
  );
}
