import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderDetail, HeaderPurchased } from '../shared/header';
import PurchasedScreen from '../screens/Purchased/PurchasedScreen';
import DetailScreen from '../screens/Home/DetailScreen';


const Stack = createStackNavigator();

export default function PurchasedStack({ token, navigation, onClickRouteLogin, onLoadCartHandler, onClickUpdateIconBadge, iconBadge, listPurchased }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Purchased"
                children={(props) => <PurchasedScreen token={token} listPurchased={listPurchased} onClickRouteLogin={onClickRouteLogin} {...props}></PurchasedScreen>}
                options={{
                    headerTitle: () => <HeaderPurchased drawerNavigation={navigation}></HeaderPurchased>
                }}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Detail"
                children={(props) => <DetailScreen token={token} onLoadCartHandler={onLoadCartHandler} onClickUpdateIconBadge={onClickUpdateIconBadge} {...props} ></DetailScreen>}
                options={({ route }) => ({ headerTitle: () => <HeaderDetail iconBadge={iconBadge} drawerNavigation={navigation} param={route.params}></HeaderDetail> })}
            >
            </Stack.Screen>
        </Stack.Navigator>
    );
}