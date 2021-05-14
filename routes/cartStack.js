import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/Cart/CartScreen';
import { HeaderCart } from '../shared/header';
import { Image } from 'react-native';
import { IMAGE_URL } from '../core/config';
import CheckOutScreen from '../screens/Cart/CheckOutScreen';

const Stack = createStackNavigator();

export default function CartStack({ navigation, onClickRouteLogin, onClickUpdateIconBadge }) {
    return (
      <Stack.Navigator>
        <Stack.Screen
            name="Cart"
            children={(props)=><CartScreen onClickRouteLogin={onClickRouteLogin} onClickUpdateIconBadge={onClickUpdateIconBadge} drawerNavigation={navigation} {...props}></CartScreen>}
            options={{
              headerBackground: ()=><Image style={{width:'100%',height:'100%',resizeMode:'cover'}} source={{uri:IMAGE_URL+'background_cart.png'}}></Image>,
              headerTitle: ()=><HeaderCart drawerNavigation={navigation}></HeaderCart>
            }}
        >
        </Stack.Screen>
        <Stack.Screen
          name="CheckOut"
          children={(props)=><CheckOutScreen onClickUpdateIconBadge={onClickUpdateIconBadge} {...props}></CheckOutScreen>}
          options={{
            headerShown: false
          }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    )
}
