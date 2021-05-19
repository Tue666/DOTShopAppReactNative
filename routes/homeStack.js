import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { HeaderAbout, HeaderDetail, HeaderHome, HeaderTop } from '../shared/header';
import DetailScreen from '../screens/Home/DetailScreen';
import AboutScreen from '../screens/Home/AboutScreen';
import ImageScreen from '../screens/Shared/ImageScreen';
import { IMAGE_URL } from '../core/config';
import TopProductScreen from '../screens/Home/TopProductScreen';

const Stack = createStackNavigator();

export default function HomeStack({ isDarkTheme, navigation, iconBadge, onClickUpdateIconBadge, onLoadCartHandler, token }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackground: () =>
                    isDarkTheme ?
                        <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: IMAGE_URL + 'headerBlack.png' }}></Image>
                        :
                        <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: IMAGE_URL + 'headerWhite.png' }}></Image>,
            }}
        >
            <Stack.Screen
                name="Home"
                children={(props) => <HomeScreen isDarkTheme={isDarkTheme} {...props}></HomeScreen>}
                options={{
                    headerTitle: () => <HeaderHome isDarkTheme={isDarkTheme} iconBadge={iconBadge} drawerNavigation={navigation}></HeaderHome>
                }}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Detail"
                children={(props) => <DetailScreen isDarkTheme={isDarkTheme} token={token} onLoadCartHandler={onLoadCartHandler} onClickUpdateIconBadge={onClickUpdateIconBadge} {...props} ></DetailScreen>}
                options={({ route }) => ({
                    headerTintColor: isDarkTheme ? '#fff' : 'black',
                    headerTitle: () => <HeaderDetail isDarkTheme={isDarkTheme} iconBadge={iconBadge} drawerNavigation={navigation} param={route.params}></HeaderDetail>
                })}
            >
            </Stack.Screen>
            <Stack.Screen
                name="About"
                children={(props) => <AboutScreen isDarkTheme={isDarkTheme} {...props}></AboutScreen>}
                options={({ route }) => ({
                    headerTintColor: isDarkTheme ? '#fff' : 'black',
                    headerTitle: () => <HeaderAbout isDarkTheme={isDarkTheme} param={route.params}></HeaderAbout>
                })}
            >
            </Stack.Screen>
            <Stack.Screen
                name="TopProduct"
                children={(props) => <TopProductScreen isDarkTheme={isDarkTheme} {...props}></TopProductScreen>}
                options={({ route }) => ({
                    headerTitle: () => <HeaderTop isDarkTheme={isDarkTheme} iconBadge={iconBadge} param={route.params}></HeaderTop>,
                    headerTintColor: isDarkTheme ? '#fff' : 'black',
                })}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Image"
                component={ImageScreen}
                options={{
                    title: '',
                    headerShown: false
                }}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}