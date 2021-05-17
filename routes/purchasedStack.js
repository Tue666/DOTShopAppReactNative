import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderDetail, HeaderPurchased } from '../shared/header';
import PurchasedScreen from '../screens/Purchased/PurchasedScreen';
import DetailScreen from '../screens/Home/DetailScreen';


const Stack = createStackNavigator();

export default function PurchasedStack({ isDarkTheme, token, navigation, onClickRouteLogin, onLoadCartHandler, onClickUpdateIconBadge, iconBadge, listPurchased }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Purchased"
                children={(props) => <PurchasedScreen isDarkTheme={isDarkTheme} token={token} listPurchased={listPurchased} onClickRouteLogin={onClickRouteLogin} {...props}></PurchasedScreen>}
                options={{
                    headerBackground: () =>
                        isDarkTheme ?
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: 'https://img.freepik.com/free-vector/gold-luxury-background_52683-43998.jpg?size=626&ext=jpg' }}></Image>
                            :
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/001/874/132/small/abstract-geometric-white-background-free-vector.jpg' }}></Image>,
                    headerTitle: () => <HeaderPurchased isDarkTheme={isDarkTheme} drawerNavigation={navigation}></HeaderPurchased>
                }}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Detail"
                children={(props) => <DetailScreen isDarkTheme={isDarkTheme} token={token} onLoadCartHandler={onLoadCartHandler} onClickUpdateIconBadge={onClickUpdateIconBadge} {...props} ></DetailScreen>}
                options={({ route }) => ({
                    headerBackground: () =>
                        isDarkTheme ?
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: 'https://img.freepik.com/free-vector/gold-luxury-background_52683-43998.jpg?size=626&ext=jpg' }}></Image>
                            :
                            <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/001/874/132/small/abstract-geometric-white-background-free-vector.jpg' }}></Image>,
                    headerTintColor: isDarkTheme ? '#fff' : 'black',
                    headerTitle: () => <HeaderDetail isDarkTheme={isDarkTheme} iconBadge={iconBadge} drawerNavigation={navigation} param={route.params}></HeaderDetail>
                })}
            >
            </Stack.Screen>
        </Stack.Navigator>
    );
}