import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderDetail, HeaderPurchased } from '../shared/header';
import PurchasedScreen from '../screens/Purchased/PurchasedScreen';
import DetailScreen from '../screens/Home/DetailScreen';


const Stack = createStackNavigator();

export default function PurchasedStack({ navigation, onClickRouteLogin }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Purchased"
                children={(props)=><PurchasedScreen onClickRouteLogin={onClickRouteLogin} {...props}></PurchasedScreen>}
                options={{
                    headerTitle: () => <HeaderPurchased drawerNavigation={navigation}></HeaderPurchased>
                }}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={({ route }) => ({ headerTitle: () => <HeaderDetail drawerNavigation={navigation} param={route.params}></HeaderDetail> })}
            >
            </Stack.Screen>
        </Stack.Navigator>
    );
}